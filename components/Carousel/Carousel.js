import React from "react";
import "./Carousel.scss";

const flickityOptions = {
  wrapAround: true,
  lazyLoad: 2
};

class Carousel extends React.Component {
  state = { Flickity: null };
  constructor(props) {
    super(props);
    if (typeof window !== "undefined") {
      const Flickity = require("react-flickity-component");
      this.state.Flickity = Flickity;
    }
  }
  render() {
    const { Flickity } = this.state;
    return (
      <div className="slider-container">
        {Flickity && (
          <Flickity options={flickityOptions}>{this.props.children}</Flickity>
        )}
      </div>
    );
  }
}

export default Carousel;
