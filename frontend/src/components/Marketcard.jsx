import React from "react";

const Marketcard = ({card}) => {


   const Circle = ({color}) => {

      const circleStyle = {
         width: "10px",
         height: "10px",
         borderRadius: "50%",
         backgroundColor: color,
         margin: "7px 5px 7px 5px"
      };

      return <div style={circleStyle}></div>;
   };

   return (
      <div className="ml-20 mr-20 mb-10 mt-10">
         <div className="container p-2 flex flex-col-reverse md:flex-row items-center justify-center bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="w-[40%] mx-20 h-70 border border-black ">
               <img className="w-30 h-40 "  alt="" />
            </div>

            <div className="  w-[50%] flex  justify-evenly ">
               <div>
                  <h6 className=" text-black text-xl">
                     <span className=" text-base text-gray-500">Model :</span> {card.oemSpecs.model}
                  </h6>
                  <h6 className=" text-black text-xl">
                     <span className=" text-base text-gray-500">Year :</span> {card.oemSpecs.year}
                  </h6>
                  <h6 className=" text-black text-xl">
                     <span className=" text-base text-gray-500">Listprice :</span>{" "}
                     {card.oemSpecs.listPrice}
                  </h6>
                  <h6 className=" text-black text-xl  flex">
                     <span className=" text-base text-gray-500">Available colors :</span>
                     <div className="flex  ">
                        <Circle color="red" />
                        <Circle color="green" />
                        <Circle color="blue" />
                     </div>
                  </h6>
                  <h6 className=" text-black text-xl">
                     <span className=" text-base text-gray-500">Mileage :</span>{" "}
                     {card.oemSpecs.mileage}
                  </h6>
                  <h6 className=" text-black text-xl">
                     <span className=" text-base text-gray-500">Power :</span> {card.oemSpecs.power}
                  </h6>
                  <h6 className=" text-black text-xl">
                     <span className=" text-base text-gray-500">Max speed :</span>{" "}
                     {card.oemSpecs.maxSpeed}
                  </h6>
               </div>

               <div>
                  <h6 className=" text-red-600 text-xl">
                     <span className=" text-base text-green-500">Title :</span> {card.title}
                  </h6>
                  <h6 className=" text-red-600 text-xl">
                     <span className=" text-base text-green-500">Current price :</span>{" "}
                     {card.currentPrice}
                  </h6>
                  <h6 className=" text-red-600 text-xl">
                     <span className=" text-base text-green-500">Km's on odometer :</span>{" "}
                     {card.kmsOnOdometer}{" "}
                  </h6>
                  <h6 className=" text-red-600 text-xl">
                     <span className=" text-base text-green-500">Major scratches :</span>{" "}
                     {card.majorScratches}{" "}
                  </h6>
                  <h6 className=" text-red-600 text-xl">
                     <span className=" text-base text-green-500">Accidents reported :</span>{" "}
                     {card.accidentsReported}{" "}
                  </h6>
                  <h6 className=" text-red-600 text-xl">
                     <span className=" text-base text-green-500">Previous buyers :</span>{" "}
                     {card.previousBuyers}{" "}
                  </h6>
                  <h6 className=" text-red-600 text-xl">
                     <span className=" text-base text-green-500">Registration place:</span>{" "}
                     {card.registrationPlace}{" "}
                  </h6>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Marketcard;
