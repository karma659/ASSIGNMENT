import React from "react";

const Marketcard = ({card}) => {
   return (
      <div className="ml-20 mr-20 mb-10 mt-10">
         <div className="container flex flex-col-reverse md:flex-row items-center justify-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="bg-red-500 w-[40%] mx-20 h-70px border border-blacck-500 ">
               <img className=" " src="./logo512.png" alt="" />
            </div>

          <div className="  w-[50%] flex  justify-evenly ">
               <div>
                  <h6>model {card.oemSpecs.model}</h6>
                  <h6>year {card.oemSpecs.year}</h6>
                  <h6>listPrice {card.oemSpecs.listPrice}</h6>
                  <h6>availab  leColors {card.oemSpecs.availableColors}</h6>
                  <h6>mileage {card.oemSpecs.mileage}</h6>
                  <h6>power {card.oemSpecs.power}</h6>
                  <h6>maxSpeed {card.oemSpecs.maxSpeed}</h6>
               </div>

               <div>
                  <h5>{card.title}</h5>
                  <h5>currentPrice {card.currentPrice}</h5>
                  <h5>kmsOnOdometer {card.kmsOnOdometer}</h5>
                  <h5>majorScratches {card.majorScratches}</h5>
                  <h5>accidentsReported {card.accidentsReported}</h5>
                  <h5>previousBuyers {card.previousBuyers}</h5>
                  <h5>registrationPlace {card.registrationPlace}</h5>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Marketcard;
