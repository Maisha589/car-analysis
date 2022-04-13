import React from 'react';
import MyLineChart from '../MyLineChart/MyLineChart';
import MyPieChart from '../MyPieChart/MyPieChart';

const DashBoard = () => {
    return (
        <div className='bg-slate-200'>
            <h2 className='text-4xl mb-3 p-5'>You can track our <span className='font-bold text-red-900 '>yearly</span> selling progress here.</h2>
            <div className='ml-20 p-8'>
                <MyLineChart></MyLineChart>
            </div >
            <h2 className='text-4xl mb-3 mt-3 p-2'>You also can track our last five <span className='font-bold text-red-900 '>months</span> investment ratio.</h2>
            <div className='flex'>
                <div className='m-10'>
                    <p className='text-2xl text-blue-500'>Blue: Dec-2021</p>
                    <p className='text-2xl text-green-500 '>Green: Jan-2022</p>
                    <p className='text-2xl text-yellow-500'>Yellow: Feb-2022</p>
                    <p className='text-2xl text-red-400'>Red: March-2022</p>
                    <p className='text-2xl text-orange-600'>Orange: April-2022</p>
                </div>
                <div >
                    <MyPieChart></MyPieChart>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;