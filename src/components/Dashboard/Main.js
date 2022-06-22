import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import "../../styles/dashboard.styles.scss"

const Main = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState("Dashboard")

    return (
        <div className='main-dashboard-div'>
              <div className='main-row'>
                <div className='button-left-main'>
                    <button className={active === 'Dashboard' ? 'metamask-btn creator-btn create-badge-btn-navbar dashboard-btn active-main-btn' : 'metamask-btn creator-btn create-badge-btn-navbar dashboard-btn'}
                        onClick={() => { setActive("Dashboard"); navigate('/dashboard/nobadge') }}>
                        <p>Dashboard</p>
                    </button>
                    <button className={active === 'Insights' ? 'metamask-btn creator-btn create-badge-btn-navbar dashboard-btn active-main-btn' : 'metamask-btn creator-btn create-badge-btn-navbar dashboard-btn'}
                        onClick={() => { setActive("Insights"); navigate('/insights') }}>
                        <p>Badge Insight</p>
                    </button>
                </div>
                <div className='main-section-div'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Main;