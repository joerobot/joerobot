import React from "react";
import "./Header.scss";

class Header extends React.Component {
  constructor() {
    super();
    this.isAnimating = false;
  }
  componentDidMount() {
    setTimeout(() => {
      document.querySelector(".circle").classList.add("intro");
    }, 100);
    setTimeout(() => {
      document.querySelector(".title").classList.add("intro");
    }, 200);
    setTimeout(() => {
      document.querySelector(".triangle").classList.add("intro");
    }, 500);
    setTimeout(() => {
      document.querySelector(".circle").classList.add("pulse");
    }, 1000);
  }
  prod() {
    const circle = document.querySelector(".circle");
    if (!Header.isAnimating) {
      circle.classList.remove("pulse");
      void circle.offsetWidth;
      Header.isAnimating = true;
      circle.classList.add("pulse");
      setTimeout(() => {
        Header.isAnimating = false;
      }, 1000);
    }
  }
  render() {
    return (
      <section className="portfolio-header">
        <div className="triangle" />
        <div className="triangle-lower" />
        <div className="circle" onClick={this.prod} />
        <div className="title" onClick={this.prod}>
          <h1>
            <span className="name">Joe</span>
            <span className="name">Reed</span>
          </h1>
          <div className="subtitle">
            <h4>Web Developer</h4>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
