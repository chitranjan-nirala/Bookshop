import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login() {
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
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            <h3 className="font-bold text-lg">Login</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-4 space-y-2">
                <label>Email</label><br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border rounded-md w-80 outline-none px-2 py-1"
                  {...register("email", { required: true })}
                />
                {errors.email && <span className="text-red-600">This field is required</span>}
              </div>

              <div className="mt-4 space-y-2">
                <label>Password</label><br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="border rounded-md w-80 outline-none px-2 py-1"
                  {...register("password", { required: true })}
                />
                {errors.password && <span className="text-red-600">This field is required</span>}
              </div>

              <div className="flex justify-around mt-4">
                <button
                  type="submit"
                  className="bg-pink-600 text-white rounded-md px-3 py-1 hover:bg-pink-400 duration-200"
                >
                  Login
                </button>
                <p>
                  Not registered?
                  <Link to="/signup" className="underline text-blue-500 cursor-pointer"> Sign Up</Link>
                </p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
