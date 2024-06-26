import React, { useState } from 'react';

const Header = () => {
    const [brand, setBrand] = useState("Avinash Singh");

    const [menuLinks, setMenuLinks] = useState([
        {
            title: "Home",
            link: "/Home",
            id: 1
        },
        {
            title: "About",
            link: "/About",
            id: 2
        },
        {
            title: "Skills",
            link: "/Skills",
            id: 3
        },
        {
            title: "Portfolio",
            link: "/Portfolio",
            id: 4
        },
        {
            title: "Contact",
            link: "/Contact",
            id: 5
        }
    ]);

    const cvLink = "https://drive.google.com/file/d/1tQznyQfn3M43noijdc0zCgBabhCxry4Q/view?usp=drive_link";

    return (
        <>
            <div className="h-16 main flex justify-between items-center px-16 bg-gray-100">
                <div>
                    {/* brand logo*/}
                    <h1 className='font-bold text-2xl'>{brand}</h1>
                </div>
                <div className='space-x-6'>
                    {/* menu*/}
                    {menuLinks.map((link) => (
                        <a key={link.id} href={link.link} className='hover:text-orange-600'>{link.title}</a>
                    ))}
                </div>
                <div>
                    {/* buttons*/}
                    <a href={cvLink} className='px-3 py-2 bg-orange-500 shadow rounded-full font-semibold text-sm' target="_blank" rel="noopener noreferrer">Download CV</a>
                </div>
            </div>
        </>
    )
}

export default Header;
