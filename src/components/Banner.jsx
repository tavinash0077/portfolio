import React, { useState } from 'react';
import mans from '../assets/mans.png';
import bannerBackground from '../assets/banner_wallpaper.svg';

const Banner = () => {
    const [showContactInfo, setShowContactInfo] = useState(false);

    const toggleContactInfo = () => {
        setShowContactInfo(!showContactInfo);
    };

    return (
        <div
            style={{
                backgroundImage: `url(${bannerBackground})`,
                backgroundSize: "cover"
            }}
            className='main-container flex items-center h-2/3 py-4'>

            <div className=' w-full flex justify-center text-white'>
                {/* text */}
                <div className=' w-2/3'>
                    <h3 className='mt-4 text-2xl font-sans font-semibold'>Hi, I am</h3>
                    <h1 className='mt-2 text-4xl font-sans font-bold'>Avinash Singh</h1>
                    <h2 className='mt-3 text-2xl font-sans'>A I am Java Developer</h2>
                    <p className='mt-3'>At Wipro, a global leader in IT consulting and outsourcing, where talented developers collaborate on innovative projects and tackle complex technical challenges to shape the future of Java development.</p>
                    <div className=" icon-container flex py-1 space-x-4 ">

                        <a className="cursor-pointer rounded-full w-11 h-11 flex justify-center items-center bg-gray-800 hover:animate-spin" href='https://www.linkedin.com/in/avinash-singh-665672285/'>
                            <i className=" text-2xl fa-brands fa-linkedin-in"></i>
                        </a>

                        <a className="cursor-pointer rounded-full w-11 h-11 flex justify-center items-center bg-gray-800 hover:animate-spin" href='https://github.com/tavinash0077'>
                            <i className="text-2xl fa-brands fa-github"></i>
                        </a>

                        <a className="cursor-pointer rounded-full w-11 h-11 flex justify-center items-center bg-gray-800 hover:animate-spin  " href='https://www.instagram.com/iamavi999/?next=%2F'>
                            <i className="text-2xl fa-brands fa-instagram"></i>
                        </a>

                    </div>

                    <br />
                    <button className=' text-1xl font-semibold font-sans px-3 py-2 rounded-full shadow bg-orange-500  ml-auto' onClick={toggleContactInfo}>Contact Me</button>
                </div>
            </div>
            <div className=' w-full flex justify-center'>
                {/* image */}
                <div className='p-4'>
                    <div className=" rounded-full overflow-hidden h-60 w-60">
                        <img className="object-cover h-full w-full shadow-lg" src={mans} alt="Avinash Singh" />
                    </div>
                </div>
            </div>

            {/* Contact Info Pop-up */}
            {showContactInfo && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
                        <p>Email: connectedto.avinash@gmail.com</p>
                        <p>Contact Number: +91 8708347535</p>
                        
                        <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md font-semibold" onClick={toggleContactInfo}>Close</button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Banner;
