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
  console.log(slidesList)
  return (
    <div style={{margin: '20px ', maxWidth: "1200px"}}>
      <Slider {...settings} >
        {slidesList?.map(img => {
          return <div>
            <img style={{width: "100%", height:"250px"}} key={img._id} src={img.url} alt=""/>
          </div>
        })}
      </Slider>
    </div>
  );
};

export default Carousel;