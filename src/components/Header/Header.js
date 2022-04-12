import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='h-55 text-3xl text-center font-semibold p-10 bg-slate-900 text-slate-50'>
            <Link to='/' className='mr-10 hover:text-red-800'>Home</Link>
            <Link to="/review" className='mr-10 hover:text-red-800'>Review</Link>
            <Link to="/dashboard" className='mr-10 hover:text-red-800'>Dashboard</Link>
            <Link to="/blogs" className='mr-10 hover:text-red-800'>Blogs</Link>
            <Link to="/About" className='mr-10 hover:text-red-800'>About</Link>
        </nav>
    );
};

export default Header;