import Sidebar from '../components/sidebar'
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons';
import geomapper_logo from '../assets/geomapper-blue.png'

export default function Home() {
    return (
        <div className="flex bg-[#fff]">
            <Sidebar />
            <IconContext.Provider value={{ color: '#000000' }}>
                <main className="p-5 w-full flex flex-col space-y-4">
                    <div className="h-[6rem]">
                        <img src={geomapper_logo} className="h-[6rem]"/>
                    </div>
                    <hr className="bg-slate-400 h-[0.1rem] opacity-25"/>
                    <div className="flex flex-row justify-between w-full space-x-5 p-3 h-[10rem]">
                        <div className="px-[1rem] py-[1.46rem] shadow-lg rounded-md my-auto bg-white w-[14em]">
                            <div className="flex items-center justify-between">
                                <FaIcons.FaUsers className="h-9 w-9" />
                                <h2 className="font-bold text-[25px]">Users Online</h2>
                            </div>
                            <p className="font-bold text-[32px]">0</p>
                        </div>
                        <div className="p-4 shadow-lg rounded-md bg-white w-[17em]">
                            <div className="flex items-center space-x-2">
                                <FaIcons.FaUsers className="h-9 w-9"/>
                                <h2 className="font-bold text-[25px]">Users Created <h3 className="font-medium text-[15px]">/week</h3></h2>
                            </div>
                            <p className="font-bold text-[32px]">0</p>
                        </div>
                        <div className="px-[1rem] py-[1.46rem] shadow-lg rounded-md my-auto bg-white w-[14em]">
                            <div className="flex items-center justify-between">
                                <FaIcons.FaUsers className="h-9 w-9" />
                                <h2 className="font-bold text-[25px]">Total Users</h2>
                            </div>
                            <p className="font-bold text-[32px]">0</p>
                        </div>
                    </div>
                </main>
            </IconContext.Provider>
        </div>
    )
}

/**
 *             
 * 
 */