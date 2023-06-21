import React, {useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

const Signup = () => {
   const navigate = useNavigate();
   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [dataa,setdata]= useState("");
   const handleSignup = async e => {
      e.preventDefault();

      try {
         const response = await axios.post(`/dealer/signup`, {
            name: username,
            email: email,
            password: password
         });

         console.log("ssss",response.status);
         if(response.status === 200){
            console.log("data",response.data);
           setdata(response.data.msg);
         }else{
       navigate("/Login")
      }
      } catch (error) {
         console.error("ERROR signup ", error);
      
      }
   };

   return (
      <div className="flex items-center justify-center h-screen w-screen bg-white m-30  ">
     
   
         <div >
            <form className=" flex-col " onSubmit={handleSignup} >
               <label className=" flex-col ">
                 <h6> Name</h6>
                  <input 
                   className=" border-2 border-neutral-400"
                     type="text"
                     placeholder="name"
                     value={username}
                     onChange={e => setUsername(e.target.value)}
                  />
               </label>
               <br />
               <label className="flex-col">
               <h6>Email</h6>   
                  <input
                   className=" border-2 border-neutral-400"
                     type="text"
                     placeholder="email"
                     value={email}
                     onChange={e => setEmail(e.target.value)}
                  />
               </label>
               <br />
               <label className="flex-col">
                <h6> Password  </h6> 
                  <input
                   className=" border-2 border-neutral-400"
                     type="password"
                     placeholder="Password"
                     value={password}
                     onChange={e => setPassword(e.target.value)}
                  />
               </label>
               <br />
               <button className="bg-red-700 rounded-md text-white p-2 " type="submit">
                  Sign Up
               </button>
              
               <div className="py-3 ">
                  <p>
                     Have an Account? <Link to={"/Login"}><button className="bg-green-700 rounded-md  text-white p-2 ">Login</button></Link>
                  </p>
               </div>
            </form>
           <h1>{dataa}</h1>  
         </div>
      </div>
   );
};

export default Signup;
