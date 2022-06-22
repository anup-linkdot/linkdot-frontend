import React, { useEffect } from 'react';
import { Outlet } from "react-router-dom";
import '../../styles/auth.styles.scss'
import Logo from '../../assets/images/logo.png'

const Login = () => {

    return (
        <div className='login-main-div'>
            <div className='outlet-div'>
                <Outlet />
            </div>
            <div className='linkdot-logo-div'>
                <img alt='' src={Logo} />
            </div>
        </div>
    )
}

export default Login