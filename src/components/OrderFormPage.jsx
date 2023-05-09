import React from 'react';
import { NavLink } from 'react-router-dom';
import { logoWhite } from '../assets/brand-logo/index';

const OrderFormPage = () => {
    return (
        <div className="bg-white">
            <header className="h-[56px] py-3 flex justify-center items-center gap-1 relative shadow">
                <img src={logoWhite} className="h-full" />
                <p className="text-base font-medium">Grafis</p>
                <NavLink to="/" className={'absolute left-6 p-1'}>
                    <i className="fa-solid fa-xmark"></i>
                </NavLink>
            </header>
            <form action="">
                <div className="p-6 pb-8">
                    <h3 className="font-medium mb-6 sm:text-lg">Data customer</h3>
                    <div className="mb-4 flex flex-col gap-2">
                        <label for="namaLengkap" className="block text-gray-900">
                            Nama Lengkap
                        </label>
                        <input id="namaLengkap" type="text" placeholder="mis. Judah Dasuki" className="w-full border border-[#66ACFF] rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none" />
                    </div>
                    <div className="mb-4 flex flex-col gap-2">
                        <label for="nomorHP" className="block text-gray-900">
                            Nomor HP
                        </label>
                        <input id="nomorHP" type="text" placeholder="mis. 081387306360" className="w-full border border-[#66ACFF] rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none" />
                    </div>
                </div>
                <hr />
                <div className="p-6 pb-8">
                    <h3 className="font-medium mb-6 sm:text-lg">Data Pesanan</h3>
                    <div className="mb-4 flex flex-col gap-2">
                        <label for="jenisJasa" className="block text-gray-900">
                            Jenis Jasa
                        </label>
                        <select id="jenisJasa" className="border bg-white border-[#66ACFF] rounded-lg block w-full px-4 py-3 text-[#AAAAAA] focus:text-black">
                            <option selected>Silahkan pilih jasa</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div className="mb-4 flex flex-col gap-2">
                        <label for="tanggalDeadline" className="block text-gray-900">
                            Nomor HP
                        </label>
                        <input id="tanggalDeadline" type="date" className="w-full border border-[#66ACFF] rounded-lg px-4 py-3 text-sm sm:text-base text-[#AAAAAA] focus:text-black focus:outline-none" />
                    </div>
                    <div className="mb-4 flex flex-col gap-2">
                        <label for="detailPekerjaan" className="block text-gray-900">
                            Detail pekerjaan
                        </label>
                        <textarea
                            id="detailPekerjaan"
                            rows="4"
                            className="w-full border border-[#66ACFF] rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none"
                            placeholder="mis. Tolong buatkan saya logo untuk aplikasi saya, Terimakasih. 🙏🏻"
                        ></textarea>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div>
                            <label for="lampiran" className="block text-gray-900">
                                Lampiran
                            </label>
                            <p className="text-xs sm:text-sm text-[#808080] mt-1.5">Di bawah ini merupakan tempat untuk melampirkan file pendukung seperti contoh output.</p>
                        </div>
                        <div>
                            <input
                                className="block w-full border border-[#66ACFF] rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none"
                                aria-describedby="file_input_help"
                                id="lampiran"
                                type="file"
                                multiple
                                accept=".pdf,.jpg,.jpeg,.png"
                            />
                            <p className="mt-1 text-sm text-gray-400" id="file_input_help">
                                PDF, PNG & JPG.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center pb-8">
                    <button className="text-white flex items-center gap-4 py-3 px-12 bg-[#1BE42F] rounded-lg shadow-sm">
                        <i class="fa-solid fa-cart-plus"></i>
                        <p>PESAN</p>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default OrderFormPage;
