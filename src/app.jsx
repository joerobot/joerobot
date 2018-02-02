import React from 'react';
import '../styles/index.scss';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import Projects from './Projects/Projects';
import Person from './Person/Person';
import Footer from './Footer/Footer';

export default class App extends React.Component {
  render() {
    return (
        <div>
            <section className="header">
                <Header />
                <Nav />
            </section>
            <section className="projects">
                <Projects />
            </section>
            <section className="person">
                <Person />
            </section>
            <footer>
                <Footer />
            </footer>
        </div>
    )
  }
}
