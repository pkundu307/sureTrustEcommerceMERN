import React, { useState } from 'react';

const Carousel = () => {
    const [currentItem, setCurrentItem] = useState(0);

    const nextItem = () => {
        setCurrentItem(currentItem === totalItems - 1 ? 0 : currentItem + 1);
    };

    const prevItem = () => {
        setCurrentItem(currentItem === 0 ? totalItems - 1 : currentItem - 1);
    };

    const totalItems = 5; // Total number of carousel items

    return (
        <div id="controls-carousel" className="relative w-full" data-carousel="static">
            {/* Carousel wrapper */}
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {/* Render each carousel item based on currentItem */}
                {[...Array(totalItems)].map((_, index) => (
                    <div
                        key={index}
                        className={`duration-700 ease-in-out ${currentItem === index ? 'block' : 'hidden'}`}
                        data-carousel-item={currentItem === index ? 'active' : ''}
                    >
                        <img
                            src="https://d1fufvy4xao6k9.cloudfront.net/images/landings/2/suits-3p-mob-6.jpg"
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt={`Carousel ${index + 1}`}
                        />
                        
                    </div>
                ))}
            </div>
            {/* Slider controls */}
            <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={prevItem}>
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
        </svg>
            </button>
            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={nextItem}>
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
        </svg>
            </button>
        </div>
    );
};

export default Carousel;
