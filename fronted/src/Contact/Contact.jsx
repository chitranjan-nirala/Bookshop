import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission logic
  };

  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <div className='w-[600px]'>
          <div className='modal-box'>
            <h3 className='font-bold text-lg'>Contact Us</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Name */}
              <div className='mt-4 space-y-2'>
                <label>Name</label>
                <input
                  type='text'
                  placeholder='Enter your name'
                  className='border rounded-md w-80 outline-none px-2 py-1'
                  {...register('name', { required: true })}
                />
                {errors.name && <span className='text-red-600'>This field is required</span>}
              </div>

              {/* Email */}
              <div className='mt-4 space-y-2'>
                <label>Email</label>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='border rounded-md w-80 outline-none px-2 py-1'
                  {...register('email', { required: true })}
                />
                {errors.email && <span className='text-red-600'>This field is required</span>}
              </div>

              {/* Message */}
              <div className='mt-4 space-y-2'>
                <label>Message</label>
                <textarea
                  placeholder='Enter your message'
                  className='border rounded-md w-80 outline-none px-2 py-1'
                  rows='4'
                  {...register('message', { required: true })}
                />
                {errors.message && <span className='text-red-600'>This field is required</span>}
              </div>

              {/* Submit Button */}
              <div className='flex justify-between mt-4'>
                <button
                  type='submit'
                  className='bg-blue-600 text-white rounded-md px-3 py-1 hover:bg-blue-400 duration-200'
                >
                  Send
                </button>
                <Link to='/' className='underline text-blue-500 cursor-pointer'>
                  Home
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
