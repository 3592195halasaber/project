import React from 'react'

export default function ContentUs() {
    return (
        <div className='mt-5'>
          <h1 className=' text-3xl text-blue-500  text-center p-2 rounded'>Contact Us</h1>
          <p className='text-gray-700 text-center mt-5'>If you have any questions, feel free to reach out to us using the information below:</p>
          
          <div className='mt-5 text-center'>
            <i className='fas fa-star-of-life'></i>
            <h2 className='m-2'>Email</h2>
            <p className='text-blue-600 m-2'>hazemlenin@gmail.com</p>
            <i className='fas fa-star-of-life'></i>
          </div>
          
          <div className='mt-5 text-center'>
 
            <h2 className='m-2'>Phone</h2>
            <p className='text-blue-600 m-2'>+1 (123) 456-7890</p>
            <i className='fas fa-star-of-life'></i>
          </div>
          
          <div className='mt-5 text-center'>
    
            <h2 className='m-2'>Address</h2>
            <p className='text-blue-600 m-2'>123 Main Street, City, Country</p>
            <i className='fas fa-star-of-life'></i>
          </div>
        </div>
      );
}
