import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from "react-router-dom";

const R = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Navbar>

            </Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default R;