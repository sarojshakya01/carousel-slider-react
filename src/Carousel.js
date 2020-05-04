import React from "react";
import "./App.css";
import ImageSlide from "./ImageSlide";
import Arrow from "./Arrow";

const imgUrls = [
  "/img/1.jpg",
  "/img/2.jpg",
  "/img/3.jpg",
  "/img/4.jpg",
  "/img/5.jpg",
];

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currImgIdx: 0,
    };
  }

  previousSlide = () => {
    const lastIdx = imgUrls.length - 1;
    const isFirstIdx = this.state.currImgIdx === 0;
    const idx = isFirstIdx ? lastIdx : this.state.currImgIdx - 1;
    this.setState({
      currImgIdx: idx,
    });
    // uncommment below line and comment line 23-28 if loop is not needed
    // this.setState({ currImgIdx: this.state.currImgIdx - 1 });
  };

  nextSlide = () => {
    const lastIdx = imgUrls.length - 1;
    const isLastIdx = this.state.currImgIdx == lastIdx;
    const idx = isLastIdx ? 0 : this.state.currImgIdx + 1;
    this.setState({
      currImgIdx: idx,
    });
    // uncommment below line and comment line 34-39 if loop is not needed
    // this.setState({ currImgIdx: this.state.currImgIdx + 1 });
  };

  render() {
    return (
      <div className="carousel">
        {this.state.currImgIdx === 0 ? null : (
          <Arrow direction="left" click={this.previousSlide} glyph="&#9664;" />
        )}

        <ImageSlide url={imgUrls[this.state.currImgIdx]} />
        {this.state.currImgIdx === imgUrls.length - 1 ? null : (
          <Arrow direction="right" click={this.nextSlide} glyph="&#9654;" />
        )}
      </div>
    );
  }
}

export default Carousel;
