import Head from "next/head";
import { Card } from "../components/core/card";
import { Grid } from "../components/core/grid";
import { Layout } from "../components/core/layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  const cards = [
    {
      link: "https://nextjs.org/docs",
      title: "Documentation",
      content: "Find in-depth information about Next.js features and API.",
    },
    {
      link: "https://nextjs.org/learn",
      title: "Learn",
      content: "Learn about Next.js in an interactive course with quizzes!",
    },
    {
      link: "https://github.com/vercel/next.js/tree/master/examples",
      title: "Examples",
      content: "Discover and deploy boilerplate example Next.js projects.",
    },
    {
      link: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
      title: "Deploy",
      content:
        "Instantly deploy your Next.js site to a public URL with Vercel.",
    },
  ];

  return (
    <>
      <Head>
        <title>Home - Learning Next</title>
      </Head>
      <Layout>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
          <p className={styles.description}>
            Get started by editing{" "}
            <code className={styles.code}>pages/index.js</code>
          </p>
          <Grid>
            {cards.map((item) => (
              <Card key={item.title} link={item.link} title={item.title}>
                {item.content}
              </Card>
            ))}
          </Grid>
        </main>
      </Layout>
    </>
  );
}
