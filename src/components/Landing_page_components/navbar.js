

import img1 from '../../Collance_assets/Landing_page_assets/Hero Section/NAV BAR/LOGO.png'
import React from 'react';
import './navbar.css';
import { Link } from 'react-router';

export default function Navbar(){

    return(
        <>
<nav class="navbar bg-white border-gray-200 ">
  <div class=" flex flex-wrap items-center overflow-hidden justify-between  p-4">
      <Link to="/">
        <img src={img1} className="h-12 object-cover ml-6" alt="CollanceLogo" />
      </Link>
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
          <Link to="/signup">
            <button className="block py-2 px-3 ml-8 text-white bg-custom-blue font-black rounded-lg transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_grey] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">Signup</button>
          </Link>
        </li>
        <li>
          <Link to="/login">
            <button className="block py-2 px-3 text-white bg-custom-blue font-black rounded-lg transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_grey] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">Login</button>
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
         )
}

