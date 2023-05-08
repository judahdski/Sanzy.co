import { logoTransparent } from './assets/brand-logo/index';
import { graphicDesignIcon } from './assets/icon/index';
import './App.css';

const App = () => {
    return (
        <>
            <div className="h-full relative">
                <header className="h-[56px] bg-[#EFF4FF] rounded-b-2xl shadow-md flex justify-between items-center px-8 py-2">
                    <img src={logoTransparent} className="h-full" />
                    <div className="h-[32px] aspect-square rounded-full bg-[#66ACFF] flex justify-center items-center">
                        <i class="fa-solid fa-user text-white"></i>
                    </div>
                </header>

                <div className="p-8 flex flex-wrap gap-8">
                    <div className="flex flex-col items-center">
                        <div className="p-2 w-[56px] aspect-square bg-[#FAE0DD] rounded-2xl">
                            <img src={graphicDesignIcon} alt="" />
                        </div>
                        <p className='font-medium'>SanGrafis</p>
                    </div>
                </div>

                <nav className="w-[240px] h-[56px] rounded-full border shadow-lg flex absolute bottom-4 left-2/4 -translate-x-1/2">
                    <a href="" className="w-full flex flex-col justify-center items-center gap-1">
                        <i class="fa-solid fa-house"></i>
                        <p className="text-xs">Beranda</p>
                    </a>
                    <a href="" className="w-full flex flex-col justify-center items-center gap-1">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <p className="text-xs">Pesanan</p>
                    </a>
                </nav>
            </div>
        </>
    );
};

export default App;
