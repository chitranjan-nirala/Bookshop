import React from 'react'

function Cards({item}) {
  if (!item) {
    return 
  }
  return (
   <>
    <div className='mt-4 my-3 p-3'>
    <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200">
  <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div> 
      <div className="badge badge-outline cursor-pointer px-2 py-2 hover:bg-pink-500 hover:text-white duration-200">Products</div>
    </div>
  </div>
</div>
      </div></>
  )
}

export default Cards;