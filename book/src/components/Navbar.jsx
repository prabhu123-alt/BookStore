import React, { useEffect, useState } from 'react'
import Login from './login';
import Logout from './Logout';
import { useAuth } from '../context/authprovider';


function Navbar() {
    const [authUser, setAuthUser] = useAuth();


    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.body.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
    }, [theme]);


    const navItems = (

        <>
            <li className=' font-bold '>
                <a href='/'>Home</a>
            </li>

            <li className=' font-bold '>
                <a href='/Course'>Course</a>
            </li>
            <li className=' font-bold '>
                <a href='/Contact'>Contact</a>
            </li>

            <li className=' font-bold '>
                <a href='/About'>Author</a>
            </li>
        </>
    )
    return (
        <>
            <div className='fixed top-0 left-0 right-0 z-30 bg-base-100 shadow-md  dark:text-black'>
                <div className='max-w-screen-2xl container  mx-auto md:px-20'>
                    <div className="navbar bg-base-100">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h8m-8 6h16" />
                                    </svg>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <li><a>Item 1</a></li>
                                    <li>
                                        <a>Parent</a>
                                        <ul className="p-2">
                                            <li><a>Submenu 1</a></li>
                                            <li><a>Submenu 2</a></li>
                                        </ul>
                                    </li>
                                    <li><a>Item 3</a></li>
                                </ul>
                            </div>
                            <a className=" text-4xl font-bold">BookStore</a>
                        </div>
                        <div className='navbar-end'>
                            <div className="navbar-center hidden lg:flex">
                                <ul className="menu menu-horizontal px-1"> {navItems}

                                </ul>
                            </div>
                            <div>
                                <label className="input input-bordered outline-none flex items-center gap-2 mr-4 h-9 ">
                                    <input type="search" className="grow outline-none borde" placeholder="Search" />

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 opacity-70">
                                        <path
                                            fillRule="evenodd"
                                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                            clipRule="evenodd" />
                                    </svg>
                                </label>
                            </div>
                            <div className="mr-4">
                                <label className="swap swap-rotate">
                                    {/* Sun icon */}
                                    <svg
                                        className={`h-9 w-9 fill-current ${theme === 'dark' ? 'hidden' : 'block'}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        onClick={() => setTheme('dark')}
                                    >
                                        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                                    </svg>

                                    {/* Moon icon */}
                                    <svg
                                        className={`h-9 w-9 fill-current ${theme === 'light' ? 'hidden' : 'block'}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        onClick={() => setTheme('light')}
                                    >
                                        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                                    </svg>
                                </label>
                            </div>


                            {
                                authUser ? <Logout /> :

                                    <div className="navbar-start">
                                        <a className="btn bg-blue-900 text-white hover:bg-red-400 py-3 px-4" onClick={() => document.getElementById('my_modal_3').showModal()}>Login</a>
                                        <Login />

                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar