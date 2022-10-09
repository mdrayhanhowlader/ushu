import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-orange-500 flex justify-center text-white'>
            <Link className='p-4 hover:bg-pink-400 px-8  mx-4' to='/home'>Home</Link>
            <Link className='p-4 hover:bg-pink-400 px-8  mx-4' to='/added'>Added</Link>
            <Link className='p-4 hover:bg-pink-400 px-8  mx-4' to='/about'>About</Link>
        </div>
    );
};

export default Header;