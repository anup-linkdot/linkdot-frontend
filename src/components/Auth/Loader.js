import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Loader = () => {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/intro/category')
        }, 3000);
    }, [])
    return (
        <div className='intro-community-div loader-div'>
            <div className='intro-left-div loader-left-div'>
                <p className='welcome-text'>Welcome</p>
                <p className='linkdot-text'>to linkDot</p>
            </div>
            <div className='vertical-line'></div>
            <div className='intro-right-div loader-right-div'>
                <p className='create-badge-text'>You can create Badge <br /> to share trust</p>
            </div>
        </div>
    )
}

export default Loader;