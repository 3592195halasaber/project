import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Style from './ProudecrCart.module.css'
import toast from 'react-hot-toast';

export default function ProudectCart({ product }) {


    async function AddProudect(product) {
        try {
            const { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/cart",
                {
                    productId: product
                },
                {
                    headers: {
                        token: localStorage.getItem("userToken")
                    }
                }
            )
            console.log(data);
            toast.success("Add to Cart");
        } catch (error) {
            console.log(error);

        }
    }
    const [isActive, setIsActive] = useState(false);

    async function handleClick(product) {


        try {

            const { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/wishlist",
                {
                    productId: product
                },
                {
                    headers: {
                        token: localStorage.getItem("userToken")
                    }
                }
            )

            toast.success("Add to WishList");
            console.log(data);
            setIsActive(true)
        } catch (error) {
            console.log(error);

        }


    };



    return (
        <div className={`${Style.btnT} overflow-hidden    hover:shadow-md hover:shadow-blue-500 hover:transition-all max-w-sm flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}>
            <Link to={"/productDetails/" + product.id}>

                <img className="rounded-t-lg" src={product.imageCover} alt={product.title} />

                <div className="p-5 flex-grow flex  flex-col items-start">

                    <h5 title={product.category.name} className="mb-2 text-xl text-blue-700  tracking-tight  dark:text-white line-clamp-1">{product.category.name.split(" ", 3).join(" ")}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-4">{product.title}</p>
                    <div className='flex  justify-between '>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.price}EGP</p>

                        <p className="ms-24 font-normal text-gray-700 dark:text-gray-400"><i className='fas fa-star text-yellow-400'></i>{product.ratingsAverage}</p>
                    </div>
                </div>
            </Link>
            <button className={`ms-44 mt-0  text-2xl fas fa-heart ${isActive ? "text-red-700" : ""}`} onClick={() => handleClick(product._id)}>
            </button>


            <button onClick={() => AddProudect(product._id)} className={`m-auto px-14 mb-5 ${Style.sill}  inline-flex  mt-auto items-center  py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>
                +Add
            </button>
        </div>
    )
}