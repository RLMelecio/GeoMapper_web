import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"
import { db_auth, db } from "../firebase_config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

import geoMapperLogo from "../assets/geomapper-blue.png";

export default function SignUp() {
    const navigate = useNavigate();
    const [fname, setFname] = useState<string>('');
    const [mname, setMname] = useState<string>('');
    const [lname, setLname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [conf_password, setConfpassword] = useState<string>('');


    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (password == conf_password) {
                await createUserWithEmailAndPassword(db_auth, email, password).then(data => {
                    alert('Registration Successfull');
                    console.log(data);

                    addDoc(collection(db, 'users'), {
                        firstName: fname,
                        middleName: mname,
                        lastName: lname,
                        email: email,
                        profile_image: '',
                        date_created: serverTimestamp(),
                    })

                    navigate('/admin/signin');
                })
            }else{
                alert('Password and Confirm Password do not match.');
            }
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
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            value={fname}
                            onChange={(e) => setFname(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your first name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="middleName">
                            Middle Name
                        </label>
                        <input
                            type="text"
                            id="middleName"
                            value={mname}
                            onChange={(e) => setMname(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your middle name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            value={lname}
                            onChange={(e) => setLname(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your last name"
                        />
                    </div>
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
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="conf_password"
                            value={conf_password}
                            onChange={(e) => setConfpassword(e.target.value)}
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