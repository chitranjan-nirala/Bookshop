import React from 'react'
import { Link, useLocation, useNavigate} from 'react-router-dom'
import Login from './Login'
import { useForm } from 'react-hook-form';
import axios from "axios"
import toast from 'react-hot-toast';
function Signup() {
const location = useLocation();
const navigate =useNavigate();
const from  =location.state?.from?.pathname || "/";
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit =async (data) => {
        
        // Handle form submission logic
        const userInfo ={
          fullname:data.fullname,
          email:data.email,
          password:data.password,
        }
      await  axios.post ("http://localhost:3002/user/signup",userInfo)
        .then((res)=>{
console.log(res.data)
if(res.data){
  toast.success('Signup Successfully!');
 navigate(from, {replace:true});
}
localStorage.setItem("Users",JSON.stringify(res.data.user))
        }).catch((err)=>
        {
          console.log(err)
          toast.error("Error:"+err.response.data.message);
        })
      };
  return (
    <>
    <div className='flex h-screen items-center justify-center '>
          <div className=" w-[600px]">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
   
    <h3 className="font-bold text-lg">Signup</h3>
    {/* name */}
    <div className=' mt-4 space-y-2'>
        <span>Name</span><br></br>
        <input type='fullname' placeholder='Enter your Name' className='  border rounded-md w-80 outline-none px-2 py-1'
        {...register("fullname", { required: true })}></input>
         {errors.fullname && <span className="text-red-600">This field is required</span>}
    </div>
    {/* email */}
    <div className=' mt-4 space-y-2'>
        <span>Email</span><br></br>
        <input type='email' placeholder='Enter your email' className='  border rounded-md w-80 outline-none px-2 py-1'{...register("email", { required: true })}></input>
        {errors.email && <span className="text-red-600">This field is required</span>}
    </div>
    {/* passward */}
    <div className=' mt-4 space-y-2'>
        <span>Password</span><br></br>
        <input type='Password' placeholder='Enter your Password' className='  border rounded-md w-80 outline-none px-2 py-1'
        {...register("password", { required: true })}></input>
     {errors.password && <span className="text-red-600">This field is required</span>}
    </div>
    {/* button */}
    <div className=' flex justify-around mt-4'>
        <button className=' bg-pink-600 text-white rounded-md px-3 py-1 hover:bg-pink-400 duration-200 '>Signup</button>
        <p className='text-xl'>Have Account?{" "}
        <button className=' underline text-blue-500 cursor-pointer'
        onClick={()=>
            document.getElementById("my_modal_3").showModal()
        } >
            Login
            </button>{" "}
       <Login/></p>
    </div>
    </form>
  </div>
</div>
    </div>
    </>
  )
}

export default Signup