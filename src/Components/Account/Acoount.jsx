
import React, { useContext } from "react";
import { UserContext } from "../../Conttext/UserContext";
import Cart from "../Cart/Cart";
import WishList from "../WishList/WishList";

export default function Account() {
    // Function to decode a base64 URL encoded string
    function base64UrlDecode(base64Url) {
        // Replace non-standard characters used in base64Url encoding
        let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        
        // Pad the string to be a multiple of 4 characters in length
        while (base64.length % 4) {
          base64 += '=';
        }
        
        // Decode the base64 string and return the result
        return JSON.parse(atob(base64));
      }
      
      // Function to extract info from JWT token
      function getJwtInfo() {
        // Get the JWT token from local storage
        const jwtToken = localStorage.getItem('userToken');
        
        if (!jwtToken) {
          console.log('No JWT token found in local storage');
          return null;
        }
      
        // Split the JWT token into its parts (header, payload, signature)
        const tokenParts = jwtToken.split('.');
        
        if (tokenParts.length !== 3) {
          console.log('Invalid JWT token');
          return null;
        }
      
        // Decode the payload (second part of the JWT)
        const payload = base64UrlDecode(tokenParts[1]);
      
        // Return the decoded payload (which contains the information)
        return payload;
      }
      
      // Example usage
      const userInfo = getJwtInfo();
      if (userInfo) {
        console.log('Decoded JWT info:', userInfo);
      }
  return (
    <div >
              <h2 className="text-5xl m-10 text-blue-400 text-center "> My Account</h2>
              <div className="bg-yellow-200 w-fit m-auto  rounded p-2">
            <p className="text-gray-700 text-center  m-3 text-2xl"> <i className="fas fa-star-of-life"></i> Name:{userInfo.name}<i className="fas fa-star-of-life"></i> </p>
            <p className="text-gray-700 text-center m-7 text-xl  ">Id:{userInfo.id}</p>
            </div>
      <Cart/>
      <WishList/>
    </div>

  );
}
