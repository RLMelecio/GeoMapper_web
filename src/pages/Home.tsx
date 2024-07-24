import Sidebar from '../components/sidebar'

export default function Home() {
    return (
        <div className="flex bg-[#fff]">
            <Sidebar/>
            <main className="pl-5 text-black">
                <h1 className="font-bold text-[32px]">Wally Bold ni nga font weight.</h1>
                <h2 className="font-medium text-[21px]">Nalingaw na nuon kog design sa admin panel.</h2>
            </main>
        </div>
    )
}

/**
 *             
 * 
 */