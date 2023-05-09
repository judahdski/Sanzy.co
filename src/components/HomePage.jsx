import React from 'react';
import BusinessCard from './BusinessCard';

const HomePage = () => {
    const number = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div className="grid grid-cols-4 gap-4">
            {number.map((num, index) => (
                <BusinessCard key={index} />
            ))}
        </div>
    );
};

export default HomePage;
