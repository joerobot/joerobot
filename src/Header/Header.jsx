import React from 'react';

class Header extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            document.querySelector('.circle').classList.add('intro');
        }, 100);
        setTimeout(() => {
            document.querySelector('.title').classList.add('intro');
        }, 200);
        setTimeout(() => {
            document.querySelector('.triangle').classList.add('intro');
        }, 500);
    }
    render() {
        return (
        <div className="portfolio-header">
          <div className="triangle" />
          <div className="circle" />
          <div className="title">
            <h1>
              <span className="name">Joe</span>
              <span className="name">Reed</span>
            </h1>
            <div className="subtitle">
                <h4>Web Developer</h4>
            </div>
          </div>
        </div>
        );
    }
}

export default Header;
