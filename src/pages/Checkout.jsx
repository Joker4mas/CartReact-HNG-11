// import React from 'react'

import Header from "../components/Header"

const Checkout = () => {
  return (
    <>
    <Header/>
    <div className=" p-4">
      <h1 className="text-2xl font-bold text-center my-4">
      Checkout
      </h1>

    <hr className=" border-1 border-gray-300 w-90 mx-8" />

      <div className="flex flex-col  md:flex-row justify-around max-w-90 p-4 my-4">
        <form>
          <div className="contact grid grid-row-2 grid-row-2 p-2  gap-4">
          <div className="grid grid-col-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col w-80">
            <label htmlFor="name" className="mb-2">First Name:</label>
            <input type="text" id="name" name="name" className="p-2 rounded-xl" placeholder="First Name"  required />
          </div>
          <div className="flex flex-col  w-80">
            <label htmlFor="lastName" className="mb-2">Last Name</label>
            <input type="text" id="LastName" name="lastName" className="p-2 rounded-xl" placeholder="Last Name"  required />
          </div>
          </div>
          <div  className="flex flex-col">
            <label htmlFor="phone" className="mb-2">Phone:</label>
            <input type="tel" id="phone" name="phone" className="p-2 rounded-xl" placeholder="Phone Number"    required />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2">Email address</label>
            <input type="email" id="email" name="email" className="p-2 rounded-xl" placeholder="Your email"  required />
          </div>
          </div>
          {/* second form */}
          <div className="contact grid grid-row-2 grid-row-2  gap-4 my-3 p-2 rounded-lg">
       
          <div  className="flex flex-col">
            <label htmlFor="phone" className="mb-2">Phone:</label>
            <input type="tel" id="phone" name="phone" className="p-2 rounded-xl" placeholder="Phone Number"    required />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2">Email address</label>
            <input type="email" id="email" name="email" className="p-2 rounded-xl" placeholder="Your email"  required />
          </div>
          </div>
         
          </form>
          <div className="border-2  border-slate-300 text-center rounded-lg">
            <h1 className="font-bold my-4">Order Summary</h1>
            <div>
            <table className="table">
            {/* head */}
            <thead>
              <tr className="">
                <th>
                  {/* <label>
                    <input type="checkbox" className="checkbox" />
                  </label> */}
                </th>
                <th className="">Product</th>
                <th className="hidden ">Units</th>
                <th className="mx-4 hidden">Price</th>
                <th className="hidden md:block md:-mr-14 border-2 border-green-600">Subtotal</th>
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
                 <div className="hidden text-center rounded-lg p-2 shadow-lg w-20">
                    <button className="font-bold mx-auto text-gray-300 active:text-black">-</button>
                    <span className="text-gray-300">0</span>
                    <button className="font-bold mx-auto text-gray-300 active:text-black">+</button>
                 </div>
                </td>
                <td className="font-bold">$ 7,99</td>
                <th>
                  <button className="hidden btn btn-ghost btn-xs font-bold">$ 7,99</button>
                </th>
              </tr>

              {/* row 2 */}
              <tr>
                <th className="hidden md:flex">
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
                 <div className="hidden text-center rounded-lg p-2 shadow-lg w-20">
                    <button className="font-bold mx-auto text-gray-300 active:text-black">-</button>
                    <span className="text-gray-300">0</span>
                    <button className="font-bold mx-auto text-gray-300 active:text-black">+</button>
                 </div>
                </td>
                <td className="font-bold">$ 7,99</td>
                <th>
                  <button className="hidden btn btn-ghost btn-xs font-bold">$ 7,99</button>
                </th>
              </tr>

              {/* row 3 */}
              <tr>
                <th className="hidden md:flex">
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
                 <div className="hidden text-center rounded-lg p-2 shadow-lg w-20">
                    <button className="font-bold mx-auto text-gray-300 active:text-black">-</button>
                    <span className="text-gray-300">0</span>
                    <button className="font-bold mx-auto text-gray-300 active:text-black">+</button>
                 </div>
                </td>
                <td className="font-bold">$ 7,99</td>
                <th>
                  <button className="hidden btn btn-ghost btn-xs font-bold">$ 7,99</button>
                </th>
              </tr>

              {/* row 4 */}
              <tr>
                <th className="hidden md:flex">
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
                 <div className="hidden text-center rounded-lg p-2 shadow-lg w-20">
                    <button className="font-bold mx-auto text-gray-300 active:text-black">-</button>
                    <span className="text-gray-300">0</span>
                    <button className="font-bold mx-auto text-gray-300 active:text-black">+</button>
                 </div>
                </td>
                <td className="font-bold">$ 7,99</td>
                <th>
                  <button className=" hidden btn btn-ghost btn-xs font-bold">$ 7,99</button>
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
            </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default Checkout