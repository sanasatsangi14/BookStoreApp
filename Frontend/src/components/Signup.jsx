import React from 'react'
import Login from "./Login";
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (<>
    <div className='flex h-screen items-center justify-center '>
      <div className="w-[600px]">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
          
          <h3 className="font-bold text-lg">Signup</h3>

          <div className='mt-4 space-y-2 py-1'><span>Name</span>
            <br />
            <input type='text' placeholder='Enter your full name'
              className='w-80 px-3 border rounded-md outline-none'
              {...register("name", { required: true })} />
          </div>
          <br />
              {errors.name && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
          {/* email */}
          <div className='mt-4 space-y-2 py-1'><span>Email</span>
            <br />
            <input type='email' placeholder='Enter your email'
              className='w-80 px-3 border rounded-md outline-none'
              {...register("email", { required: true })} />
          </div>
          <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}

          {/* password */}
          <div className='mt-4 space-y-2 py-1'><span>Password</span>
            <br />
            <input type='text' placeholder='Enter your password'
              className='w-80 px-3 border rounded-md outline-none'
              {...register("password", { required: true })} />
          </div>
          <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}

          {/* button */}
          <div className='flex justify-around mt-4'>
            <button className='bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700'>Signup</button>
            <p>Have an account?    
              <button to="/" className='ml-3 underline cursor-pointer text-blue-500'
              onClick={()=>document.getElementById("my_modal_3").showModal()}>
              Login</button>
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
