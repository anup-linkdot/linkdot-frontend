import React from 'react';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <div className='dashboard-main-div'>
            <p>Dashboard here</p>
        </div>
    )
}

export default Dashboard;