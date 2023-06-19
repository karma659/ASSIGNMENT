import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OemEdit = () => {
   const location = useLocation();
   const navigate = useNavigate();
   const { _id, model, year, listPrice, availableColors, mileage, power, maxSpeed } = location.state;

   // const [items, setItems] = useState([""]);
   const [image, setimage] = useState("");
   const [title, settitle] = useState("");
   const [currentPrice, setcurrentPrice] = useState("");
   const [kmsOnOdometer, setkmsOnOdometer] = useState("");
   const [accidentsReported, setaccidentsReported] = useState("");
   const [previousBuyers, setpreviousBuyers] = useState("");
   const [registrationPlace, setregistrationPlace] = useState("");
   const [majorScratches, setmajorScratches] = useState(false);
   const [originalPaint, setoriginalPaint] = useState(false);


   const [description, setDescription] = useState("");
   const [additionalInputs, setAdditionalInputs] = useState([]);
   const [dataa,setdata]= useState("");
   const handleDescriptionChange = event => {
      setDescription(event.target.value);
   };

   const handleAddInput = () => {
      setAdditionalInputs([...additionalInputs, ""]);
   };

   const handleAdditionalInputChange = (event, index) => {
      const updatedInputs = [...additionalInputs];
      updatedInputs[index] = event.target.value;
      setAdditionalInputs(updatedInputs);
   };

   const handleRemoveInput = index => {
      const updatedInputs = [...additionalInputs];
      updatedInputs.splice(index, 1);
      setAdditionalInputs(updatedInputs);
   };

   const handleSubmit = async e => {
      e.preventDefault();


    
    if(  
       image.length   &&
       title.length   &&
       currentPrice.length   &&
       description.length   &&
       kmsOnOdometer.length   &&
       accidentsReported.length   &&
       previousBuyers.length  &&
       registrationPlace.length   
        )
 {
 
   const data = {
      oemSpecs: _id,
      image: image,
      title: title,
      currentPrice: currentPrice,
      description: description,
      kmsOnOdometer: kmsOnOdometer,
      accidentsReported: accidentsReported,
      previousBuyers: previousBuyers,
      registrationPlace: registrationPlace,
      majorScratches: majorScratches,
      originalPaint: originalPaint
   };
      try {
         var token = Cookies.get("token");
         console.log("local", token);

         const response = await axios.post(
            "http://localhost:5000/marketPlaceInventory/create",
            data,
            {
               headers: {
                  Authorization: `Bearer ${token}`
               }
            }
         );

         console.log("data", response.data);
         navigate("/MyInventory");
      } catch (error) {
         console.error("Oem EDIT error ", error);
      }

   }else{
   console.log("fill all fields");
   setdata("Fill all fieldds ");
}

   };

   return (
      <div className="ml-20 mr-20 mb-10 mt-10">
         <h1 className="text-center">OemEdit</h1>
         <form className=" flex  justify-evenly" onSubmit={handleSubmit}>
            <div className="flex-col m-5 w-[50%] ">
            
               <div className="flex-col  gap-5">
                  <div className="flex  gap-5">
                     <h2>Description:</h2>
                     <button onClick={handleAddInput}>Add Input</button>
                  </div>
                  <div className="flex-col">
                     <input
                        className=" border-2 border-neutral-400"
                        type="text"
                        value={description}
                        onChange={handleDescriptionChange}
                     />

                     {additionalInputs.map((input, index) => (
                        <div key={index}>
                           <input
                              className="
            border-2 border-black"
                              type="text"
                              value={input}
                              onChange={event => handleAdditionalInputChange(event, index)}
                           />
                           <button onClick={() => handleRemoveInput(index)}>Remove</button>
                        </div>
                     ))}
                  </div>
               </div>
     
               <div class="li" className="flex">
                  <div className="flex flex-col w-1/2 pr-4">
                     <label className="block mb-2" >image</label>
                     <label className="block mb-2">title </label>
                     <label className="block mb-2" >currentPrice</label>
                     <label className="block mb-2" >kmsOnOdometer</label>
                     <label className="block mb-2" >accidentsReported</label>
                     <label className="block mb-2" >previousBuyers</label>
                     <label className="block mb-2" >registrationPlace</label>
                     <label className="block mb-2" >originalPaint</label>
                     <label className="block mb-2" >majorScratches</label>
                  </div>
                  <div className="flex flex-col w-1/2 pl-4">
                     <input
                        className="border border-neutral-400  mb-2"
                        type="text"
                        placeholder="image"
                        value={image}
                        onChange={e => setimage(e.target.value)}
                     />
                     <input
                        className=" border border-neutral-400  mb-2"
                        type="text"
                        placeholder="title"
                        value={title}
                        onChange={e => settitle(e.target.value)}
                     />

                     <input
                        className="border  border-neutral-400 mb-2"
                        type="text"
                        placeholder="currentPrice"
                        value={currentPrice}
                        onChange={e => setcurrentPrice(e.target.value)}
                     />

                     <input
                        className="border border-neutral-400  mb-2"
                        type="text"
                        placeholder="kmsOnOdometer"
                        value={kmsOnOdometer}
                        onChange={e => setkmsOnOdometer(e.target.value)}
                     />

                     <input
                        className=" border border-neutral-400 mb-2"
                        type="text"
                        placeholder="accidentsReported"
                        value={accidentsReported}
                        onChange={e => setaccidentsReported(e.target.value)}
                     />

                     <input
                        className=" border border-neutral-400  mb-2"
                        type="text"
                        placeholder="previousBuyers"
                        value={previousBuyers}
                        onChange={e => setpreviousBuyers(e.target.value)}
                     />

                     <input
                        className="border border-neutral-400 mb-2"
                        type="text"
                        placeholder="registrationPlace"
                        value={registrationPlace}
                        onChange={e => setregistrationPlace(e.target.value)}
                     />

                     <input
                        className=" border border-neutral-400  mb-4  "
                        type="checkbox"
                        checked={originalPaint}
                        onChange={e => setoriginalPaint(e.target.checked)}
                     />

                     <input
                        className="border border-neutral-400 mb-4  justify-items-start text-left  items-start "
                        type="checkbox"
                        checked={majorScratches}
                        onChange={e => setmajorScratches(e.target.checked)}
                     />
                  </div>
               </div>
            </div>


            <div className="flex-col w-[50%] ">  
           
            <div className="flex m-5 ">
            
                  <div className="flex flex-col w-1/2 pr-4">
                     <label className=" border-neutral-400 mb-4">
                        model
                     </label>
                     <label className=" border-neutral-400 mb-4">
                        year
                     </label>

                     <label className=" border-neutral-400 mb-4">
                        listPrice
                     </label>
                     <label className=" border-neutral-400 mb-4">
                        availableColors
                     </label>
                     <label className=" border-neutral-400 mb-4">
                        mileage
                     </label>
                     <label>
                        power
                     </label>
                     <label className=" border-neutral-400 mb-4">
                        maxSpeed
                     </label>
                  </div>

                  <div className="flex-col w-1/2 pr-4">
                     <input
                       className=" border border-neutral-400  mb-4  "
                        type="text"
                        value={model}
                        readOnly
                     />



                     <input
                          className=" border border-neutral-400  mb-4  "
                        type="text"
                        value={year}
                        readOnly
                     />




                     <input
                             className=" border border-neutral-400  mb-4  "
                        type="text"
                        value={listPrice}
                        readOnly
                     />



                     <input
                          className="border border-neutral-400   mb-4  "
                        type="text"
                        value={availableColors}
                        readOnly
                     />


                     <input type="text" value={mileage} readOnly />


                     <input
                          className=" border border-neutral-400 mb-4  "
                        type="text"
                        value={power}
                        readOnly
                     />


                     <input
                         className=" border border-neutral-400 mb-4  "
                        type="text"
                        value={maxSpeed}
                        readOnly
                     />

                  </div>
            </div>
            <div>
                  <button className=" border-2 border-neutral-400 bg-green-500 w-[50%] m-5" type="submit">
                  Submit
               </button>
               </div>
               </div>

             
         </form>
         <h1>{dataa}</h1>
      </div>
   );
};

export default OemEdit;
