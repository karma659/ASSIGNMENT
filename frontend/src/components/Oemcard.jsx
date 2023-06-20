import React from "react";

const Oemcard = ({card}) => {
   return (
      <div className="  p-2 w-30 h-30  text-left rounded-lg shadow bg-gray-100 hover:bg-gray-300">
         <h2 className="font-extrabold text-xl text-center bg-red-500 rounded-md shadow text-white ">
            {card.model}
         </h2>
         <h6 className=" text-gray-600 text-xl">
                     <span className=" text-base text-green-700">Year :</span> {card.year}
                  </h6>
                  <h6 className=" text-gray-600 text-xl">
                     <span className=" text-base text-green-700">List price :</span> {card.listPrice}
                  </h6>
                  <h6 className=" text-gray-600 text-xl">
                     <span className=" text-base text-green-700">Available colors :</span> {card.availableColors}
                  </h6>
                  <h6 className=" text-gray-600 text-xl">
                     <span className=" text-base text-green-700">Mileage :</span> {card.mileage}
                  </h6>
                  <h6 className=" text-gray-600 text-xl">
                     <span className=" text-base text-green-700">Power :</span> {card.power}
                  </h6>
                  <h6 className=" text-gray-600 text-xl">
                     <span className=" text-base text-green-700">Max speed :</span> {card.maxSpeed}
                  </h6>
      </div>
   );
};

export default Oemcard;
