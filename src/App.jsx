import { logoTransparent } from './assets/brand-logo/index';
import './App.css';
import BottomNav from './components/BottomNav';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import UserOrdersPage from './components/UserOrdersPage';

const App = () => {
    return (
        <>
            <div className="h-full relative">
                <header className="h-[56px] bg-[#EFF4FF] rounded-b-2xl shadow-md flex justify-between items-center px-8 py-2">
                    <img src={logoTransparent} className="h-full" />
                    <div className="h-[32px] aspect-square rounded-full bg-[#66ACFF] flex justify-center items-center">
                        <i className="fa-solid fa-user text-white"></i>
                    </div>
                </header>

                <div className="p-6">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/orders" element={<UserOrdersPage />} />
                    </Routes>
                </div>

                <BottomNav />
            </div>
        </>
    );
};

export default App;
