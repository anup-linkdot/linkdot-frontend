import React, { useState } from 'react';
import Loader from "../../assets/images/loader.gif"
import { useNavigate } from 'react-router-dom';

const Email = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    // const []
    const [next_active, setNextActive] = useState(false)
    const [load, setLoad] = useState(false)

    const getEmail = (value) => {
        setEmail(value)
        if (value.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )) {
            setNextActive(true)
        }
        else {
            console.log('dont tell me')
            setNextActive(false)
        }
    }

    return (
        <div className='intro-community-div loader-div'>
            <div className='intro-left-div loader-left-div'>
                <p className='get-started-text complete-reg-text'>Complete your <br />Registration</p>
                <p className='wallet-connect-text category-select-text'>You Display name is <br />Utopian DIstropia</p>
            </div>
            <div className='vertical-line category-line'></div>
            <div className='intro-right-div loader-right-div'>
                {load === true &&
                    <div className='loader-div'>
                        <img className='loader-gif' src={Loader} />
                    </div>
                }
                <input className='username-input' placeholder='Enter your Email ID' type={'text'}
                    onChange={(e) => getEmail(e.target.value)} />
                <div className={email.length === 0 ? 'not-active-under-text under-text-div' : 'under-text-div'}>
                    {email.length > 0 &&
                        <p className='under-text'>Enter your Email ID</p>
                    }
                    <p className={next_active === false ? 'next-btn' : 'next-btn next-btn-active'}
                        onClick={() => next_active === true && navigate('/dashboard')}>Next</p>
                </div>
            </div>
        </div>
    )
}

export default Email;