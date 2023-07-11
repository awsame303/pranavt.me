import Head from "next/head";
import {useEffect, useRef} from "react";
import * as vara from "vara";

export default function Layout({children, home}) {


    return (
        <div className={'w-full h-full flex flex-col'}>

            <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
            <div>
                {/* Start of Navbar */}
                <nav className="h-14">
                    <div
                        className=" mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
                        <div className="flex items-center">
                            {/* Links on the far left */}
                            <div className="text-blue">
                                <a href="#"
                                   className="text-blue-500 font-extrabold px-3 py-2 rounded-md text-sm">
                                    Projects
                                </a>
                                <a href="#"
                                   className="text-blue-500 font-extrabold px-3 py-2 rounded-md text-sm">
                                    About Me
                                </a>
                            </div>
                        </div>
                        {/* Centered link */}
                        <a href="#" className="text-black text-center pl-4 font-custom text-3xl">
                            Pranav Thota
                        </a>
                        <div className="flex items-center">
                            {/* Links on the far right */}
                            <div className="text-white ">
                                <a href="#"
                                   className="text-blue-500 font-extrabold px-3 py-2 rounded-md text-sm">
                                    Experience
                                </a>
                                <a href="#"
                                   className="text-blue-500 font-extrabold px-3 py-2 rounded-md text-sm">
                                    Contact Me
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* End of Navbar */}

                {children}

                {/* Start of Footer */}
                <footer className="py-4 w-full">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
                        <div className="flex items-center justify-center">
                            <p className="text-gray-600 text-sm">
                                &copy; {new Date().getFullYear()} Pranav T. All rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>
                {/* End of Footer */}
            </div>
        </div>
    )
}

