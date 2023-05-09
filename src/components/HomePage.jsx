import React from 'react';
import BusinessCard from './BusinessCard';
import BottomNav from './BottomNav';
import Header from './Header';
import { businessDivisions } from '../data';

const HomePage = () => {
    return (
        <>
            <Header />

            <div className="p-6 grid grid-cols-3 gap-4">
                {businessDivisions.map((businessDivision, index) => {
                    const { id, name, icon } = businessDivision;

                    return <BusinessCard key={index} idBusiness={id} nameBusiness={name} iconBusiness={icon} />;
                })}
            </div>

            <BottomNav />
        </>
    );
};

export default HomePage;
