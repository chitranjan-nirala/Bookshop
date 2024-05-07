import React, { useEffect, useState } from 'react'
import Cards from './Cards';
import axios from "axios"
import {Link} from "react-router-dom"
function Course() {
  const [book, setBook] =useState([])
  useEffect(() =>{
      const getBook  = async()=>{
        try {
        const res=  await axios.get("http://localhost:3002/book");
        console.log(res.data)
        setBook(res.data)
      }
        catch(error){
         console.log(error)
        }
      }
      getBook();
  },[])
  return (
  <>  <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div className='mt-28 items-center justify-center text-center'>
      <h1 className='text-2xl  md:text-4xl'> we are delighted to have <span className='text-pink-500'>you!</span></h1>
     <p className=' mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium laboriosam facere esse ad suscipit et consequuntur 
      odit, aliquid reiciendis accusantium odio nulla repudiandae cum,
       ipsum dolorum? Quam non possimus beatae?</p>
   <Link to={"/"}><button className='bg-pink-500 text-white px-4 py-2 rounded hover:bg-blue-700 duration-200'> Back </button></Link>
    </div>
    <div className=' mt-12 grid grid-cols-1 md:grid-cols-4'>
      {
        book.map((item)=>(
       <Cards key ={item.id} item={item}/> 
        ))  
      }
    </div>
  </div>

  </>
  )
}

export default Course;