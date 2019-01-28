import Head from "next/head";
import "../styles/index.scss";
import Header from "../components/Header/Header";
import Projects from "../components/Projects/Projects";
import Person from "../components/Person/Person";
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

export default () => (
  <div>
    <Head>
      <title>joerobot - web developer</title>
      <meta name="viewport" content="width=device-width" />
      <link
        rel="stylesheet"
        href="//fontlibrary.org/face/hk-grotesk"
        type="text/css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Rasa"
        rel="stylesheet"
      />
    </Head>
    <Header />
    <Projects />
    <Person />
    <Footer />
  </div>
);
