import React, {useEffect, useState} from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Oemcard from "./Oemcard";
import Navbarr from "./Navbarr";
import {useNavigate} from "react-router-dom";

const OemSpecs = () => {
  const navigate = useNavigate();
   const [cards, setCards] = useState([]);
   const [filteredCards, setFilteredCards] = useState([]);
   const [priceFilter, setPriceFilter] = useState("");
   const [colorFilter, setColorFilter] = useState("");
   const [mileageFilter, setMileageFilter] = useState("");
   const [searchInput, setSearchInput] = useState('');
   const [loading, setLoading] = useState(false);
  
   const fetchData = async () => {
    try {
       var token = Cookies.get("token");
       console.log("local", token);
       const response = await axios.get("http://localhost:5000/oem/", {
          headers: {
             Authorization: `Bearer ${token}`
          }
       });
       console.log("OEM card data", response.data);
       setFilteredCards(response.data);
       setCards(response.data);
      
    } catch (error) {
       console.log("ERROR OEMSPECS ", error);
    }
 };

 const applyFilters = async() => {
  let filtered = [...cards];

  if (priceFilter) {
     filtered = 
     filtered.sort((a, b) => {
      if (priceFilter === 'asc') {
        return a.listPrice - b.listPrice;
      } else {
        return b.listPrice - a.listPrice;
      }
    });
  }

  if (colorFilter) {
     filtered = filtered.filter(
        card =>
        colorFilter === card.availableColors[0] ||colorFilter ===  card.availableColors[1] ||colorFilter ===  card.availableColors[2]
          
     );
  }

  if (mileageFilter) {
     filtered = filtered.filter(card => card.mileage < mileageFilter);
  }

  
  setFilteredCards(filtered);
};

   useEffect(() => {
      // Fetch or set the cards array
    fetchData()
      

   }, []);

   useEffect(() => {
      applyFilters()
   }, [priceFilter, colorFilter, mileageFilter]);

   
  //  useEffect(() => {
  //   // Filter cards as the user types in the search query
  //   const searchTimeout = setTimeout(() => {
  //     setLoading(true); // Start loading state
  //     const searchedCards = cards.filter((card) => {
  //       const { model, year } = card;
  //       const searchQueryLowercase = searchQuery;

  //       return (
          
  //         model.toString().includes(searchQueryLowercase) ||
  //         year.toString().includes(searchQueryLowercase)
  //       );
  //     });


  //    if(searchedCards.length) setFilteredCards(searchedCards);
  //     setLoading(false); // End loading state
  //   }, 1000); // Add a slight delay (e.g., 300ms) to avoid frequent filtering on every keystroke
  //   return () => clearTimeout(searchTimeout);
  // }, [searchQuery,cards]);




   const handleclick = card => {
      navigate("/OemEdit", {state: card});
   };

   
   const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    console.log(searchInput);
    if (searchInput !== '') {
    const filteredData =  cards.filter((item) => {
      return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
  })
  console.log(filteredData);
  setFilteredCards(filteredData);
}
else{
  setFilteredCards(cards);
}
 
   }
  
   return (
      <div className=" w-screen">
         <div>
            <Navbarr />
         </div>

         <div className="py-20 ">
            <h1 className="text-center"> OEM CAR (ADD) </h1>
            <div className="flex m-5 p-5 justify-evenly">

               {/* Price Filter */}
               <select value={priceFilter} onChange={e => setPriceFilter(e.target.value)}>
                  <option value="">Prices</option>
                  <option value="asc">sort low to high</option>
                  <option value="des">sort high to low</option>
           
               </select>
               {/* Color Filter */}
               <select value={colorFilter} onChange={e => setColorFilter(e.target.value)}>
                  <option value="">Colors</option>
                  <option value="Red">Red</option>
                  <option value="Blue">Blue</option>
                  <option value="Green">Green</option>
                  <option value="White">White</option>
                  <option value="Black">Black</option>
               </select>

               {/* Mileage Filter */}
               <select value={mileageFilter} onChange={e => setMileageFilter(e.target.value)}>
                  <option value="">Mileages</option>
                  <option value="10000">Up to 10,000 miles</option>
                  <option value="50000">Up to 50,000 miles</option>
                  <option value="100000">Up to 100,000 miles</option>
               </select>

               {/*sEaRCH FILTER*/}
               <div>
                  <label>Search</label>
                  <br/>
                  <input
                     className="border border-gray-400"
                     type="text"
                     placeholder="Search by  model, or year"
                    
                     onChange={(e) => searchItems(e.target.value)}
                  />
               </div>
            </div>
            {loading ? (
               <div className="text-center font-extrabold">Loading...</div>
            ) : (
               <div className=" ml-20 mr-20 flex flex-wrap ">
                  {filteredCards.map((card, index) => (
                     <button className="w-30 h-30 m-5 " key={card._id} onClick={() => handleclick(card)}>
                        <Oemcard card={card} key={card._id} />
                     </button>
                  ))}
               </div>
            )}
         </div>
      </div>
   );
};

export default OemSpecs;
