import React from 'react';
import { logoTransparent } from '../assets/brand-logo/index';

const Header = () => {
    return (
        <header className="h-[56px] bg-[#EFF4FF] rounded-b-2xl shadow-md flex justify-between items-center px-8 py-2">
            <img src={logoTransparent} className="h-full" />
            <div className="h-[32px] aspect-square rounded-full bg-[#66ACFF] flex justify-center items-center">
                <i className="fa-solid fa-user text-white"></i>
            </div>
        </header>
    );
};

export default Header
