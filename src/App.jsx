import { logoTransparent } from './assets/brand-logo/index';
import { graphicDesignIcon } from './assets/icon/index';
import './App.css';
import BusinessCard from './components/BusinessCard';
import BottomNav from './components/BottomNav';

const App = () => {
    const number = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <>
            <div className="h-full relative">
                <header className="h-[56px] bg-[#EFF4FF] rounded-b-2xl shadow-md flex justify-between items-center px-8 py-2">
                    <img src={logoTransparent} className="h-full" />
                    <div className="h-[32px] aspect-square rounded-full bg-[#66ACFF] flex justify-center items-center">
                        <i className="fa-solid fa-user text-white"></i>
                    </div>
                </header>

                <div className="p-6 grid grid-cols-4 gap-4">
                    {number.map((num, index) => (
                        <BusinessCard key={index} />
                    ))}
                </div>

                <BottomNav />
            </div>
        </>
    );
};

export default App;
