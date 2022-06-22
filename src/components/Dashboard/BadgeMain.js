import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import "../../styles/dashboard.styles.scss";
import "../../styles/badge.styles.scss"
import BadgeTemp from "../../assets/images/badge-template.png"
import BadgeLoad from "../../assets/images/badge-load.gif"
import { showAllBadge } from '../../services/badge.service';
import { useDispatch, useSelector } from 'react-redux';
import moment from "moment"
import { setBadgeId } from '../../redux/actions/badge';

const BadgeMain = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [active_tab, setActiveTab] = useState("issued")
    const [badges, setBadges] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getBadge()
    }, [active_tab])

    const changeTab = async (tab) => {
        setLoading(true)
        setActiveTab(tab)
        const response = await showAllBadge(tab)
        if (response.status === true) {
            setBadges(response.data)
            setLoading(false)
        }
        else {
            alert("Something went wrong. Try again!")
        }
    }

    const getBadge = async () => {
        const response = await showAllBadge(active_tab)
        if (response.status === true) {
            setBadges(response.data)
        }
        else {
            alert("Something went wrong. Try again!")
        }
    }

    const issueUser = (badge) => {
        dispatch(setBadgeId(badge._id))
        navigate('/badge/preview')
    }

    return (
        <div className='badge-main-div'>
            <div className='badge-navbar'>
                <div className='badge-section'>
                    <div className={active_tab === "issued" ? 'badge-tab badge-tab-active' : 'badge-tab'} onClick={() => changeTab('issued')}>
                        <p>Issued Badge</p>
                    </div>
                    <div className={active_tab === "claimed" ? 'badge-tab badge-tab-active' : 'badge-tab'} onClick={() => changeTab('claimed')}>
                        <p>Claimed Badge</p>
                    </div>
                </div>
                <select placeholder='Sort by' className='select-option'>
                    <option disabled>Sort by</option>
                </select>
            </div>
            {loading === false ?
                <div className='badges-section'>
                    {badges.length > 0 ?
                        <React.Fragment>
                            {badges.map((badge, index) => {
                                return (
                                    <React.Fragment key={badge._id}>
                                        {active_tab === "issued" ? (
                                            <div className='badge-div' key={badge._id}>
                                                <div className='badge-img'>
                                                    <img alt='' src={badge.image} />
                                                    <p className='badge-id'>ID No-{badge._id.substring(9, 16)}</p>
                                                    <p className='badge-type'>Badge Type#{moment(badge.created_at).format("MMYYYY")}</p>
                                                </div>
                                                <div className='badge-desc'>
                                                    <table>
                                                        <tr className='badge-data'>
                                                            <td className=''>Badage Name</td>
                                                            <td className='dot-badge'>:</td>
                                                            <td className='badge-value'>{badge.name}</td>
                                                        </tr>
                                                        <tr className='badge-data'>
                                                            <td className=''>Badage Description</td>
                                                            <td>:</td>
                                                            <td className='badge-value'>{badge.description} </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                                <div className='badge-btn-row'>
                                                    <button className='badge-btn'>Insight</button>
                                                    <button className='badge-btn issue-btn' onClick={() => issueUser(badge)}>Issue to User</button>
                                                </div>
                                            </div>
                                        ) :
                                            (
                                                <div className='badge-div'>
                                                    <div className='badge-img'>
                                                        <img alt='' src={badge?.badge_id.image} />
                                                        <p className='badge-id'>ID No-{badge?.badge_id._id.substring(9, 16)}</p>
                                                        <p className='badge-type'>Badge Type#{moment(badge?.badge_id.created_at).format("MMYYYY")}</p>
                                                    </div>
                                                    <div className='badge-desc'>
                                                        <table>
                                                            <tr className='badge-data'>
                                                                <td className=''>Badage Name</td>
                                                                <td className='dot-badge'>:</td>
                                                                <td className='badge-value'>{badge?.badge_id.name}</td>
                                                            </tr>
                                                            <tr className='badge-data'>
                                                                <td className=''>Badage Description</td>
                                                                <td>:</td>
                                                                <td className='badge-value'>{badge?.badge_id.description} </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    {/* <div className='badge-btn-row'>
                                                        <button className='badge-btn'>Insight</button>
                                                        <button className='badge-btn issue-btn'>Issue to User</button>
                                                    </div> */}
                                                </div>
                                            )
                                        }
                                    </React.Fragment>
                                )
                            })

                            }
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <p>No badge</p>
                        </React.Fragment>
                    }
                </div>
                : (
                    <div className='badges-section loading-badge-section'>
                        <img alt='' src={BadgeLoad} />
                    </div>
                )
            }
        </div>
    )
}

export default BadgeMain;