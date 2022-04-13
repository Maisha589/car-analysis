import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';



const MyLineChart = () => {
    const data = [
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "targeted-sell": 500
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "targeted-sell": 500
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 200,
            "targeted-sell": 500
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 700,
            "targeted-sell": 500
        },
        {
            "month": "sep",
            "investment": 700000,
            "sell": 500,
            "targeted-sell": 500
        },
        {
            "month": "Oct",
            "investment": 700000,
            "sell": 670,
            "targeted-sell": 500
        },
        {
            "month": "Nov",
            "investment": 700000,
            "sell": 680,
            "targeted-sell": 500
        },
        {
            "month": "Dec",
            "investment": 700000,
            "sell": 690,
            "targeted-sell": 500
        },
        {
            "month": "jan",
            "investment": 100000,
            "sell": 300,
            "targeted-sell": 600
        },
        {
            "month": "feb",
            "investment": 100000,
            "sell": 450,
            "targeted-sell": 600
        },
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 651,
            "targeted-sell": 600
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 700,
            "targeted-sell": 600
        }

    ];

    return (
        <LineChart width={800} height={600} data={data}>
            <Line dataKey={"sell"} stroke="green" activeDot={{ r: 8 }}></Line>
            <CartesianGrid strokeDasharray="3 3" />
            <Line dataKey={"targeted-sell"} stroke="red"></Line>
            <XAxis dataKey={"month"}></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Legend></Legend>
        </LineChart>
    );
};

export default MyLineChart;