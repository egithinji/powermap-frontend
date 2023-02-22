import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LineGraph from "./LineGraph";
import PieChart from './PieChart';
import { fetchTotalComplaintsPerDay, fetchTotalComplaintsPerArea } from './dashboardSlice';

function DashBoard() {
    const dispatch = useDispatch();
    const { statusPerDay, statusPerArea, totalComplaintsPerDay, totalComplaintsPerArea, error } = useSelector((state) => state.dashboard);

    useEffect(() => {
        dispatch(fetchTotalComplaintsPerDay());
        dispatch(fetchTotalComplaintsPerArea());
    }, [dispatch]);

    const dates = totalComplaintsPerDay.map((object) => object.date);
    const complaintsPerDay = totalComplaintsPerDay.map((object) => object.complaints);
    const lineGraphData = {
        labels: dates,
        datasets: [{
            label: '',
            data: complaintsPerDay,
        }]
    };

    const areas =  totalComplaintsPerArea.map((object) => object.area);
    const complaintsPerArea = totalComplaintsPerArea.map((object) => object.complaints);
    const colors = totalComplaintsPerArea.map((object) => object.color);
    const pieChartData = {
        labels: areas,
        datasets: [{
            data: complaintsPerArea,
            backgroundColor: colors
        }]
    };

    return (
        <div className="w-screen h-screen flex gap-4 md:gap-1 flex-col md:flex-row items-start pt-10">
            <div className='w-full h-full md:w-1/2 md:h-1/2 flex justify-center'>
                <LineGraph data={lineGraphData}/>
            </div>
            <div className='w-full h-full md:w-1/2 md:h-1/2 flex justify-center'>
                {/* <PieChart data={pieChartData} /> */}
            </div>
        </div>
    )
}

export default DashBoard;