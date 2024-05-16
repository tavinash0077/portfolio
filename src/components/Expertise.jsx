import React from 'react'
import bannerBackground from '../assets/banner_wallpaper.svg'

const Expertise = () => {
  return (
    <>
      <div className="mt-2">
        <h1 className=" mb-16 text-3xl font-bold underline  text-center">
          My Expertise
        </h1>
         <div  style={{
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover",
          }} className=" box-container items-center flex py-16">
         <div className="flex text-white justify-center">
            <div className="w-2/3 text-center space-y-4">
            {/* text-container */}

                <h2 className='text-3xl font-bold'>I love these Technologies</h2>
                <p>Engaging with these technologies ignites a profound sense of fulfillment within me. The intricacies of Java, with its robustness and versatility, continually inspire me to push the boundaries of what's possible in software development. .</p>
                <button className=' text-1xl font-semibold font-sans px-3 py-2 rounded-full shadow bg-orange-500  ml-auto'>Hire Me</button>

            </div>
            </div>
            <div className="flex justify-center">
            {/* skill-container */}
                
                <div className="flex justify-center w-2/3 h-fit space-x-3  flex-wrap">
                <p className='bg-gray-300 w-fit px-3 py-1 rounded-full mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>Core Java</p>
                <p className='bg-gray-300 w-fit px-3 py-1 rounded-full mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>J2ee</p>
                <p className='bg-gray-300 w-fit px-3 py-1 rounded-full mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>Hibernate</p>
                <p className='bg-gray-300 w-fit px-3 py-1 rounded-full mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>Spring Framework</p>
                <p className='bg-gray-300 w-fit px-3 py-1 rounded-full mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>SpringBoot Framework</p>
                <p className='bg-gray-300 w-fit px-3 py-1 rounded-full mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>Spring Security</p>
                <p className='bg-gray-300 w-fit px-3 py-1 rounded-full mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>MySQL</p>
                <p className='bg-gray-300 w-fit px-3 py-1 rounded-full mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>MongoDB</p>
                <p className='bg-gray-300 w-fit px-3 py-1 rounded-full mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>RestAPI</p>
                <p className='bg-gray-300 w-fit px-3 py-1 rounded-full mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>React JS</p>
                <p className='bg-gray-300 w-fit px-3 py-1 rounded-full mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>CSS</p>
                <p className='bg-gray-300 w-fit px-3 py-1 rounded-full mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>HTML</p>
                <p className='bg-gray-300 w-fit px-3 py-1 rounded-full mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>Javascript</p>
                </div>
            </div>

         </div>
{/*  <>
      <div className="mt-2">
        <h1 className=" mb-16 text-5xl font-bold underline  text-center">
          My Expertise
        </h1>
        

<div
          style={{
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover",
          }}
          className="box-container items-center flex py-16"
        >
          <div className="flex text-white justify-center">
           
            <div className="w-2/3 text-center space-y-4">
              <h1 className="text-4xl font-bold">I love these technologies</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
                autem facere molestias libero eaque praesentium, dignissimos
                dolores, cum nisi rerum, modi corporis eligendi harum. Ut
                provident saepe in et ipsum.
              </p>
              <button className=" text-2xl px-4 py-2 bg-orange-500 rounded-full shadow-lg">
                Hire Me
              </button>
            </div>
          </div>
          <div className="flex justify-center">
           

            <div className="flex justify-center w-2/3 h-fit space-x-3  flex-wrap">
              <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">
                Core Java
              </p>

              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                J2EE
              </p>
              //mt-2 rounded-full hover:bg-orange-500 cursor-pointer

              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Hibernate(ORM Tool)
              </p>

              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Spring Framework
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Spring Boot Framework
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Spring Security
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Javascript
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                ReactJS
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Tailwind CSS
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Angular
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                NextJS
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                State Management
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                AWS Cloud
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                EC2
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Deploying on Clound
              </p>
            </div>
          </div>
        </div>
      </div>
    </> */}
      </div>  
      
    </>
  )
}

export default Expertise
