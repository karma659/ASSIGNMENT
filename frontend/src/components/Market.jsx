import React, {useEffect, useState} from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Marketcard from "./Marketcard";
import Navbarr from "./Navbarr";

const Market = () => {
   const [cards, setcards] = useState([]);
   const [loading, setLoading] = useState(true);

   const fetchData = async () => {
      var token = Cookies.get("token");
      console.log("token", token);
      try {
         const response = await axios.get(`/marketPlaceInventory/`, {
            headers: {
               Authorization: `Bearer ${token}`
            }
         });

         const data = await response.data;

         setcards(data);
         setLoading(false);
         console.log("mcards", cards, loading);
      } catch (error) {
         console.log("ERROR MARKET PAGE LOADING ", error);
         //    window.location.href = "/Login";
      }
   };

   useEffect(() => {
      fetchData();
   }, []);

   return (
      <div className="w-screen bg-gray-50">
         <div>
            <Navbarr />
         </div>

         <div className="py-20 ">
            <h1 className="text-center text-3xl text-gray-500"> Market Place </h1>
            <div className=" ">
               {loading ? (
                  <div>
                     <h1>LOADING......</h1>
                  </div>
               ) : (
                  <div>
                     {cards.map((card, index) => (
                        <Marketcard card={card} key={index} />
                     ))}
                  </div>
               )}
            </div>
         </div>
      </div>
   );
};

export default Market;
