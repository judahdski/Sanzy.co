import React from 'react';

function BottomNav() {
    return (
        <nav className="w-[240px] h-[56px] rounded-full border shadow-lg flex absolute bottom-4 left-2/4 -translate-x-1/2">
            <a href="" className="w-full flex flex-col justify-center items-center gap-1">
                <i className="fa-solid fa-house"></i>
                <p className="text-xs">Beranda</p>
            </a>
            <a href="" className="w-full flex flex-col justify-center items-center gap-1">
                <i className="fa-solid fa-cart-shopping"></i>
                <p className="text-xs">Pesanan</p>
            </a>
        </nav>
    );
}

export default BottomNav;
