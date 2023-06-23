import React, {useEffect, useState} from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Marketcard from "./Marketcard";
import Navbarr from "./Navbarr";

const Market = () => {
   const [cards, setcards] = useState([]);
   const [loading, setLoading] = useState(true);

   const fetchData = async () => {
      try {
         var token = Cookies.get("token");
         // console.log("token", token);
         const response = await axios.get("/marketPlaceInventory", {
            headers: {
              "Content-Type": "application/json",
               Authorization: `Bearer ${token}`
            }
         });

         console.log("Marketcard data ", response, response.status, response.data);

         if (Array.isArray(response.data)) {
            setcards(response.data);
         }
         setLoading(false);
         // console.log("mcards ", cards, loading);
      } catch (error) {
         console.log("ERROR MARKET PAGE LOADING ", error);
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
                     {cards?.map(card => (
                        <div key={card._id}>
                           <Marketcard card={card} key={card._id} />
                        </div>
                     ))}
                  </div>
               )}
            </div>
         </div>
      </div>
   );
};

export default Market;
