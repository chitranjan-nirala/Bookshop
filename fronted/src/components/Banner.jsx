import React from "react";
import bookshop from "../../public/bookshop.jpg";

function Banner() {
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 flex flex-col md:flex-row items-center justify-between py-12 md:py-32">
      <div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-left md:pr-8 space-y-8 md:space-y-12">
        <h1 className="text-4xl font-bold">
          Hello, welcome to learn new{" "}
          <span className="text-yellow-400">technology!</span>
        </h1>
        <p className="text-xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          fuga similique cum iure.
        </p>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input type="text" className="grow outline-none" placeholder="Email" />
        </label>
        <button className="btn btn-secondary">Subscribe</button>
      </div>
      <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center md:justify-end">
        <img src={bookshop} className="w-80 h-92 rounded-lg" alt="Bookshop" />
      </div>
    </div>
  );
}

export default Banner;
