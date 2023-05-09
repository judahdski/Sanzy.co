import React from 'react';
import BusinessCard from './BusinessCard';
import BottomNav from './BottomNav';
import Header from './Header';

const HomePage = () => {
    const number = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <>
            <Header />

            <div className="p-6 grid grid-cols-4 gap-4">
                {number.map((num, index) => (
                    <BusinessCard key={index} />
                ))}
            </div>

            <BottomNav />
        </>
    );
};

export default HomePage;
