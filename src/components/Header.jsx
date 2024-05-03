import React, { useState } from 'react'

const Header = () => {

    const[brand,setBrand]= useState("Avinash Singh");

    const[menuLinks, setMenuLinks] = useState([
        {
            title : "Home",
            link : "/Home",
            id: 1
        },
        {
            title : "About",
            link : "/About",
            id: 2
        },
        {
            title : "Skills",
            link : "/Skills",
            id: 3
        },
        {
            title : "Portfolio",
            link : "/Portfolio",
            id: 4
        },
        {
            title : "Contact",
            link : "/Contact",
            id: 5
        }

    ]);

  return (
   <>
    <div className="h-20 main flex justify-between items-center px-16 bg-gray-100">

        <div>
            {/* brand logo*/}

            <h1 className='font-bold text-2xl'>{brand}</h1>
        </div>

        <div className='space-x-6'>   
            {/* menu*/}

            {menuLinks.map((link)=>(
                 <a key={link.id} href= {link.link} className='hover:text-orange-600'>{link.title}</a> 
            ))}

            {/* <a href="/home " className='hover:text-orange-600'>Home</a>    
            <a href="/about " className='hover:text-orange-600'>About</a>
            <a href="/skills " className='hover:text-orange-600'>Skills</a>
            <a href="/portfolio " className='hover:text-orange-600'>Portfolio</a>
            <a href="/contact " className='hover:text-orange-600'>Contact</a> */}

        </div>
        
        <div>
            {/* buttons*/}
            <button className='px-2 py-2 bg-orange-500 shadow rounded-full text-xl'>Download CV</button>
        </div>
   
    </div>

   </>
  )
}

export default Header