import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { logoWhite } from '../assets/brand-logo/index';
import { businessDivisions } from '../data';

function BusinessDetailPage() {
    const { id } = useParams();

    const selectedBusinessDiv = businessDivisions.filter((businessDivision) => businessDivision.id === id)[0];

    return (
        <div className='bg-white'>
            <header className="h-[56px] py-3 flex justify-center items-center gap-1 relative">
                <img src={logoWhite} className="h-full" />
                <p className="text-base font-medium">{selectedBusinessDiv.name}</p>
                <NavLink to="/" className={'absolute left-6 p-1'}>
                    <i class="fa-solid fa-xmark"></i>
                </NavLink>
            </header>
            <div className="py-6 px-8">
                <div className="w-full aspect-square bg-slate-200 grid place-items-center rounded-lg">POSTER</div>
                <div className="w-full grid place-items-center my-8">
                    <NavLink to='/order_form' className={"bg-[#1BE42F] hover:bg-[#14dc28] flex items-center gap-4 px-6 py-3 text-white rounded-lg"}>
                        <i class="fa-solid fa-cart-plus"></i>
                        <p>PESAN DI SINI</p>
                    </NavLink>
                </div>
                <hr className='mb-6' />
                <div>
                    <p className='font-semibold mb-1'>Portfolio</p>
                    <p className='text-xs md:text-sm text-[#808080]'>Berikut ini di bawah merupakan contoh pekerjaan yang pernah dikerjakan. Bisa diperhatikan dan dijadikan bahan pertimbangan.</p>
                </div>
            </div>
        </div>
    );
}

export default BusinessDetailPage;
