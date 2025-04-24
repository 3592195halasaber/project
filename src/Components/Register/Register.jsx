

import { useFormik } from 'formik';
import Style from './Register.module.css'
import React, { useContext, useEffect, useState } from 'react'
import * as Yup from "yup"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../Conttext/UserContext';
export default function Register() {
  const [Counter, setCounter] = useState(0);
  const [errMsg, seterrMsg] = useState(undefined);
  const navigate = useNavigate();
  const [loding, setloding] = useState(false);
  const { token, settoken } = useContext(UserContext)

  async function handleSubmit(values) {
    setloding(true)
    try {
      const { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values);
      console.log(data);
      localStorage.setItem("userToken", data.token)
      settoken(data.token)
      navigate('/Home')
    } catch (err) {
      console.log(err);
      seterrMsg(err.response?.data?.message || "Something went wrong")
    }
    finally {
      setloding(false)
    }
  }
  const yupSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(5, "Must be at least 5 characters")
      .max(15, "Must be at most 15 characters"),
  
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email"),
  
    country: Yup.string()
      .required("Country is required")
      .matches(/^[a-zA-Z]{2,}$/, "Enter a valid country name"),
  
    address: Yup.string(),
  
    password: Yup.string()
      .required("Password is required")
      .matches(/^[A-Za-z0-9]{6,20}$/, "Password must be 6-20 characters, letters and numbers only"),
  
    rePassword: Yup.string()
      .required("Please confirm your password")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^01[0125][0-9]{8}$/, "Not a valid Egyptian phone number"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "",
      addres: "",
      password: "",
      rePassword: "",
      phone: ""
    },
    onSubmit: handleSubmit,
    validationSchema: yupSchema,

  })

  console.log({ error: formik.errors });


  // {
  // "name": "Ahmed Abd Al-Muti",
  // "email":"ahmedmuti@gmail.com",
  // "password":"Ahmed@123",
  // "rePassword":"Ahmed@123",
  // "phone":"01010700701"
  // }
  return (
    <div className="max-w-md mx-auto my-10">
      <h2 className="text-3xl mb-5 text-blue-500 font-bold ">Register Form</h2>
      {
        errMsg &&
        <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          "email alredy exist"
        </div>
      }
      <form className="max-w-md mx-auto" onSubmit={formik.handleSubmit}>
        <div className="relative z-0 w-full mb-5 group">
          <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} placeholder=" " />
          <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User Name</label>
        </div>
        {formik.errors.name &&
          <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            {formik.errors.name}
          </div>


        }
        <div className="relative z-0 w-full mb-5 group">
          <input
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}
            type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
          <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
        </div>
        {formik.errors.email &&
          <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            {formik.errors.email}
          </div>
        }
        <div className="relative z-0 w-full mb-5 group">
          <input
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
          <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">password</label>
        </div>

        {formik.errors.password &&
          <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            {formik.errors.password}
          </div>
        }
        <div className="relative z-0 w-full mb-5 group">
          <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.rePassword} type="Password" name="rePassword" id="rePassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
          <label htmlFor="rePassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">rePassword</label>
        </div>
        {formik.errors.rePassword &&
          <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            {formik.errors.rePassword}
          </div>
        }
        <div className="relative z-0 w-full mb-5 group">
          <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} type="tel" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
          <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>
        </div>
        {formik.errors.phone &&
          <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            {formik.errors.phone}
          </div>
        }
         <div className="relative z-0 w-full mb-5 group">
          <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.addres} type="addres" name="addres" id="addres" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
          <label htmlFor="addres" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
        </div> 
        {formik.errors.addres &&
          <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            {formik.errors.addres}
          </div>
        }
      
                <div className="relative z-0 w-full mb-5 group">
          <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.country} type="country" name="country" id="country" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
          <label htmlFor="country" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">country</label>
        </div>
        {formik.errors.country &&
          <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            {formik.errors.country}
          </div>
        }
      
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" disabled={loding}> {loding ? "loding...." : "SignUp"}</button>
      </form>
    </div>


  )
}
