import React from 'react'
import toast from 'react-hot-toast'
import { useAuth } from '../context/AuthProvider';

function Logout() {
  const [authUser ,setAuthUser] = useAuth()
  const handleLogout =()=>{
    try{
      setAuthUser({
        ...authUser,
        user:null,
      });
      localStorage.removeItem("Users")
      toast.success("Logout Successfully!")
      // document.getElementById("my_modal_3").close();
setTimeout(() => {
window.location.reload();
}, 3000);
    } catch (error){
      toast.error("Error:"+ error);
      setTimeout(()=>{},2000);
    }
  };
  return (
    <div><button className='px-3 py-2 bg-red-600 text-white rounded-md'
    onClick = {handleLogout}>Logout</button></div>
  
  )
}

export default Logout