import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Theme from './context/Theme';
import injectContext from './store/AppContext';
import Users from './pages/Users';
import Menu from './components/Menu';

const App = () => {
    return (
        <Theme>
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path='/users' element={<Users />} />
                    <Route path='/' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </Theme>
    )
}

export default injectContext(App);