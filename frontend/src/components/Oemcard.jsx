import React from "react";

const Oemcard = ({card}) => {
   return (
      <div className="  p-3 w-30 h-30 border-4 border-gray-600 rounded-md  bg-gray-300 text-left  ">
         <h2 className="font-extrabold text-xl "> <span>{card.model}</span> </h2>
         <h5>year {card.year}</h5>
         <h5>listPrice {card.listPrice}</h5>
         <h5>availableColors {card.availableColors}</h5>
         <h5>mileage {card.mileage}</h5>
         <h5>power {card.power}</h5>
         <h5>maxSpeed {card.maxSpeed}</h5>
      </div>
   );
};

export default Oemcard;
