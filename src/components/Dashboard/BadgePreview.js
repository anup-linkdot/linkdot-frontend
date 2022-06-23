import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import "../../styles/dashboard.styles.scss"
import "../../styles/badge.styles.scss"
import BadgeTemp from "../../assets/images/badge-template.png"
import { useDispatch, useSelector } from 'react-redux';
import { getBadgeData } from '../../services/badge.service';
import { saveBadge, setBadgeId } from '../../redux/actions/badge';
import moment from "moment"

const BadgePreview = () => {
    const navigate = useNavigate();
    const userReducer = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        showPreview()
    }, [])

    const showPreview = async () => {
        if (userReducer.badge_id !== null) {
            const response = await getBadgeData(userReducer.badge_id)
            if (response.status === true) {
                dispatch(setBadgeId(null))
                dispatch(saveBadge(response.data))
            }
            else {
                navigate('/dashboard/badge')
            }
        }

        console.log('userData -- ', userReducer)
    }

    return (
        <div className='badge-preview-div'>
            <p className='preview-text'>Preview</p>
            <div className='badge-div badge-preview'>
                <div className='badge-img'>
                    <img alt='' src={userReducer.badge?.badge_img} />
                    <p className='badge-id'>ID No-{userReducer.badge?.data?._id.substring(19, 24)}</p>
                    <p className='badge-type'>Badge Type#{moment(userReducer.badge?.data?.created_at).format("MMYYYY")}</p>
                </div>
                <div className='badge-desc'>
                    <table>
                        <tr className='badge-data'>
                            <td className=''>Badage Name</td>
                            <td className='dot-badge'>:</td>
                            <td className='badge-value'>{userReducer.badge?.data?.name}</td>
                        </tr>
                        <tr className='badge-data'>
                            <td className=''>Badage Description</td>
                            <td>:</td>
                            <td className='badge-value'>{userReducer.badge?.data?.description}</td>
                        </tr>
                    </table>
                </div>
            </div>

            <div className='issue-btn-div'>
                <button className='create-badge-btn issue-btn' onClick={() => navigate('/dashboard/badge')}>Issue Later</button>
                <button className='create-badge-btn issue-btn issue-now' onClick={() => navigate('/badge/issue')}>Issue to user</button>
            </div>
        </div>
    )
}

export default BadgePreview;