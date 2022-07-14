import React from 'react';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center bg-green-100 h-screen">
                <h5 className='text-2xl font-bold py-2'>Your dashboard</h5>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-full bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><a href='/dashboard'>Book</a></li>
                    <li><a href='review'>Review</a></li>
                    <li><a href='orderList'>Order List</a></li>
                    <li><a href='addService'>Add service</a></li>
                    <li><a href='makeAdmin'>Make admin</a></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;