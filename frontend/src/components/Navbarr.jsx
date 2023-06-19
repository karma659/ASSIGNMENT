import React from "react";
import {Link} from "react-router-dom";


const Navbarr = () => {
   return (
      <div className=" pl-20 pr-20 pt-2 pb-2 fixed w-screen expand-lg h-[60px]  md:font-extrabold flex justify-evenly  bg-neutral-100">
        
            <Link to={"/Market"}>
               <button className=" md:pl-20 md:pr-20 pt-1 pb-2   bg-zinc-400 rounded-md border-4 hover:text-black-800 hover:border-black  hover:bg-white">Market</button>
            </Link>
            <Link to={"/OemSpecs"}>
               <button className=" md:pl-20 md:pr-20 pt-1 pb-2  bg-zinc-400 rounded-md border-4 hover:text-black-800 hover:border-black  hover:bg-white" >OemSpecs</button>
            </Link>
            <Link to={"/MyInventory"}>
               <button className="md:pl-20 md:pr-20 pt-1 pb-2  bg-zinc-400 rounded-md border-4 hover:text-black-800 hover:border-black  hover:bg-white whitespace-nowrap " >My Inventory</button>
            </Link>
 
      </div>
   )
};

export default Navbarr;
