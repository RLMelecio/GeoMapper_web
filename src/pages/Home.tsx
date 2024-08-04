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
                        <img src={geomapper_logo} className="h-[6rem]" />
                    </div>
                    <hr className="bg-slate-400 h-[0.1rem] opacity-25" />
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
                                <FaIcons.FaUsers className="h-9 w-9" />
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
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white shadow-md rounded border">
                            <thead>
                                <tr className="bg-[#18309c] text-white uppercase text-sm leading-normal border border-gray-700">
                                    <th className="py-3 px-6 text-left font-medium border-r border-gray-700">Name</th>
                                    <th className="py-3 px-6 text-left font-medium border-r border-gray-700">Role</th>
                                    <th className="py-3 px-6 text-left font-medium border-r border-gray-700">Status</th>
                                    <th className="py-3 px-6 text-left font-medium">Last Signed-In</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm font-light">
                                <tr className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left whitespace-nowrap border-r border-gray-200">
                                        <span className="font-medium">John Doe</span>
                                    </td>
                                    <td className="py-3 px-6 text-left border-r border-gray-200">
                                        <span>Administrator</span>
                                    </td>
                                    <td className="py-3 px-6 text-left">
                                        <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Active</span>
                                    </td>
                                    <td className="py-3 px-6 text-left whitespace-nowrap border-l border-gray-200">
                                        <span className="font-medium">2024-08-02</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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