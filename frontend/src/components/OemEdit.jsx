import axios from "axios";
import Cookies from "js-cookie";
import React, {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

const OemEdit = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const {_id, model, year, listPrice, availableColors, mileage, power, maxSpeed} = location.state;

   // const [items, setItems] = useState([""]);
   const [image, setimage] = useState(null);
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
   const [dataa, setdataa] = useState("");

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

      try {
         if (
            image &&
            title.length &&
            currentPrice.length &&
            description.length &&
            kmsOnOdometer.length &&
            accidentsReported.length &&
            previousBuyers.length &&
            registrationPlace.length
         ) {
            const data = new FormData();
            data.append("oemSpecs", _id);
            data.append("image", image);
            data.append("title", title);
            data.append("currentPrice", currentPrice);
            data.append("description", description);
            data.append("kmsOnOdometer", kmsOnOdometer);
            data.append("accidentsReported", accidentsReported);
            data.append("previousBuyers", previousBuyers);
            data.append("registrationPlace", registrationPlace);
            data.append("majorScratches", majorScratches);
            data.append("originalPaint", originalPaint);

            console.log("data ", data.get("oemSpecs"));

            var token = Cookies.get("token");
            console.log("token ", token);
            // const response = await axios.post(`/marketPlaceInventory/create`, data, {
            //    headers: {
            //       Authorization: `Bearer ${token}`
            //    }
            // });

            axios({
               method: "post",
               url: `/marketPlaceInventory/create`,
               data: data,
               headers: {
                  "Content-Type": "multipart/form-data",
                  Authorization: `Bearer ${token}`
               }
            })
               .then(function (response) {
                  //handle success
                  console.log(response);
               })
               .catch(function (response) {
                  //handle error
                  console.log(response);
               });

            navigate("/MyInventory");
         } else {
            console.log("fill all fields");
            setdataa("Fill all fieldds ");
         }
      } catch (error) {
         console.log("Oem EDIT error ", error);
      }
   };

   return (
      <div className="ml-20 mr-20 mb-10 mt-10 bg-gray-100 rounded-lg shadow ">
         <h1 className="text-center text-2xl text-">Add Car Details</h1>
         <form
            className=" flex  justify-evenly"
            onSubmit={handleSubmit}
            encType="multipart/form-data">
            <div className="flex-col m-5 w-[50%] ">
               <div className="flex-col  gap-5 mb-2">
                  <div className="flex  ">
                     <h2 className="text-gray-600 mr-20 pl-10">Description:</h2>
                     <div className="flex-col">
                        <input
                           className=" border-2 border-neutral-400 ml-6"
                           type="text"
                           name="description"
                           value={description}
                           onChange={handleDescriptionChange}
                        />

                        {additionalInputs.map((input, index) => (
                           <div key={index}>
                              <input
                                 className="
                              border-2 border-neutral-400 ml-6"
                                 type="text"
                                 value={input}
                                 onChange={event => handleAdditionalInputChange(event, index)}
                              />
                              <button onClick={() => handleRemoveInput(index)}>❌</button>
                           </div>
                        ))}
                     </div>
                     <button className="flex justify-start h-5" onClick={handleAddInput}>
                        ▼
                     </button>
                  </div>
               </div>

               <div className="flex">
                  <div className="flex flex-col w-1/3 pr-4">
                     <label className="block mb-2 text-gray-600 pl-10">image </label>
                     <label className="block mb-2 text-gray-600 pl-10">title </label>
                     <label className="block mb-2 text-gray-600 pl-10">currentPrice </label>
                     <label className="block mb-2 text-gray-600 pl-10">kmsOnOdometer </label>
                     <label className="block mb-2 text-gray-600 pl-10">accidentsReported </label>
                     <label className="block mb-2 text-gray-600 pl-10">previousBuyers </label>
                     <label className="block mb-2 text-gray-600 pl-10">registrationPlace </label>
                     <label className="block mb-2 text-gray-600 pl-10">originalPaint </label>
                     <label className="block mb-2 text-gray-600 pl-10">majorScratches </label>
                  </div>
                  <div className="flex flex-col w-1/2 pl-4">
                     <input
                        className="border border-neutral-400  mb-2"
                        type="file"
                        name="image"
                        // value={image}
                        onChange={e => setimage(e.target.files[0])}
                     />
                     <input
                        className=" border border-neutral-400  mb-2"
                        type="text"
                        placeholder="title"
                        value={title}
                        name="title"
                        onChange={e => settitle(e.target.value)}
                     />

                     <input
                        className="border  border-neutral-400 mb-2"
                        type="text"
                        placeholder="currentPrice"
                        name="currentPrice"
                        value={currentPrice}
                        onChange={e => setcurrentPrice(e.target.value)}
                     />

                     <input
                        className="border border-neutral-400  mb-2"
                        type="text"
                        placeholder="kmsOnOdometer"
                        name="kmsOnOdometer"
                        value={kmsOnOdometer}
                        onChange={e => setkmsOnOdometer(e.target.value)}
                     />

                     <input
                        className=" border border-neutral-400 mb-2"
                        type="text"
                        placeholder="accidentsReported"
                        name="accidentsReported"
                        value={accidentsReported}
                        onChange={e => setaccidentsReported(e.target.value)}
                     />

                     <input
                        className=" border border-neutral-400  mb-2"
                        type="text"
                        placeholder="previousBuyers"
                        name="previousBuyers"
                        value={previousBuyers}
                        onChange={e => setpreviousBuyers(e.target.value)}
                     />

                     <input
                        className="border border-neutral-400 mb-2"
                        type="text"
                        placeholder="registrationPlace"
                        name="registrationPlace"
                        value={registrationPlace}
                        onChange={e => setregistrationPlace(e.target.value)}
                     />

                     <input
                        className=" border border-neutral-400  mb-4  "
                        type="checkbox"
                        name="originalPaint"
                        checked={originalPaint}
                        onChange={e => setoriginalPaint(e.target.checked)}
                     />

                     <input
                        className="border  border-neutral-400 mb-4  justify-items-start text-left  items-start "
                        type="checkbox"
                        name="majorScratches"
                        checked={majorScratches}
                        onChange={e => setmajorScratches(e.target.checked)}
                     />
                  </div>
               </div>
            </div>

            <div className="flex-col w-[50%] ">
               <div className="flex m-5 ">
                  <div className="flex flex-col w-1/4 pr-4 text-gray-600 pt-1">
                     <label className=" border-neutral-400  mb-4 ">model</label>
                     <label className=" border-neutral-400 mb-4 ">year</label>

                     <label className=" border-neutral-400 mb-4">listPrice</label>
                     <label className=" border-neutral-400 mb-4">availableColors</label>
                     <label className=" border-neutral-400 mb-4">mileage</label>
                     <label className=" border-neutral-400 mt-1 mb-4">power</label>
                     <label className=" border-neutral-400 mt-1 mb-4">maxSpeed</label>
                  </div>

                  <div className="flex-col w-1/2 pr-4 text-gray-600">
                     <input
                        className=" border border-black shadow bg-gray-200  mb-4  "
                        type="text"
                        value={model}
                        name="model"
                        readOnly
                     />

                     <input
                        className=" border border-black shadow bg-gray-200   mb-4  "
                        type="text"
                        value={year}
                        name="year"
                        readOnly
                     />

                     <input
                        className=" border border-black shadow  bg-gray-200  mb-4  "
                        type="text"
                        value={listPrice}
                        name="listPrice"
                        readOnly
                     />

                     <input
                        className="border border-black shadow  mb-4  bg-gray-200 "
                        type="text"
                        value={availableColors}
                        name="availableColors"
                        readOnly
                     />

                     <input
                        className=" border border-black shadow  mb-4 bg-gray-200  "
                        type="text"
                        value={mileage}
                        name="mileage"
                        readOnly
                     />

                     <input
                        className=" border border-black shadow  mb-4 bg-gray-200  "
                        type="text"
                        value={power}
                        name="power"
                        readOnly
                     />

                     <input
                        className=" border border-black shadow  mb-4 bg-gray-200  "
                        type="text"
                        value={maxSpeed}
                        name="maxSpeed"
                        readOnly
                     />
                  </div>
               </div>
               <div>
                  <button
                     className=" border-2 border-neutral-400 bg-green-500 shadow hover:bg-green-800 w-[50%] m-5"
                     type="submit">
                     Submit
                  </button>
               </div>
            </div>
         </form>

         <h1 className="text-center text-red-700 text-xl">{dataa}</h1>
      </div>
   );
};

export default OemEdit;
