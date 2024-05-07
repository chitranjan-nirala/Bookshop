import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';
function Freebook() {
  const [book, setBook] =useState([])
  useEffect(() =>{
      const getBook  = async()=>{
        try {
        const res=  await axios.get("http://localhost:3002/book");
        console.log(res.data)
        setBook(res.data.filter((data)=>data.category === "free"))
      }
        catch(error){
         console.log(error)
        }
      }
      getBook();
  },[])

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
        {book.map((item)=>(<Cards item ={item} key={item.id}/>))}
        </Slider>
      </div>
    </div>
  );
}

export default Freebook;
