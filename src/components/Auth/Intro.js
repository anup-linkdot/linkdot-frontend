import React from 'react';
import Metamask from '../../assets/images/metamask.png'
import WalletConnect from "../../assets/images/walletconnect.png"
import { useNavigate } from 'react-router-dom';

const Intro = () => {
    const navigate = useNavigate();

    return (
        <div className='intro-community-div'>
            <div className='intro-left-div'>
                <p className='get-started-text'>Get Start to Join our<br /> Community</p>
                <p className='signin-text'>Quickly get started by signing in <br />using your existing accounts.</p>
                <p className='wallet-connect-text'>By connecting your wallet, you agree to our<br />
                    <span className='terms-text'>Terms of Service</span> and&nbsp;
                    <span className='policy-text'>Privacy Policy</span>
                </p>
            </div>
            <div className='intro-right-div'>
                <button className='metamask-btn' onClick={() => navigate('/intro/welcome')}>
                    <img src={Metamask} className='metamask-img' />
                    <p>Metamask</p>
                </button>
                <button className='metamask-btn wallet-connect-bbtn'>
                    <img src={WalletConnect} className='metamask-img' />
                    <p>Wallet Connect</p>
                </button>
                <p className='wallet-create-text'>Don't have a wallet? <span>Create one here</span></p>
            </div>
        </div>
    )
}

export default Intro;