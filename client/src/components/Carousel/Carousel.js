import React from 'react';
import Slider from "react-slick";
import "./slick(rewritten).css";
import "./slick-theme(rewritten).css";

const Carousel = ({slidesList}) => {

  const SampleNextArrow = (props) => {
    const {className, onClick, style} = props;
    return (<div
      className={className}
      style={{...style, display: "block"}}
      onClick={onClick}
    />)
  }

  const SamplePrevArrow = (props) => {
    const {className, onClick, style} = props;
    return (<div
      className={className}
      style={{...style, display: "block"}}
      onClick={onClick}
    />)
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>
  };

  return (
    <div style={{margin: '20px ', maxWidth: "1200px"}}>
      <Slider {...settings} >
      {/*  {slidesList?.map(img => {*/}
      {/*    return <div>*/}
      {/*      <img key={img.id} src={img.url} alt=""/>*/}
      {/*    </div>*/}
      {/*  })}*/}

        <div >
          <div style={{height: "150px", width: "300px", background: "red", border: "1ps solid red"}}></div>
          {/*<h3>sdfdsfdsf</h3>*/}
        </div>
        <div>
          <div style={{height: "150px", width: "300px", background: "red", border: "1ps solid red"}}></div>
        </div>
        <div>
          <div style={{height: "150px", width: "300px", background: "red", border: "1ps solid red"}}></div>
        </div>
        <div>
          <div style={{height: "150px", width: "300px", background: "red", border: "1ps solid red"}}></div>
        </div>
        <div>
          <div style={{height: "150px", width: "300px", background: "red", border: "1ps solid red"}}></div>
        </div>
        <div>
          <div style={{height: "150px", width: "300px", background: "red", border: "1ps solid red"}}></div>
        </div>
        <div>
          <div style={{height: "150px", width: "300px", background: "red", border: "1ps solid red"}}></div>
        </div>
        <div>
          <div style={{height: "150px", width: "300px", background: "red", border: "1ps solid red"}}></div>
        </div>
        <div>
          <div style={{height: "150px", width: "300px", background: "red", border: "1ps solid red"}}></div>
        </div>
        <div>
          <div style={{height: "150px", width: "300px", background: "red", border: "1ps solid red"}}></div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;