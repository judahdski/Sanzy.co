import React from 'react';
import { NavLink } from 'react-router-dom';

const BusinessCard = ({ idBusiness, nameBusiness, iconBusiness }) => {
    return (
        <NavLink to={`/business_div/${idBusiness}`} className={'aspect-square grid place-items-center'}>
            <div className="flex flex-col items-center gap-1">
                <div className="p-2 w-[56px] aspect-square bg-[#FAE0DD] rounded-2xl">
                    <img src={iconBusiness} />
                </div>
                <p className="font-medium text-center">{nameBusiness}</p>
            </div>
        </NavLink>
    );
};

export default BusinessCard;
