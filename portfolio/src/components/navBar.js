import React from "react";
import {NavLink} from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
    return (
        <header className="bg-blue-500">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to= "/" 
                        exact 
                        activeClassName="text-white"
                        className="inflex-flex items-center py-6 px-3 mr-4 text-white hover:text-white text-4xl font-bold wacky tracking-widest">
                        Will Huang
                    </NavLink>

                    <NavLink to="/project"
                        activeClassName="text-white bg-blue-700"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-black cursive hover:text-white">
                        Projects
                    </NavLink>

                    <NavLink to="/resume"
                        activeClassName="text-white bg-blue-700"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-black cursive hover:text-white">
                        Resume
                    </NavLink>

                    <NavLink to="/about"
                        activeClassName="text-white bg-blue-700"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-black cursive hover:text-white">
                        About Me!
                    </NavLink>
                </nav>
                <div>
                    <SocialIcon url="http://linkedin.com/in/will-huang123" className="inline-flex items-center py-3 px-3 my-6 mr-4 rounded  hover:text-white" style={{height:50, width:50}} target="_blank" fgColor="#fff"/>
                    <SocialIcon url="http://github.com/w69huang" className="inline-flex items-center py-3 px-3 my-6 mr-4 rounded  hover:text-white" style={{height:50, width:50}} target="_blank" fgColor="#fff"/>

                </div>
            </div>
        </header>
    )
}