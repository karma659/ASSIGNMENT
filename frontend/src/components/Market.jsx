import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Marketcard from "./Marketcard";
import Navbarr from "./Navbarr";


const Market = () => {
   const [Cards, setCards] = useState([]);
 
   

   useEffect(() => {        
      var token = Cookies.get('token');
        console.log("token",token);
         
         if (!token) {
           window.location.href = '/Login'; 
         }
           

   const fetchData = async() => {
      try {
        
         const response = await axios.get("http://localhost:5000/marketPlaceInventory/", {
            headers: {
               Authorization: `Bearer ${token}`
            }
         });
         const data=await response.data;
         setCards(data);

      } catch (error) {
         console.log("ERROR MARKET PAGE LOADING ", error);
      }
   };
         fetchData();

       }, []);
    

   return (
      <div  className="    w-screen"> 
         <div>
         <Navbarr />
         </div>
       

         <div className= "py-20 " >
         <h1 className="text-center"> Market </h1>
         <div className=" ">
            {Cards.map((card, index) => (
               <Marketcard card={card} key={card._id} />
            ))}
         </div>
      </div>

      </div>
   );
};

export default Market;
