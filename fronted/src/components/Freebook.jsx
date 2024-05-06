import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json"
import Cards from './Cards';

function Freebook() {
  const filterData = list.filter((data)=>data.category === "free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-10 px-10">
      <div>
        <h1 className="font-bold text-xl">Free offered Courses</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi ab
          minus, deserunt atque fugit sit dolorum, eum nobis alias neque
          pariatur. Voluptates ipsa quis sequi reprehenderit quaerat unde,
          doloremque reiciendis.
        </p>
      </div>
      <div>
        <Slider {...settings}>
        {filterData.map((item)=>(<Cards item ={item} key={item.id}/>))}
        </Slider>
      </div>
    </div>
  );
}

export default Freebook;
