import React from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Inventorycard = ({card, onEdit, onDelete}) => {
   const cardedit = async id => {
      onEdit(id);
   };

   const carddelete = async id => {
      try {
         var token = Cookies.get("token");
         console.log("local", token);

         await axios.delete(`/marketPlaceInventory/delete/${id}`, {
            headers: {
               Authorization: `Bearer ${token}`
            }
         });

         console.log("Card delete");
         onDelete(id);
      } catch (error) {
         console.log("eeeeee", error);
      }
   };

   return (
      <div className=" ml-40 mr-40 shadow flex mb-10 mt-10 border border-black rounded-md">
         <div className=" mx-10 my-5 w-[40%]  ">
            <div className="  w-50  rounded  overflow-hidden ">
               <img src={`/${card.image}`} />
            </div>
         </div>

         <div className="  w-[50%] flex  justify-evenly ">
            <div className=" flex  justify-evenly ">
               <div>
                  <h6>model {card.oemSpecs.model}</h6>
                  <h6>year {card.oemSpecs.year}</h6>
                  <h6>listPrice {card.oemSpecs.listPrice}</h6>
                  <h6>availableColors {card.oemSpecs.availableColors}</h6>
                  <h6>mileage {card.oemSpecs.mileage}</h6>
                  <h6>power {card.oemSpecs.power}</h6>
                  <h6>maxSpeed {card.oemSpecs.maxSpeed}</h6>

                  <button
                     className="border-2 border-black pl-5 pr-5 bg-green-500 rounded-md text-white "
                     onClick={() => cardedit(card._id)}>
                     Edit
                  </button>
               </div>

               <div>
                  <h5>title {card.title}</h5>
                  <h5>currentPrice {card.currentPrice}</h5>
                  <h5>kmsOnOdometer {card.kmsOnOdometer}</h5>
                  <h5>majorScratches {card.majorScratches}</h5>
                  <h5>accidentsReported {card.accidentsReported}</h5>
                  <h5>previousBuyers {card.previousBuyers}</h5>
                  <h5>registrationPlace {card.registrationPlace}</h5>
                  <button
                     className="border-2 border-black pl-5 pr-5 bg-red-500 rounded-md text-white "
                     onClick={() => carddelete(card._id)}>
                     Delete
                  </button>
               </div>
            </div>

            <div className="buttons p-2"></div>
         </div>
      </div>
   );
};

export default Inventorycard;
