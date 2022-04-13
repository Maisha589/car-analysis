import React from 'react';
import MyLineChart from '../MyLineChart/MyLineChart';
import MyPieChart from '../MyPieChart/MyPieChart';

const DashBoard = () => {
    return (
        <div className='bg-slate-200'>
            <h2 className='text-4xl mb-3 p-5'>You can track our <span className='font-bold text-red-900 '>yearly</span> selling progress here...</h2>
            <div className='ml-20 p-8'>
                <MyLineChart></MyLineChart>
            </div>
            <MyPieChart></MyPieChart>
        </div>
    );
};

export default DashBoard;