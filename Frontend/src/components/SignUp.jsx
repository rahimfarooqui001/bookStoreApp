import React from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'




const SignUp = () => {
  const location=useLocation()
  const navigate=useNavigate()
  const from=location.state?.from?.pathname || "/"
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit =async (data) => {
        const userInfo={
          fullname: data.fullname,
          email: data.email,
          password: data.password
        }
       await axios.post("http://localhost:5020/user/signup",userInfo)
        .then((res)=>{
          console.log(res.data)
          if(res.data){
            toast.success("Signup Successfully");
            setTimeout(() =>{
              navigate(from , {replace:true})
            },2000)
          }
          localStorage.setItem("Users",JSON.stringify(res.data.user))
        }).catch((error) => {
          if(error.response){
            console.log(error)
            toast.error(`error ${error.response.data.message}`)
        }
        })
      }
  return (
        <div className='flex h-screen items-center justify-center '>
        <div className="w-[600px]">
  <div className="modal-box">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    <h3 className="font-bold text-lg">SignUp</h3>
    <div className='mt-4 space-y-2'>
        <span>Name</span><br />
        <input {...register("fullname", { required: true })} type="text" placeholder='Enter your Full Name'className='w-80 px-3 border rounded-md outline-none'/><br />
        {errors.fullname && <span className='text-sm text-red-500'>Email is required</span>}
    </div>
    <div className='mt-4 space-y-2'>
        <span>Email</span><br />
        <input {...register("email", { required: true })} type="email" placeholder='Enter your Email'className='w-80 px-3 border rounded-md outline-none'/><br />
        {errors.email && <span className='text-sm text-red-500'>Email is required</span>}
    </div>
    <div className='mt-4 space-y-2'>
    <span>Password</span><br />
    <input {...register("password", { required: true })} type="password" placeholder='Enter your Password' className='w-80 px-3 border rounded-md outline-none'/> <br />
    {errors.password && <span className='text-sm text-red-500'>Email is required</span>}
    </div>
    <div className='flex  justify-around mt-4'>
        <button type='submit' className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700  duration-200'>SignUp</button>
        <p className='text-xl'>Have an Account?<button onClick={()=>{
      document.getElementById("my_modal_3").showModal()

        }} className='underline text-blue-500'>Login</button>
        <Login/>
        </p>
    </div>
    </form>


  </div>
</div>
    </div>

  )
}

export default SignUp