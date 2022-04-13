import React from 'react';
import { Cell, Pie, PieChart, Tooltip } from 'recharts';

const MyPieChart = () => {
    const data = [
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
            "investment": 300000,
            "sell": 450,
            "targeted-sell": 600
        },
        {
            "month": "Mar",
            "investment": 200000,
            "sell": 651,
            "targeted-sell": 600
        },
        {
            "month": "Apr",
            "investment": 400000,
            "sell": 700,
            "targeted-sell": 600
        }

    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', "orange"];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <PieChart className='mt-0 ml-20 mr-20' width={500} height={500}>
            <Pie
                data={data}
                cx={"50%"}
                cy={"50%"}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={100}
                fill="#8884d8"
                dataKey={"investment"}
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip></Tooltip>
        </PieChart >
    );
};

export default MyPieChart;