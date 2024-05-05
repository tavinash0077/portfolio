import React from 'react'
import mans from '../assets/mans.png'
import bannerBackground from '../assets/banner_wallpaper.svg'
const Banner = () => {
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
                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut earum unde quisquam delectus a rerum totam ab, qui amet aliquam ducimus. Saepe reiciendis perspiciatis</p>
                    <div className=" icon-container flex py-1 space-x-4 ">

                        <a className="cursor-pointer rounded-full w-11 h-11 flex justify-center items-center bg-gray-800 hover:animate-spin">
                        <i class=" text-2xl fa-brands fa-linkedin-in"></i>
                        </a>

                        <a className="cursor-pointer rounded-full w-11 h-11 flex justify-center items-center bg-gray-800 hover:animate-spin">
                        <i class="text-2xl fa-brands fa-github"></i>
                        </a>

                        <a className="cursor-pointer rounded-full w-11 h-11 flex justify-center items-center bg-gray-800 hover:animate-spin  ">
                        <i class="text-2xl fa-brands fa-instagram"></i>
                        </a>

                    </div>

                    <br />
                    <a className=' text-1xl font-semibold font-sans px-3 py-2 rounded-full shadow bg-orange-500  ml-auto' href="/contact">Contact Me</a>
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

        </div>
    )
}

export default Banner
