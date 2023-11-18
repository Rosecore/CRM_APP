import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppRouter from './router/AppRouter';
const App = () => {
    return (
        <div className='mainapp'>          
                <Navbar/>
                <div className='content-page'>
                    <Sidebar/>
                    <AppRouter />
                </div>

           
        </div>
    );
};

export default App;
