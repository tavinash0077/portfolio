import React from 'react'
import mans from '../assets/mans.png'
const About = () => {
  return (
    <>
        <div className="main-container border py-5 bg-gray-100">
            <h1 className='font-bold text-3xl text-center underline pb-10 '>About Me</h1>

            <div className='flex items-center'>
                {/* Image container */}
                <div className=' w-full flex justify-center'>
                {/* image */}
                <div className='p-4'>
                    <div className=" rounded-full overflow-hidden h-60 w-60">
                        <img className="object-cover h-full w-full shadow-lg" src={mans} alt="Avinash Singh" />
                    </div>
                </div>
                </div>
                
                {/* Text container */}
                <div className='w-full flex justify-center'>
                    <div className="space-y-3 w-2/3">
                    <h1 className='text-3xl'>Java Developer</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ut consequuntur assumenda harum eaque voluptatum error expedita nam! Placeat, impedit.</p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptatum laudantium enim eveniet, dolores ut, quaerat vero dignissimos velit exercitationem veritatis eaque quia qui eligendi facere itaque accusantium nisi deserunt!
                    </p>
                    <button className=' text-1xl font-semibold font-sans px-3 py-2 rounded-full shadow bg-orange-500  ml-auto'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About
