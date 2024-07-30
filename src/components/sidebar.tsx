import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fishlogo from '../assets/fish_logo2.png';
import aquaticbackground from '../assets/BK_FISH3v2.png';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons';



export default function Sidebar() {

    //FRONT-END FUNCTIONS
    const [sidebar, isSidebarOpen] = useState(true);
    const navigate = useNavigate();

    function toggleSidebar() {
        isSidebarOpen(!sidebar);
    }

    function SignOut() {
        //PARTIAL
        navigate('/');
    }

    return (
        <aside className="h-screen flex">
            <IconContext.Provider value={{ color: '#fff' }}>
                <nav className={sidebar ? 'sidebar_menu active' : 'sidebar_menu'}>
                    <div className={sidebar ? 'px-3 flex justify-end' : 'hidden'}>
                        <FaIcons.FaBars className="h-11 mt-2" onClick={toggleSidebar} />
                    </div>
                    <div className={sidebar ? 'sidebar active' : 'sidebar'}>
                        <div className="flex flex-col space-y-5 p-4 pl-2 pb-2 pt-[0.8em]" style={{ backgroundImage: `url(${aquaticbackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className="px-3 flex justify-end">
                                <FaIcons.FaBars className="h-9" onClick={toggleSidebar} />
                            </div>
                            <div className="flex flex-col space-y-3 items-center">
                                <img src={fishlogo} className="h-[5em]" />
                                <h1 className="text-[#77C9E9] text-2xl font-bold">GeoMapper</h1>
                            </div>
                        </div>
                        <div className="flex-grow flex flex-col justify-between">
                            <ul className="mt-4 px-1 space-y-5 font-medium text-white">
                                <li className="rounded-sm p-4 flex border-[#181818] border-b-[1px] hover:bg-[#0f1d30] hover:border-[#fff] transition duration-150">
                                    <FaIcons.FaTachometerAlt className="mt-1" />
                                    <h2 className="ml-5">Dashboard</h2>
                                </li>
                                <li className="rounded-sm p-4 flex border-[#181818] border-b-[1px] hover:bg-[#0f1d30] hover:border-[#fff] transition duration-150">
                                    <FaIcons.FaUser className="mt-1" />
                                    <h2 className="ml-5">Admin Settings</h2>
                                </li>
                                <li className="rounded-sm p-4 flex border-[#181818] border-b-[1px] hover:bg-[#0f1d30] hover:border-[#fff] transition duration-150">
                                    <FaIcons.FaEllipsisH className="mt-1" />
                                    <h2 className="ml-5">Panel 3</h2>
                                </li>
                                <li className="rounded-sm p-3 flex border-[#181818] border-b-[1px] hover:bg-[#0f1d30] hover:border-[#fff] transition duration-150">
                                    <FaIcons.FaEllipsisH className="mt-1" />
                                    <h2 className="ml-5">Panel 4</h2>
                                </li>
                            </ul>
                            <div className="border-[#6f6f6f] border-t-[1px] p-4">
                                <button onClick={SignOut} className="w-full py-2 bg-[#1f45bf] text-white font-bold rounded hover:bg-[#122667] transition duration-200">
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </IconContext.Provider>
        </aside>
    )
}