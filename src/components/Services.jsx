import React from 'react'

const Services = () => {
  return (
    <>
      <div className="main-container py-10">
        <h1 className='font-bold text-3xl text-center underline pb-10 '>My Services</h1>
        {/* Service container */}
       <div className="service-container space-x-5 px-6 flex mt-12">
       <div className='cursor-pointer hover:bg-gray-100 service1 bg-slate-200 p-5 text-center shadow-lg rounded-xl space-y-2'>
            <i class="text-4xl fa-brands fa-aws"></i>
            <h2 className='text-2xl'>Web Development</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis temporibus possimus impedit velit totam fugit vel omnis provident culpa nostrum.</p>
            <button className=' text-1xl font-semibold font-sans px-3 py-2 rounded-full shadow bg-orange-500  ml-auto'>Check</button>
        </div>
        <div className='cursor-pointer hover:bg-gray-100 service2  bg-slate-200 p-5 text-center shadow-lg rounded-xl space-y-2'>
            <i class="text-4xl fa-brands fa-java"></i>
            <h2 className='text-2xl'>Backend Development</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis temporibus possimus impedit velit totam fugit vel omnis provident culpa nostrum.</p>
            <button className=' text-1xl font-semibold font-sans px-3 py-2 rounded-full shadow bg-orange-500  ml-auto'>Check</button>
        </div><div className='cursor-pointer hover:bg-gray-100 service3 bg-slate-200 p-5 text-center shadow-lg rounded-xl space-y-2'>
            <i class="text-4xl fa-solid fa-laptop"></i>
            <h2 className='text-2xl'>Frontend Development</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis temporibus possimus impedit velit totam fugit vel omnis provident culpa nostrum.</p>
            <button className=' text-1xl font-semibold font-sans px-3 py-2 rounded-full shadow bg-orange-500  ml-auto'>Check</button>
        </div>
       </div>
      </div>
    </>
  )
}

export default Services
