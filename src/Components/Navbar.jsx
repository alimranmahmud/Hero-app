import { Github } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/apps">Apps</Link></li>
                        <li><Link to="/installation">Installation</Link></li>
                    </ul>
                </div>
                <div className='flex justify-center items-center'>
                    <img className='w-10' src="/logo.png" alt="" />
                    <Link to="/" className="font-bold text-2xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">HERO.IO</Link>

                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/apps">Apps</Link></li>
                    <li><Link to="/installation">Installation</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='https://github.com/alimranmahmud'>
                <div className='flex justify-center items-center 
                bg-gradient-to-r from-[#632EE3] to-[#9F62F2]
                rounded p-2 gap-2
                '>
                    <Github size={32} color="#ffffff" strokeWidth={1.75} />
                    <a className="font-semibold  text-white ">Contribute</a>

                </div>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;