import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header>
                <input type="search" name="" id="" />
            </Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;