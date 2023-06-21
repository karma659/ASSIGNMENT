import React, {useEffect, useState} from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Inventorycard from "./Inventorycard";
import EditPopup from "./EditPopup";
import Navbarr from "./Navbarr";

const MyInventory = () => {
   const [cards, setCards] = useState([]);

   useEffect(() => {
      fetchData();
   }, []);

   const fetchData = async () => {
      try {
         var token = Cookies.get("token");
         // console.log("local", token);
         const response = await axios.get(`/marketPlaceInventory/dealer`, {
            headers: {
               Authorization: `Bearer ${token}`
            }
         });

         console.log("card data", response.data);

         setCards(response.data);
      } catch (error) {
         console.error("ERROR MyINventory", error);
      }
   };

   const [selectedProductId, setSelectedProductId] = useState(null);

   const handleEdit = Id => {
      console.log("handleeddit", Id);
      setSelectedProductId(Id);
   };

   const handleEditPopupClose = () => {
      setSelectedProductId(null);
   };
   const handleDelete = id => {
      try {
         setCards(prevCards => prevCards.filter(card => card._id !== id));
      } catch (error) {
         console.error("Error deleting card:", error);
      }
   };

   return (
      <div className=" w-screen">
         <div>
            <Navbarr />
         </div>

         <div className="py-20 ">
            <h1 className="text-center text-gray-600 text-3xl"> My Inventory </h1>
            {/* <div>
        {selectedProductId && (
          <EditPopup productId={selectedProductId} onClose={handleEditPopupClose} />
        )}
     */}
            {selectedProductId ? (
               <div className="w-50px h-50px bg-transparent">
                  <EditPopup productId={selectedProductId} onClose={handleEditPopupClose} />
               </div>
            ) : (
               <div className="card-grid ">
                  {cards.map(card => (
                     <Inventorycard
                        card={card}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        key={card._id}
                     />
                  ))}
               </div>
            )}
         </div>
      </div>
   );
};

export default MyInventory;
