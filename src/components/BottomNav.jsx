import React from 'react';
import { NavLink } from 'react-router-dom';

const BottomNav = () => {
    return (
        <nav className="w-[240px] h-[56px] rounded-full overflow-hidden border shadow-lg flex absolute bottom-4 left-2/4 -translate-x-1/2">
            <NavLink to="/" className={'w-full flex flex-col justify-center items-center gap-1'}>
                {({ isActive }) => (
                    <>
                        <i className={`fa-solid fa-house ${isActive ? 'text-[#66ACFF]' : 'text-[#BDBDBD]'}`}></i>
                        <p className={`text-xs ${isActive ? 'font-medium text-[#494949]' : 'text-[#7a7a7a]'}`}>Beranda</p>
                    </>
                )}
            </NavLink>

            <NavLink to="" className={'w-full flex flex-col justify-center items-center gap-1'}>
                {({ isActive }) => (
                    <>
                        <i className={`fa-solid fa-cart-shopping ${isActive ? 'text-[#66ACFF]' : 'text-[#BDBDBD]'}`}></i>
                        <p className={`text-xs ${isActive ? 'font-medium text-[#494949]' : 'text-[#7a7a7a]'}`}>Pesanan</p>
                    </>
                )}
            </NavLink>
        </nav>
    );
};

export default BottomNav;
