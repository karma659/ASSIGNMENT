import axios from "axios";
import Cookies from "js-cookie";
import React, {useState} from "react";
import MyInventory from "./MyInventory";

const EditPopup = ({productId, onClose}) => {
   console.log("ssss", productId);
   const [currentPrice, setcurrentPrice] = useState();
   const [kmsOnOdometer, setkmsOnOdometer] = useState();
   const [originalPaint, setoriginalPaint] = useState();
   const [majorScratches, setmajorScratches] = useState();
   const [accidentsReported, setaccidentsReported] = useState();
   const [previousBuyers, setpreviousBuyers] = useState();
   const [registrationPlace, setregistrationPlace] = useState();

   const data = {
      currentPrice: currentPrice,
      kmsOnOdometer: kmsOnOdometer,
      accidentsReported: accidentsReported,
      previousBuyers: previousBuyers,
      registrationPlace: registrationPlace,
      majorScratches: majorScratches,
      originalPaint: originalPaint
   };

   const ubmit = async () => {
      console.log("cp", currentPrice);
      console.log("productid", productId);
      try {
         var token = Cookies.get("token");
         console.log("local", token);
         console.log("productid", productId);

         await axios.patch(`/marketPlaceInventory/update/${productId}`, data, {
            headers: {
               Authorization: `Bearer ${token}`
            }
         });

         console.log("Card edited");
         window.location.reload();
      } catch (error) {
         console.error("eeeeee", error);
      }
   };

   return (
    <div className="edit-popup ml-40 mr-40  mt-5  border border-black bg-transparent">
        
     
            <h2 className="text-center">Edit Product</h2>
            {/* Render a form for editing the product */}
        <div  className="flex ">
             <div className="flex flex-col w-1/2 p-4">
               <label className="block mb-4">CurrentPrice :</label>
               <label className="block mb-4">kmsOnOdometer:</label>
             
               <label className="block mb-4">registrationPlace:</label>
                  <label className="block mb-4">accidentsReported:</label>
                  <label className="block mb-4">previousBuyers:</label>
                  <label className="block mb-4">originalPaint</label>
                  <label className="block mb-4">majorScratches</label>
                  <button className=" border-4 border-neutral-400 bg-green-500 w-[50%] m-5" onClick={ubmit}>Save</button>
               </div>
        
        
               <div className="flex flex-col w-1/2 p-4">
                  <input
                       className="border border-neutral-400  mb-4"
                     type="text"
                     placeholder="currentPrice"
                     value={currentPrice}
                     onChange={e => setcurrentPrice(e.target.value)}
                  />
                  <input
                       className="border border-neutral-400  mb-4"
                     type="text"
                     placeholder="kmsOnOdometer"
                     value={kmsOnOdometer}
                     onChange={e => setkmsOnOdometer(e.target.value)}
                  />
                   <input
                       className="border border-neutral-400  mb-4"
                     type="text"
                     placeholder="registrationPlace"
                     value={registrationPlace}
                     onChange={e => setregistrationPlace(e.target.value)}
                  />
                
                  <input
                       className="border border-neutral-400  mb-4"
                     type="text"
                     placeholder="accidentsReported"
                     value={accidentsReported}
                     onChange={e => setaccidentsReported(e.target.value)}
                  />
                  <input
                       className="border border-neutral-400  mb-4"
                     type="text"
                     placeholder="previousBuyers"
                     value={previousBuyers}
                     onChange={e => setpreviousBuyers(e.target.value)}
                  />
                      <input
                       className="border border-neutral-400  mb-4"
                     type="checkbox"
                     checked={originalPaint}
                     onChange={e => setoriginalPaint(e.target.checked)}
                  />
                   <input
                       className="border border-neutral-400  mb-4"
                     type="checkbox"
                     checked={majorScratches}
                     onChange={e => setmajorScratches(e.target.checked)}
                  />
              
                  <button className=" border-2 border-neutral-400 bg-gray-500 w-[50%] m-5" onClick={onClose}>Close</button>
              </div>
      
             
            </div>

  
            
         </div>
  
   );
};

export default EditPopup;
