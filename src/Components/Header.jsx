import React from "react";
import img from '../assets/logo.png'

function Header() {
  return (
    <div className="px-2 pt-4 text-3xl text-center flex justify-between items-center text-yellow-500">
      <img src={img} alt="logo" width={250} height={400}/>
      
    </div>
  );
}

export default Header;
