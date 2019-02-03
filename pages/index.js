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
      <link rel='shortcut icon' type='image/x-icon' href='/static/img/favicons/favicon.ico' />
      
      <meta name="description" content="A front end specialist with a focus on UI & Data Visualisation" />
      <meta property="og:title" content="joerobot - web developer" />
      <meta property="og:description" content="A front end specialist with a focus on UI & Data Visualisation" />
      <meta property="og:url" content="https://www.joerobot.co.uk" />
      <meta name="twitter:site" content="@joerobot" />
      <meta property="og:image" content="/static/img/favicons/64x64.png" />

    </Head>
    <Header />
    <Projects />
    <Person />
    <Footer />
  </div>
);
