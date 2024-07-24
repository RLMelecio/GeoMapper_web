import SNavbar from "../components/start_navbar"


export default function Welcome() {
    return (
        <div>
            <SNavbar />
            <div className="h-[33rem] relative flex items-center justify-center filtered-bg">
                <div className="flex flex-col items-center space-y-[2rem]">
                    <h1 className="text-white mx-[9rem] lg:text-[42px] md:text-[32px] sm:text-[19px] font-bold text-center">GeoMapper: A Geospatial Marine Population Monitoring Application</h1>
                    <button className="bg-[#1D8AD7] text-white rounded-[7px] lg:w-[28rem] md:w-[20rem] sm:w-[12rem] lg:p-3 md:p-2 sm:p-1 font-bold text-[32px] md:text-[22px] sm:text-[12px]">
                        MORE ABOUT GeoMapper
                    </button>
                </div>
            </div>
            <div className="h-[20rem] bg-[#0f1a2b]">
                <h1 className="font-bold text-[32px]">Features</h1>
                <h2>Geospatial Analysis</h2>
                <p></p>
            </div>
        </div>
    )
}