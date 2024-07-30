import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"
import { db_auth } from "../firebase_config";
import { createUserWithEmailAndPassword } from "firebase/auth";

import geoMapperLogo from "../assets/geomapper-blue.png";

export default function SignUp() {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(db_auth, email, password).then(data => {
                console.log('Registered Account: ', data);
                console.log('Registration Successfull');
                navigate('/admin/signin');
            })
        } catch (error) {
            console.error('Error signing up credentials: ', error);
        }
        //navigate("/home");
    };

    //PHASE 1: Proceed on processing of registration of email and password.
    //PHASE 2 [Suspend for now]: Add registration process for other necessary credentials such as name, birthdate, address, contact number etc... 

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <div className="flex justify-center items-center">
                    <img src={geoMapperLogo} className="h-18" />
                </div>
                <h2 className="text-2xl font-bold mb-6 text-center">Admin Sign Up</h2>
                <form onSubmit={handleSignUp}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Sign Up
                        </button>
                        <Link to="/admin/signin" className="inline-block align-baseline font-bold text-sm text-slate-500 hover:text-slate-800">
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}