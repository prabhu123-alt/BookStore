import React from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    const closeModal = () => {
        const modal = document.getElementById('my_modal_3');
        if (modal) {
            modal.close();  
        }
    };

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box py-6 w-96">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        <button
                            type="button"
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={closeModal}
                        >
                            ✕
                        </button>
                        <h3 className="font-bold text-lg">Login</h3>

                        <p className="py-4 flex">Email</p>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input flex input-bordered w-full max-w-xs"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <p className="text-red-500 flex">Email is required</p>}

                        <p className="py-4 flex">Password</p>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="input flex input-bordered w-full max-w-xs"
                            {...register("password", { required: true })}   

                        />
                        {errors.password && <p className="text-red-500 flex">Password is required</p>}

                        <div className='flex justify-between'>
                            <button
                                type="submit"
                                className="bg-gray-300 text-gray-700 hover:bg-gray-400 hover:text-gray-800 font-semibold py-1 mt-5 px-9 border border-gray-300 rounded shadow-sm"
                            >
                                Login
                            </button>

                            <Link to="/Signup" className="text-gray-600 mt-9">
                                Registered
                                <span className='text-blue-400 underline ml-1'>Signup</span>
                            </Link>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Login;
