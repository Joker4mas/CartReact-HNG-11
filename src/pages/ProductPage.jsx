// import React from 'react'
// import Header from '../components/Header.jsx'
import {Link} from 'react-router-dom'
const ProductPage = () => {
  return (
    <div className="p-4 mx-auto">
      <div>
        <Link to='/'>ShadeWorld</Link>
      </div>
      <h1 className="text-3xl font-bold my-4 text-center">ProductPage</h1>
      <div className="grid grid-cols-1 justify-center mx-auto md:grid-cols-4 md:grid-row-3 md:grid-flow-cols gap-8 md:justify-between items-center text-center p-4">
        
        {/* first container card */}
        <div className="card bg-base-100 w-90 shadow-xl">
          <figure>
            <img
              src="../assets/first-shade.png"
              alt="Glass frame"
             className=" mt-1 rounded-md"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Premium Frame</h2>
            <p className="text-start">Sleek and sophisticated frames for crystal-clear vision and effortless style, perfect for any occasion</p>
            
            <div className="card-actions justify-between mt-2">
              <div className="shadow-lg rounded-lg text-center w-24">
                <button className="font-bold m-2 p-1 shadow-md active:bg-purple-900 active:text-white rounded">-</button>
                <span>0</span>
                <button className="font-bold m-2 p-1 shadow-md active:bg-purple-900 active:text-white rounded">+</button>
              </div>
               <button className="btn bg-purple-950 text-white">Add to cart</button>
            </div>
          </div>
        </div>

        {/* second card */}
        <div className="card bg-base-100 w-90 shadow-xl ">
          <figure>
            <img
              src="/src/assets/shade-2.png"
              alt="Glass frame"
             className=" mt-1 rounded-md"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Premium Frame</h2>
            <p className="text-start">Sleek and sophisticated frames for crystal-clear vision and effortless style, perfect for any occasion</p>
            
            <div className="card-actions justify-between mt-2">
              <div className="shadow-lg rounded-lg  text-center w-24 h-">
                <button className="font-bold m-2 p-1 shadow-md active:bg-purple-900 active:text-white rounded">-</button>
                <span>0</span>
                <button className="font-bold m-2 p-1 shadow-md active:bg-purple-900 active:text-white rounded">+</button>
              </div>
               <button className="btn bg-purple-950 text-white">Add to cart</button>
            </div>
          </div>
        </div>

        {/* third card */}
        <div className="card bg-base-100 w-90 shadow-xl">
          <figure>
            <img
              src="/src/assets/shade-3.png"
              alt="Glass frame"
             className=" mt-1 rounded-md"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Premium Frame</h2>
            <p className="text-start">Sleek and sophisticated frames for crystal-clear vision and effortless style, perfect for any occasion</p>
            
            <div className="card-actions justify-between mt-2">
              <div className="shadow-lg rounded-lg  text-center w-24">
                <button className="font-bold m-2 p-1 shadow-md active:bg-purple-900 active:text-white rounded">-</button>
                <span>0</span>
                <button className="font-bold m-2 p-1 shadow-md active:bg-purple-900 active:text-white rounded">+</button>
              </div>
               <button className="btn bg-purple-950 text-white">Add to cart</button>
            </div>
          </div>
        </div>

        {/* fourth card */}
        <div className="card bg-base-100 w-90 shadow-xl">
          <figure>
            <img
              src="./src/assets/shade-4.png"
              alt="Glass frame"
             className=" mt-1 rounded-md"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Premium Frame</h2>
            <p className="text-start">Sleek and sophisticated frames for crystal-clear vision and effortless style, perfect for any occasion</p>
            
            <div className="card-actions justify-between mt-2">
              <div className="shadow-lg rounded-lg text-center w-24">
                <button className="font-bold m-2 p-1 shadow-md active:bg-purple-900 active:text-white rounded">-</button>
                <span>0</span>
                <button className="font-bold m-2 p-1 shadow-md active:bg-purple-900 active:text-white rounded">+</button>
              </div>
               <button className="btn bg-purple-950 text-white">Add to cart</button>
            </div>
          </div>
        </div>

        {/* fifth card */}
        <div className="card bg-base-100 w-90 shadow-xl">
          <figure>
            <img
              src="./src/assets/shade-9.png"
              alt="Glass frame"
             className=" mt-1 rounded-md"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Premium Frame</h2>
            <p className="text-start">Sleek and sophisticated frames for crystal-clear vision and effortless style, perfect for any occasion</p>
            
            <div className="card-actions justify-between mt-2">
              <div className="shadow-lg rounded-lg text-center w-24">
                <button className="font-bold m-2 p-1 shadow-md active:bg-purple-900 active:text-white rounded">-</button>
                <span>0</span>
                <button className="font-bold m-2 p-1 shadow-md active:bg-purple-900 active:text-white rounded">+</button>
              </div>
               <button className="btn bg-purple-950 text-white">Add to cart</button>
            </div>
          </div>
        </div>


    {/* sixth card */}
    <div className="card bg-base-100 w-90 shadow-xl">
          <figure>
            <img
              src="./src/assets/shade-6.png"
              alt="Glass frame"
             className=" mt-1 rounded-md"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Premium Frame</h2>
            <p className="text-start">Sleek and sophisticated frames for crystal-clear vision and effortless style, perfect for any occasion</p>
            
            <div className="card-actions justify-between mt-2">
              <div className="shadow-lg rounded-lg text-center w-24">
                <button className="font-bold m-2 p-1 shadow-md active:bg-purple-900 active:text-white rounded">-</button>
                <span>0</span>
                <button className="font-bold m-2 p-1 shadow-md active:bg-purple-900 active:text-white rounded">+</button>
              </div>
               <button className="btn bg-purple-950 text-white">Add to cart</button>
            </div>
          </div>
        </div>

        {/* seventh card */}
        <div className="card bg-base-100 w-90 shadow-xl">
          <figure>
            <img
              src="./src/assets/shade-7.png"
              alt="Glass frame"
             className=" mt-1 rounded-md"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Premium Frame</h2>
            <p className="text-start">Sleek and sophisticated frames for crystal-clear vision and effortless style, perfect for any occasion</p>
            
            <div className="card-actions justify-between mt-2">
              <div className="shadow-lg rounded-lg text-center w-24 h-">
                <button className="font-bold m-2 p-1 shadow-md active:bg-purple-900 active:text-white rounded">-</button>
                <span>0</span>
                <button className="font-bold m-2 p-1 shadow-md active:bg-purple-900 active:text-white rounded">+</button>
              </div>
               <button className="btn bg-purple-950 text-white">Add to cart</button>
            </div>
          </div>
        </div>

        {/* eighth card */}
        <div className="card bg-base-100 w-90 shadow-xl">
          <figure>
            <img
              src="./src/assets/shade-8.png"
              alt="Glass frame"
             className=" mt-1 rounded-md"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Premium Frame</h2>
            <p className="text-start">Sleek and sophisticated frames for crystal-clear vision and effortless style, perfect for any occasion</p>
            
            <div className="card-actions justify-between mt-2">
              <div className="shadow-lg rounded-lg text-center w-24 h-">
                <button className="font-bold m-2 p-1 shadow-md active:bg-purple-900 active:text-white rounded">-</button>
                <span>0</span>
                <button className="font-bold m-2 p-1 shadow-md active:bg-purple-900 active:text-white rounded">+</button>
              </div>
               <button className="btn bg-purple-950 text-white">Add to cart</button>
            </div>
          </div>
        </div>

        {/* ninth card */}
        <div className="card bg-base-100 w-90 shadow-xl">
          <figure>
            <img
              src="./src/assets/shade-2.png"
              alt="Glass frame"
             className=" mt-1 rounded-md"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Premium Frame</h2>
            <p className="text-start">Sleek and sophisticated frames for crystal-clear vision and effortless style, perfect for any occasion</p>
            
            <div className="card-actions justify-between mt-2">
              <div className="shadow-lg rounded-lg text-center w-24 h-">
                <button className="font-bold m-2 p-1 shadow-md active:bg-purple-900 active:text-white rounded">-</button>
                <span>0</span>
                <button className="font-bold m-2 p-1 shadow-md active:bg-purple-900 active:text-white rounded">+</button>
              </div>
               <button className="btn bg-purple-950 text-white">Add to cart</button>
            </div>
          </div>
        </div>

        {/* tenth card */}
        <div className="card bg-base-100 w-90 shadow-xl">
          <figure>
            <img
              src="./src/assets/shade-3.png"
              alt="Glass frame"
             className=" mt-1 rounded-md"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Premium Frame</h2>
            <p className="text-start">Sleek and sophisticated frames for crystal-clear vision and effortless style, perfect for any occasion</p>
            
            <div className="card-actions justify-between mt-2">
              <div className="shadow-lg rounded-lg  text-center w-24 h-">
                <button className="font-bold m-2 p-1 shadow-md active:bg-purple-900 active:text-white rounded">-</button>
                <span>0</span>
                <button className="font-bold m-2 p-1 shadow-md active:bg-purple-900 active:text-white rounded">+</button>
              </div>
               <button className="btn bg-purple-950 text-white">Add to cart</button>
            </div>
          </div>
        </div>

        {/* eleventh card */}
        <div className="card bg-base-100 w-90 shadow-xl">
          <figure>
            <img
              src="./src/assets/shade-2.png"
              alt="Glass frame"
             className=" mt-1 rounded-md"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Premium Frame</h2>
            <p className="text-start">Sleek and sophisticated frames for crystal-clear vision and effortless style, perfect for any occasion</p>
            
            <div className="card-actions justify-between mt-2">
              <div className="shadow-lg rounded-lg text-center w-24 h-">
                <button className="font-bold m-2 p-1 shadow-md active:bg-purple-900 active:text-white rounded">-</button>
                <span>0</span>
                <button className="font-bold m-2 p-1 shadow-md active:bg-purple-900 active:text-white rounded">+</button>
              </div>
               <button className="btn bg-purple-950 text-white">Add to cart</button>
            </div>
          </div>
        </div>

        {/* 12th card */}
        <div className="card bg-base-100 w-90 shadow-x ">
          <figure>
            <img
              src="./src/assets/shade-4.png"
              alt="Glass frame"
             className=" mt-1 rounded-md"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Premium Frame</h2>
            <p className="text-start">Sleek and sophisticated frames for crystal-clear vision and effortless style, perfect for any occasion</p>
            
            <div className="card-actions justify-between mt-2">
              <div className="shadow-lg rounded-lg  w-24 text-center">
                <button className="font-bold m-2 p-2 shadow-md active:bg-purple-900 active:text-white rounded">-</button>
                <span>0</span>
                <button className="font-bold m-2 p-2 shadow-md active:bg-purple-900 active:text-white rounded">+</button>
              </div>
               <button className="btn bg-purple-950 text-white">Add to cart</button>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default ProductPage;
