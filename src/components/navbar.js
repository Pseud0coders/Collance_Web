

import img1 from '../Collance_assets/Hero Section/NAV BAR/LOGO.png'
import React from 'react';

export default function Navbar(){

    return(
        <>
<nav class="bg-white border-gray-200 ">
  <div class="max-w-screen-xl flex flex-wrap items-center overflow-hidden justify-between  p-4">
    
        <img src={img1} className="h-12 object-cover ml-6" alt="CollanceLogo" />
    <div className="hidden w-full md:block md:w-auto">
      <ul class="font-medium flex flex-col ml-auto p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
        <li>
          <a href="#" className="block py-2 px-3 text-custom-blue font-black rounded">Hire Freelancers</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-custom-blue font-black rounded">Find Work</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-custom-blue font-black rounded">Collaborate</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-custom-blue font-black rounded">Explore</a>
        </li>
        <li>
          <button className="block py-2 px-3 ml-8 text-white bg-custom-blue font-black rounded-full">Signup</button>
        </li>
        <li>
          <button className="block py-2 px-3 text-white bg-custom-blue font-black rounded-full">Login</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
         )
}

