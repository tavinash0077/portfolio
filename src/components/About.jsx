import React, { useState } from 'react';
import mans from '../assets/mans.png';

const About = () => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

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
                            <p>As a Java Developer at WIPRO Technologies, I've been involved in the MasterCard Client Project Data Science Service, focusing on developing a Java API integrated with Bias Testing functionality. The project aimed to empower Data Scientists by enabling them to collaborate on Machine Learning</p>
                            {showMore && (
                                <p>
                                    These contributions have significantly contributed to the project's success by improving collaboration among Data Scientists, automating Bias Testing processes, and ensuring the reliability of Machine Learning Models.
                                </p>
                            )}
                            <button className=' text-1xl font-semibold font-sans px-3 py-2 rounded-full shadow bg-orange-500  ml-auto' onClick={toggleShowMore}>
                                {showMore ? 'Read Less' : 'Read More'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
