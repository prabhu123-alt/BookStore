import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../components/login';
import { useForm } from "react-hook-form";

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

   

    return (
        <>
            <div className='flex justify-center items-center h-screen'>
                <div id="my_modal_4" className="">
                    <div className="modal-box py-4 px-20 w-full h-auto">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Link to='/'
                                type="button"
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                              
                            >
                                ✕
                            </Link>

                            <h3 className="font-bold text-lg">Signup</h3>
                            <p className="py-4">Name</p>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", { required: true })}
                            />
                            {errors.name && <p className="text-red-500 flex">Name is required</p>}

                            <p className="py-4">Email</p>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <p className="text-red-500 flex">Email is required</p>}

                            <p className="py-4">Password</p>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", { required: true })}
                            />
                            {errors.password && <p className="text-red-500 flex">Password is required</p>}

                            <div className='flex justify-between gap-20 items-center'>
                                <div>
                                    <button
                                        type="submit"
                                        className="bg-gray-300 text-gray-700 hover:bg-gray-400 hover:text-gray-800 font-semibold py-1 mt-9 px-9 border border-gray-300 rounded shadow-sm"
                                    >
                                        Signup
                                    </button>
                                </div>
                                <div className='mt-9'>
                                    <button
                                        type="button"
                                        className="text-gray-600 flex gap-2"
                                        onClick={() => document.getElementById('my_modal_3').showModal()}
                                    >
                                        Registered <span className="text-blue-400 underline ml-1">Login</span>
                                    </button>
                                    <Login />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
