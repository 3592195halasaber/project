import React, { useContext, useState } from 'react'
import Style from './NavBar.module.css'
import { useEffect } from 'react';
import Logo from '../../assets/logo.webp'
import { NavLink, useNavigate } from 'react-router-dom';
import {CounterContext} from '../../Conttext/counterContext';
import { UserContext } from '../../Conttext/UserContext';


export default function NavBar(cartDetailse) {

  const { counter, setCounter } = useContext(CounterContext);
  const { token, settoken } = useContext(UserContext)


  const navigate = useNavigate()
  function LogOut() {

    localStorage.removeItem("userToken")
    settoken(null)
    navigate('/Login')
  }

   
  return (<>

    <nav className="bg-white border-gray-200 dark:bg-gray-900 ">
      <div className="max-w-screen-xl flex flex-wrap items-center gap-3 mx-auto  pt-8">
        <a href="Cart" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="h-16" alt="E-commerce Logo" />

          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Fresh cart</span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full  md:w-auto flex-grow md:flex md:justify-between" id="navbar-default">
          {
            token &&
            <ul className="font-medium flex flex-col ms-10 items-center md:p-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

              <li>
                <NavLink to="Home" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</NavLink>
              </li>
              <li>
                <NavLink to="Brands" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Brands</NavLink>
              </li>
              <li>
                <NavLink to="Proudects" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Proudects</NavLink>
              </li>
              <li>
                <NavLink to="Cart" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Cart</NavLink>
              </li>
              <li>
                <NavLink to="WishList" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">WishList</NavLink>
              </li>
              <li>
                <NavLink to="Category" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Category</NavLink>
              </li>
              <li>
                <NavLink to="ContentUs" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">ContentUs</NavLink>
              </li>
              <li>
                <NavLink to="About" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</NavLink>
              </li>
              <li>
                <NavLink to="Account" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">My Account</NavLink>
              </li>


            </ul>
          }
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className='relative'>
              < NavLink to="Cart">

              </NavLink>


            </li>
            {
              token && <li>
                <span to="logout" onClick={LogOut} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 cursor-pointer md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">LogOut</span>
              </li>
            }
            {
              !token && <> <li>
                <NavLink to="Login" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</NavLink>
              </li>
                <li>
                  <NavLink to="Register" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Register</NavLink>
                </li></>
            }
            <li className='flex  gap-4 px-3'>
              <a href=""><i className='fa-brands fa-facebook'></i></a>
              <a href=""><i className='fa-brands fa-twitter'></i></a>
              <a href=""><i className='fa-brands fa-github'></i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
  )
}
