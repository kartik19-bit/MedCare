import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap=14 my-10 mt-40 text-sm '>

                {/* ------left part------*/}
                <div>
                    <img className='sm:mb-5 mt-6 mb-2 w-40' src={assets.logo} alt=''/> 
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>Our platform allows you to effortlessly find and book appointments with trusted doctors. Whether you need a consultation or a routine check-up, we provide a simple, secure, and convenient way to schedule your visit, all from the comfort of your home. Take control of your healthcare today!</p>
                </div>

                {/* ------center part------*/}
                <div>
                    <p className='text-xl mt-6 mb-2 font-medium sm:mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                
                {/* ------right part------*/}
                <div>
                     <p className='text-xl mt-6 mb-2 font-medium sm:mb-5'>GET IN TOUCH</p>
                     <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+1-212-321-2290</li>
                        <li>MedCare19@gmail.com</li>
                     </ul>
                </div>

            </div>
            
            {/* ------bottom part------*/}
            <div>
                 <hr></hr>
                 <p className='py-5 text-sm text-center'>© 2024 MedCare. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer
