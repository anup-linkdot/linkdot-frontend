import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from "../../assets/images/loader.gif"

const Username = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [next_active, setNextActive] = useState(false)
    const [load, setLoad] = useState(false)

    const getUsername = (name) => {
        setUsername(name)
        setNextActive(false)
        console.log(username)
        if (name.length > 3)
            setNextActive(true)
    }

    return (
        <div className='intro-community-div loader-div'>
            <div className='intro-left-div loader-left-div'>
                <p className='get-started-text complete-reg-text'>Complete your <br />Registration</p>
                <p className='wallet-connect-text category-select-text'>Selected yourself as an <br /> Organiser</p>
            </div>
            <div className='vertical-line category-line'></div>
            <div className='intro-right-div loader-right-div'>
                {load === true &&
                    <div className='loader-div'>
                        <img className='loader-gif' src={Loader} />
                    </div>
                }
                <input className='username-input' placeholder='Enter your username' type={'text'}
                    onChange={(e) => getUsername(username.length > 0 ? e.target.value.substring(1, e.target.value.length) : e.target.value)}
                    value={username.length === 0 ? username : `@${username}`} />
                <div className={username.length === 0 ? 'not-active-under-text under-text-div' : 'under-text-div'}>
                    {username.length > 0 &&
                        <p className='under-text'>Enter your username</p>
                    }
                    <p className={next_active === false ? 'next-btn' : 'next-btn next-btn-active'} onClick={() => next_active === true && navigate('/intro/email')}>Next</p>
                </div>
            </div>
        </div>
    )
}

export default Username;