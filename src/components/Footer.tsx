
import React from "react";
import Image from "next/image";
function Footer() {
  return (
    <>
    <div className="flex flex-col sm:flex-row h-auto bg-gradient-to-b from-black to-blue-600 text-white">
      {/* Logo Section */}
      <div className="border-b-2 sm:border-b-0 sm:border-r-2 border-white w-full sm:w-1/3 flex justify-center items-center py-6">
        <Image
          src="https://res.cloudinary.com/dnw1mcx2h/image/upload/v1733112796/vqjifbdhv8am24uitmmt.png"
          alt="Logo"
          width={192}
          height={160}
          className="rounded-lg object-cover shadow-md"
        />
      </div>
    
      {/* Contact Section  */}
      
       <div className="w-full sm:w-1/3 border-b-2 sm:border-b-0 sm:border-r-2 border-white text-center py-6">
        <div className="mt-6">
          <h1 className="font-bold text-xl sm:text-2xl mb-4 ">Contact us</h1>
          <p className="font-medium text-base sm:text-lg">
            7990553041 <span className="ml-4 sm:text-sm">Arthur Murray</span>
          </p>
          <p className="font-medium text-base sm:text-lg">
            7205131346 <span className="ml-4">Harley Joan</span>
          </p>
          <a
            href="mailto:nitrkl.ecell@gmail.com"
            className="font-medium text-base sm:text-lg underline block mt-4"
          >
            nitrkl.ecell@gmail.com
          </a>
        </div> 
       </div>

      {/* Navigation Section */}
       <div className="w-full sm:w-1/3 text-center mt-6 py-6 ">
        <p className="text-base sm:text-lg font-bold mb-1">About us</p>
        <p className="text-base sm:text-lg font-bold mb-1">Speaker</p>
        <p className="text-base sm:text-lg font-bold mb-1">Sponsors</p>
        <p className="text-base sm:text-lg font-bold">Our Partners</p>
      </div> 
      
      </div> 
     <div className="bg-black h-6 w-full text-center">
     Made with 🩵 by WEBWIZ
   </div>
      
   </>
  );
}

export default Footer;
