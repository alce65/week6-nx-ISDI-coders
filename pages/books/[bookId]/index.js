import { ObjectId } from "bson";
import Head from "next/head";
import { useRouter } from "next/router";
import { Detail } from "../../../components/books/detail";
import { Layout } from "../../../components/core/layout";
import { getAllBooks, getBookById } from "../../../lib/crud";
import { createBookSrv } from "../../../services/books-srv";

export default function BookDetail({ book }) {
  const router = useRouter();
  // const id = router.query.bookId;
  // const book = createBookSrv().getBookData(id);
  return (
    <>
      <Head>
        <title>Book {book.id} - Learning Next</title>
      </Head>
      <Layout>
        <Detail book={book} />
        <div>
          <button
            onClick={() => {
              // router.push("/books");
              router.back();
            }}
          >
            Back to libros
          </button>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  const id = context.params.bookId;
  const bookData = await getBookById(id);
  const book = { ...bookData, _id: ObjectId(bookData._id).toString() };
  console.log(id, book);
  return {
    props: {
      book,
    },
  };
}

export async function getStaticPaths() {
  const allIds = await getAllBooks();
  const paths = allIds.map((item) => {
    return { params: { bookId: String(item._id) } };
  });
  return {
    paths,
    fallback: false,
  };
}
