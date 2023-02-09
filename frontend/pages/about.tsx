import Head from "next/head";
import LinkMenu from "../components/LinkMenu";

const About = () => {
  return (
    <>
      <Head>
        <title>Next js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <LinkMenu />
        <h1>About Page</h1>
      </main>
    </>
  );
};

export default About;
