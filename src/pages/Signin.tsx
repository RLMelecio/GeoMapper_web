//import React from 'react';
import { useNavigate, Link } from "react-router-dom"
import { useState } from "react";
import { db_auth } from "../firebase_config";
import { signInWithEmailAndPassword } from "firebase/auth";

import geoMapperLogo from "../assets/geomapper-blue.png";

export default function SignIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await signInWithEmailAndPassword(db_auth, email, password).then(data => {
            alert("Login Successful");
            navigate('/admin/terms');
        })
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <div className="flex justify-center items-center">
                    <img src={geoMapperLogo} className="h-18" />
                </div>
                <h2 className="text-xl font-bold mb-6 text-center">Admin Login</h2>
                <form onSubmit={handleSignIn}>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="mb-2"></div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Sign In
                        </button>
                        <Link to="/admin/signup" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                            Sign Up
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}