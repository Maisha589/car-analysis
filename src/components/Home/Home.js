import React from 'react';
import img from './red-mini-coupe-driving-highway.jpg';

const Home = () => {
    return (
        <div className='grid grid-cols-2 mt-0 p-10 '>
            <div >
                <h2 className='text-5xl m-4 p-3 font-semibold'>Welcome to my <span className='text-6xl font-bold text-red-900'>Car Zone</span></h2>
                <p className='text-2xl m-3'>Red beast is waiting for you. Automobile factory where you can find your desire vehicle. A car which leads you to a bright future.Make your journey comfortable and easy with us.</p>
                <button className='mt-10 py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none  focus:ring-2 focus:ring-red-400 focus:ring-opacity-75'>Live view</button>
            </div>
            <div className='border-8 border-r-0 border-red-200'>
                <img className='h-80 m-10 align-center' src={img} alt="" />
            </div>
        </div>
    );
};

export default Home;