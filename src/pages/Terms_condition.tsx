import React from 'react';
import { Link } from "react-router-dom"
import geoMapperLogo from "../assets/geomapper-blue.png";

export default function TermsCondition() {
    return (
        <div className="flex flex-col p-2 justify-center">
            <div className="flex justify-center items-center">
                <img src={geoMapperLogo} className="h-[7rem]" />
            </div>
            <div className="p-5 m-auto flex flex-col text-center overflow-x-auto w-[75%] shadow-lg">
                <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
                <p className="mb-4 text-lg">
                    Welcome to GeoMapper. By using this website, you agree to the following terms and conditions.
                </p>

                <h2 className="text-3xl font-semibold mb-2">1. Use of the Site</h2>
                <p className="mb-4 text-lg">
                    You are allowed to use the GeoMapper website for educational purposes and personal use only. All content is provided for informational purposes and should not be used for any commercial activity.
                </p>

                <h2 className="text-3xl font-semibold mb-2">2. Privacy</h2>
                <p className="mb-4 text-lg">
                    Your privacy is important to us. We do not collect any personal information without your consent. Any data collected will be used solely for the purpose of improving your experience on our site.
                </p>

                <h2 className="text-3xl font-semibold mb-2">3. Limitation of Liability</h2>
                <p className="mb-4 text-lg">
                    GeoMapper is not responsible for any damages that may arise from the use of this website. We do not guarantee the accuracy or completeness of any information on the site.
                </p>

                <h2 className="text-3xl font-semibold mb-2">4. Changes to Terms</h2>
                <p className="mb-4 text-lg">
                    We may update these terms from time to time. Your continued use of the website constitutes your acceptance of any changes.
                </p>
                <div className="flex justify-center">
                    <Link to="/home" className="p-3 w-[7em] bg-green-500 hover:bg-green-800 hover:text-white transition duration-150 rounded-md font-bold">Proceed</Link>
                </div>
            </div>
        </div>
    );
}