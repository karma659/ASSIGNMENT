import React, {useEffect, useState} from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Marketcard from "./Marketcard";
import Navbarr from "./Navbarr";

const Market = () => {
   const [Cards, setCards] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      var token = Cookies.get("token");
      console.log("token", token);

      if (!token) {
         window.location.href = "/Login";
      }

      const fetchData = async () => {
         try {
            const response = await axios.get(`/marketPlaceInventory`, {
               headers: {
                  Authorization: `Bearer ${token}`
               }
            });
            const data = await response.data;
            setCards(data);
         } catch (error) {
            console.log("ERROR MARKET PAGE LOADING ", error);
            window.location.href = "/Login";
         }
      };
      fetchData();
   }, []);

   return (
      <div className="    w-screen bg-gray-50">
         <div>
            <Navbarr />
         </div>

         <div className="py-20 ">
            <h1 className="text-center text-3xl text-gray-500"> Market Place </h1>
            <div className=" ">
               {Cards.map(card => (
                  <Marketcard card={card} key={card._id} />
               ))}
            </div>
         </div>
      </div>
   );
};

export default Market;
