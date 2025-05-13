import React from 'react';
import { GiTakeMyMoney } from 'react-icons/gi';
import { FiCheckCircle } from 'react-icons/fi';
import { RiCustomerService2Fill } from 'react-icons/ri';

const skillsData = [
    {
        name: "Best Price",
        icon: (
            <GiTakeMyMoney className='text-5xl text-primary group-hover:text-black duration-300' />
        ),
        link: "#",
        description: "We offer the best price for our services, ensuring you get the best value for your money.",
    },
    {
        name: "Fast and Safe",
        icon: (
            <FiCheckCircle className='text-5xl text-primary group-hover:text-black duration-300' />
        ),
        link: "#",
        description: "Our services are designed to be fast and safe, providing you with a seamless experience.",
    },
    {
        name: "Reliable Service",
        icon: (
            <RiCustomerService2Fill className='text-5xl text-primary group-hover:text-black duration-500' />
        ),
        link: "#",
        description: "Well-serviced vehicles and timely availability make us your trusted travel choice.",
    }
];

const Services = () => {
    return (
        <div className='py-10 bg-white dark:bg-black dark:text-white min-h-screen flex flex-col justify-center'>
            <div className="container">
                {/* Perfectly matched heading */}
                <div className="pb-8">
                    <h1 className='text-4xl font-semibold text-left font-serif sm:text-5xl'>
                        Why Choose Us
                    </h1>
                    <div className="w-20 h-1 bg-primary mt-4"></div>
                </div>

                {/* Original card sizes preserved */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {skillsData.map((skill) => (
                        <div
                            key={skill.name}
                            className='card text-center group space-y-3 sm:space-y-6 p-4
                            sm:py-16 bg-dark hover:bg-primary duration-300 text-white
                            hover:text-black rounded-lg'
                        >
                            <div className='grid place-items-center'>
                                {skill.icon}
                            </div>
                            <h1>{skill.name}</h1>
                            <p>{skill.description}</p>
                            <a href={skill.link}>Learn More</a>
                        </div>
                    ))}
                </div>

                {/* Bottom text matching reference */}
                <div className="mt-10 text-center max-w-3xl mx-auto">
                    <p className="text-lg dark:text-gray-300">
                        Our service guarantees quality, reliability, and exceptional value for all your transportation needs.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Services;
