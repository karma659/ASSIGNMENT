import React, {useEffect, useState} from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Marketcard from "./Marketcard";
import Navbarr from "./Navbarr";

const Market = () => {
   const [Cards, setCards] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      fetchData();
   }, [loading]);

   const fetchData = async () => {
      var token = Cookies.get("token");
      // console.log("token", token);
      if (!token) {
         window.location.href = "/Login";
      }

      try {
         const response = await axios.get(`/marketPlaceInventory`, {
            headers: {
               Authorization: `Bearer ${token}`
            }
         });
         const data = await response.data;
         setCards(data);
         setLoading(false);
         console.log("loading Cards ", loading, Cards);
      } catch (error) {
         console.log("ERROR MARKET PAGE LOADING ", error);
         window.location.href = "/Login";
      }
   };

   return (
      <div className="    w-screen bg-gray-50">
         <div>
            <Navbarr />
         </div>

         <div className="py-20 ">
            <h1 className="text-center text-3xl text-gray-500"> Market Place </h1>

            {loading ? (
               <div>
                  <h2>Loading...</h2>
               </div>
            ) : (
               <div>
                  {Cards.map((card, index) => (
                     <Marketcard card={card} key={index} />
                  ))}
               </div>
            )}
         </div>
      </div>
   );
};

export default Market;
