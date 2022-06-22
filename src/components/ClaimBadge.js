import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Badge from "../assets/images/badge-pic.png"
import { setStorage } from '../utils/auth-utils';
import { walletConnect } from '../services/auth.service';
import Metamask from '../assets/images/metamask.png'
import WalletConnect from "../assets/images/walletconnect.png"
import Logo from '../assets/images/logo.png'
import { claimBadge } from '../services/badge.service';
import moment from "moment"


const ClaimBadge = () => {
    const navigate = useNavigate();
    const userReducer = useSelector((state) => state.userReducer);
    const [searchParams, setSearchParams] = useSearchParams();
    const email_data = searchParams.get("email_data")
    const badge_data = searchParams.get("badge_data")
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [badge, setBadgeData] = useState(null)

    useEffect(() => {
        getLinkData()
    }, [])

    const getLinkData = async () => {
        if (email_data && badge_data) {
            const body = {
                email_data: email_data.split(' ').join('+'),
                badge_data: badge_data.split(' ').join('+')
            }
            const response = await claimBadge(body)
            console.log('response -- ', response)
            if (response.status === true) {
                setEmail(response.data.email)
                setUsername(response.data.badge_data.issued_by)
                setBadgeData(response.data.badge_data)
                // alert("Claim successfull")
            }
            else {
                alert("Something wrong with the claim! Please contact support")
            }
        }
    }

    const connectMetaMask = () => {
        if (window.ethereum) {
            // Do something 
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(async (res) => {
                    // Return the address of the wallet and set it on localstorage
                    setStorage('wallet_id', res[0])
                    const body = {
                        wallet_id: res[0],
                        wallet_name: "Metamask"
                    }
                    const response = await walletConnect(body)
                    console.log('response -- ', response)
                    if (response.status === true) {
                        if (response.data.access_token) {
                            setStorage("token", response.data.access_token)
                            setStorage("refresh_token", response.data.refresh_token)
                            setTimeout(() => {
                                navigate('/dashboard')
                            }, 1000);
                        }
                        else
                            navigate('/welcome')
                    }
                    else {
                        alert("install metamask extension!!")
                    }
                })

        } else {
            alert("install metamask extension!!")
        }
    }

    return (
        <div className='claim-badge-div'>
            <div className='badge-data-left'>
                <p className='congrats-text'>Congratulations!!</p>
                <p className='desc-para'>You have received a {badge?.badge_type ? badge.badge_type : ''} badge from {username.user_name} ({badge?.issued_by?.category ? ((badge.issued_by.category).split("_").join(" ")).toUpperCase() : ''}) on {moment(badge?.created_at ? badge.created_at : new Date()).format("DD/MM/YYYY")}. Make sure you claim it before it expires. It's an NTT and will be on your wallet lifelong! </p>
                <div>
                    <img alt='' src={Badge} className="badge-temp" />
                </div>
                <p className='badge-type-text-data'>{badge?.badge_type? badge.badge_type: ''}#{moment(badge?.created_at ? badge.created_at : new Date()).format("MMYYYY")}</p>
            </div>
            <div className='badge-data-right'>
                <p className='badge-text'>This badge was issued to your email by<span className='email-text'>{email}</span>, please connect wallet to claim it.</p>
                <button className='metamask-btn' onClick={() => connectMetaMask()}>
                    <img src={Metamask} className='metamask-img' />
                    <p>Metamask</p>
                </button>
                <p className='or-text'>or</p>
                <button className='metamask-btn' disabled>
                    <img src={WalletConnect} className='metamask-img' />
                    <p>Wallet Connect</p>
                </button>
                <p className='wallet-create-text'>Don't have a wallet? <span>Create one here</span></p>
            </div>
            <div className='linkdot-logo-div'>
                <img alt='' src={Logo} />
            </div>
        </div>
    )
}

export default ClaimBadge;