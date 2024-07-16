// import React from 'react'
import Header from "../components/Header.jsx"
import { Link } from "react-router-dom";
function CartPage() {
  return (
    <>
      <Header />
      <div>
       
        {/* <Link to='/'>ShadeWorld</Link> */}

        <h1 className="font-bold p-4 text-center">Cart</h1>
        <hr className="border-1 border-gray-300 my-4 mx-14 " />
       
        <div className="overflow-x-auto flex flex-col md:flex md:flex-row md:gap-12  p-12 my-10">

          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  {/* <label>
                    <input type="checkbox" className="checkbox" />
                  </label> */}
                </th>
                <th>Product</th>
                <th>Units</th>
                <th>Price</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th className="hidden md:flex">
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td className="w-60">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="h-20 w-20 rounded-md">
                        <img
                          src="/images/shade-9.jpeg"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Regular Frame</div>
                      <div className="text-sm opacity-50 active:text-black">Remove</div>
                    </div>
                  </div>
                </td>
                <td>
                 <div className="flex text-center rounded-lg p-2 shadow-lg w-20">
                    <button className="font-bold mx-auto text-gray-300 active:text-black">-</button>
                    <span className="text-gray-300">0</span>
                    <button className="font-bold mx-auto text-gray-300 active:text-black">+</button>
                 </div>
                </td>
                <td className="font-bold">$ 7,99</td>
                <th>
                  <button className="btn btn-ghost btn-xs font-bold">$ 7,99</button>
                </th>
              </tr>

              {/* row 2 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="h-20 w-20 rounded-md">
                        <img
                          src="/images/shade-9.jpeg"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Regular Frame</div>
                      <div className="text-sm opacity-50 active:text-black">Remove</div>
                    </div>
                  </div>
                </td>
                <td>
                 <div className="flex text-center rounded-lg p-2 shadow-lg w-20">
                    <button className="font-bold mx-auto text-gray-300 active:text-black">-</button>
                    <span className="text-gray-300">0</span>
                    <button className="font-bold mx-auto text-gray-300 active:text-black">+</button>
                 </div>
                </td>
                <td className="font-bold">$ 7,99</td>
                <th>
                  <button className="btn btn-ghost btn-xs font-bold">$ 7,99</button>
                </th>
              </tr>

              {/* row 3 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="h-20 w-20 rounded-md">
                        <img
                          src="/images/shade-9.jpeg"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Regular Frame</div>
                      <div className="text-sm opacity-50 active:text-black">Remove</div>
                    </div>
                  </div>
                </td>
                <td>
                 <div className="flex text-center rounded-lg p-2 shadow-lg w-20">
                    <button className="font-bold mx-auto text-gray-300 active:text-black">-</button>
                    <span className="text-gray-300">0</span>
                    <button className="font-bold mx-auto text-gray-300 active:text-black">+</button>
                 </div>
                </td>
                <td className="font-bold">$ 7,99</td>
                <th>
                  <button className="btn btn-ghost btn-xs font-bold">$ 7,99</button>
                </th>
              </tr>

              {/* row 4 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="h-20 w-20 rounded-md">
                        <img
                          src="/images/shade-9.jpeg"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Regular Frame</div>
                      <div className="text-sm opacity-50 active:text-black">Remove</div>
                    </div>
                  </div>
                </td>
                <td>
                 <div className="flex text-center rounded-lg p-2 shadow-lg w-20">
                    <button className="font-bold mx-auto text-gray-300 active:text-black">-</button>
                    <span className="text-gray-300">0</span>
                    <button className="font-bold mx-auto text-gray-300 active:text-black">+</button>
                 </div>
                </td>
                <td className="font-bold">$ 7,99</td>
                <th>
                  <button className="btn btn-ghost btn-xs font-bold">$ 7,99</button>
                </th>
              </tr>
            </tbody>
           
            {/* foot */}
            {/* <tfoot>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </tfoot> */}
          </table>

          {/* checkout */}
          <div className="flex flex-col justify-between mt-8 border-2 p-4 border-gray-300 rounded-lg w-72">
            <h4>Cart summary</h4>
            
            <div className="flex flex-row justify-between p-2 rounded-lg border-2 border-gray-300 w-60">
                <div className="flex gap-2"><input type="radio" placeholder="Pick up"/>
                <label htmlFor="pick up" className="text-gray-400">Free Delivery</label></div>
                <span className="flex"><p>$</p> 1.00</span>
            </div>

            <div className="flex flex-row justify-between p-2 rounded-lg border-2 border-gray-300 w-60">
                <div className="flex gap-2"><input type="radio" placeholder="Pick up"/>
                <label htmlFor="pick up" className="text-gray-400">Pick up</label></div>
                <span className="flex"><p>$</p> 1.00</span>
            </div>

            <div className="flex flex-row justify-between my-4">
            <p className="text-sm">Subtotal:</p>
            <span> $1,000</span>
            </div>

            <div className="flex flex-row justify-between">
                <p className="text-sm font-bold">Total:</p>
                <span> $0.00</span>
            </div>
            
            <button className="btn bg-purple-950 text-white"> <Link to="/CheckOut">Checkout</Link></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
