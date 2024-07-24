import { Link } from "react-router-dom"

export default function SNavbar() {
    // const navigate = useNavigate();


    return (
        <div className="bg-[#161E23]">
            <div className="flex justify-between ml-[6.5rem] mr-[2.5rem] h-[3.7rem]">
                <div className="my-3 text-[#77C9E9]">
                    <h1 className="text-[24px] font-semibold">GeoMapper</h1>
                </div>
                <div>
                    <ul className="flex flex-row list-none justify-between w-[15rem] text-white h-[100%]">
                        <div className="px-5 hover:bg-[#0f1317] transition-colors duration-150">
                            <li className="font-bold my-[1.2rem]"><Link to="/signin">Sign In</Link></li>
                        </div>
                        <div className="px-5 hover:bg-[#0f1317] hover:border-red-500 hover:border-b-4 transition-colors duration-150">
                            <li className="font-bold my-[1.2rem]"><Link to="/wip">Sign Up</Link></li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}