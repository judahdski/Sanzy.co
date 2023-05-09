import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import UserOrdersPage from './components/UserOrdersPage';
import BusinessDetailPage from './components/BusinessDetailPage';
import OrderFormPage from './components/OrderFormPage';

const App = () => {
    return (
        <>
            <div className="h-full relative">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/orders" element={<UserOrdersPage />} />
                    <Route path='/business_div/:id' element={<BusinessDetailPage />} />
                    <Route path='/order_form' element={<OrderFormPage />} />
                </Routes>
            </div>
        </>
    );
};

export default App;
