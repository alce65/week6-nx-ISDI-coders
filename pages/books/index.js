// import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { Card } from "../../components/books/card";
import { Header } from "../../components/books/header";
import { Grid } from "../../components/core/grid";
import { Layout } from "../../components/core/layout";
// import { createBookSrv } from "../../services/books-srv";
import { getAllBooks } from "../../lib/crud";
import { ObjectId } from "mongodb";

export default function Books({ books }) {
  /* const [books, setBooks] = useState([]);
  useEffect(() => {
    setBooks(createBookSrv().getAllBooks());
  }, []); */

  return (
    <>
      <Head>
        <title>Books - Learning Next</title>
      </Head>
      <Layout>
        <Header />
        <Grid>
          {books.map((item) => (
            <Link href={`/books/${item._id}`} key={item._id}>
              <a>
                <Card authors={item.authors} title={item.title}></Card>
              </a>
            </Link>
          ))}
        </Grid>
      </Layout>
    </>
  );
}

/**
 * - getStaticProps()
 * - getServerSideProps()
 * Automatically executed in the server before
 * the component function => its possible to include
 * the code that needs a secure environment
 * (it never will be executed in the client)
 *
 */
export async function getStaticProps() {
  const data = await getAllBooks();
  const modifyData = data.map((item) => {
    const result = { ...item, _id: ObjectId(item._id).toString() };
    delete result.authors;
    return result;
  });
  console.log(modifyData);
  return {
    props: {
      // books: [...createBookSrv().getAllBooks()],
      books: modifyData,
    },
    revalidate: 1,
  };
}

/* export async function getServerSideProps(context) {
  console.log(context);
  return {
    props: {
      books: [...createBookSrv().getAllBooks()],
    },
  };
} */
