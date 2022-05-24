import React from 'react';
import { useNavigate } from 'react-router-dom';


const Category = () => {
    const navigate = useNavigate();

    return (
        <div className='intro-community-div loader-div'>
            <div className='intro-left-div loader-left-div'>
                <p className='get-started-text complete-reg-text'>Complete your <br />Registration</p>
                <p className='wallet-connect-text category-select-text'>select your category</p>
            </div>
            <div className='vertical-line category-line'></div>
            <div className='intro-right-div loader-right-div'>
                <button className='metamask-btn creator-btn' onClick={() => navigate('/intro/username')}>
                    <p>Creator</p>
                </button>
                <button className='metamask-btn organiser-btn'>
                    <p>Organiser</p>
                </button>
            </div>
        </div>
    )
}

export default Category;