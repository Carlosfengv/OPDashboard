import React from 'react';
import MainDashboard from './MainDashboard';
import SideCard from './SideCard'

const Dashboard = () => (
    <div className="content TitleCard">
        <MainDashboard></MainDashboard>
        <SideCard></SideCard>
    </div>
);

export default Dashboard;