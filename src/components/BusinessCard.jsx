import React from 'react';
import { graphicDesignIcon } from '../assets/icon';

function BusinessCard() {
    return (
        <a href="" className="aspect-square grid place-items-center">
            <div className="flex flex-col items-center gap-1">
                <div className="p-2 w-[56px] aspect-square bg-[#FAE0DD] rounded-2xl">
                    <img src={graphicDesignIcon} alt="" />
                </div>
                <p className="font-medium">SanGrafissss</p>
            </div>
        </a>
    );
}

export default BusinessCard;