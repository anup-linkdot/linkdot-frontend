import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import "../../styles/dashboard.styles.scss"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Cross from '../../assets/images/x.png'
import Loader from "../../assets/images/loader.png"
import { useDispatch, useSelector } from 'react-redux';
import { getBase64Img } from '../../utils/badge-utils';
import { createBadge } from '../../services/badge.service';
import { setBadgeId } from '../../redux/actions/badge';

const CreateBadge = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loader, setLoader] = useState(false)
    const [startDate, setStartDate] = useState(null)
    const [inputFile, setInputFile] = useState(null)
    const [base64Image, setBase64Img] = useState(null)
    const [badge_name, setBadgeName] = useState(null)
    const [badge_name_error, setBadgeNameError] = useState(false)
    const [badge_description, setBadgeDescription] = useState(null)
    const [badge_desc_error, setBadgeDescriptionError] = useState(false)
    const [badge_type, setBadgeType] = useState(null)
    const [badge_type_error, setBadgeTypeError] = useState(false)
    const [badge_img_error, setBadgeImageError] = useState(false)
    const [badge_date_error, setBadgeDateError] = useState(false)

    const clickInput = () => {
        document.getElementById('getFile').click()
    }

    const getInputFile = async (file) => {
        console.log(file)
        const base64Image = await getBase64Img(file[0])
        setInputFile(file[0].name)
        setBase64Img(base64Image)
    }

    const createBadgeClick = async () => {
        setLoader(true)
        setBadgeDescriptionError(false);
        setBadgeImageError(false)
        setBadgeTypeError(false)
        setBadgeNameError(false)
        setBadgeDateError(false)
        if (badge_name === null)
            setBadgeNameError(true)
        if (badge_description === null)
            setBadgeDescriptionError(true)
        console.log(badge_name_error, badge_description, badge_desc_error, startDate, badge_type, badge_type_error, badge_name)
        if (badge_name_error === false && badge_desc_error === false && startDate !== null && badge_type !== null && badge_name !== null && badge_description !== null) {
            const body = {
                name: badge_name,
                badge_type,
                description: badge_description,
                image: base64Image,
                // the below ones are needed just for checking in backend. Please add it to every image upload
                image_name: "badge",
                type: "image/jpeg;base64"
            }
            const response = await createBadge(body)
            console.log('response -- ', response)
            if (response.status === true) {
                dispatch(setBadgeId(response.data.badge_id))
                setLoader(false)
                navigate('/badge/preview')
            }
            else {
                alert("Something went wrong. Try again!")
            }
        } else {
            if (badge_type === null) {
                setBadgeTypeError(true)
            }
            if (base64Image === null) {
                setBadgeImageError(true)
            }
            if (startDate === null) {
                setBadgeDateError(true)
            }
            //  alert("please add every mandatory field")
        }
    }

    const checkBadgeName = (value) => {
        if (value.length > 3) {
            setBadgeNameError(false)
            setBadgeName(value)
        }
        else
            setBadgeNameError(true)
    }

    const checkBadgeDescription = (value) => {
        if (value.length > 5) {
            setBadgeDescriptionError(false)
            setBadgeDescription(value)
        }
        else
            setBadgeDescriptionError(true)
    }

    const getBadgeType = (value) => {
        console.log(value)
        setBadgeType(value)
    }

    return (
        <div className='create-badge-div'>
            <div className='create-badge-first-row'>
                <p className='create-badge-text'>Create Badge</p>
                <p className='x-btn' onClick={() => navigate('/dashboard')}>X</p>
            </div>
            <div className='input-row'>
                <select className='badge-type-select' onChange={(e) => getBadgeType(e.target.value)}>
                    <option className='badge-option' value="" disabled selected>Select Badge Type</option>
                    <option className='badge-option' value="Social Media">Social Media</option>
                    <option className='badge-option' value="Volunteer">Volunteer</option>
                    <option className='badge-option' value="Founding Team">Founding Team</option>
                    <option className='badge-option' value="Design">Design</option>
                    <option className='badge-option' value="Bounty">Bounty</option>
                    <option className='badge-option' value="Partner">Partner</option>
                    <option className='badge-option' value="Community">Community</option>
                    <option className='badge-option' value="Marketing">Marketing</option>
                    <option className='badge-option' value="Sales">Sales</option>
                    <option className='badge-option' value="Artist">Artist</option>
                    <option className='badge-option' value="Speaker">Speaker</option>
                    <option className='badge-option' value="Developer">Developer</option>
                </select>
                {badge_type_error == true &&
                    <img alt='' className='cross-mark' src={Cross} />
                }
            </div>
            <div className='input-row'>
                <input className='badge-input' placeholder='Enter Badge Name' onChange={(e) => checkBadgeName(e.target.value)} />
                {badge_name_error === true &&
                    <img alt='' className='cross-mark' src={Cross} />
                }
            </div>
            <div className='input-row'>
                <textarea className='badge-description' placeholder='Enter Badge Description*' onChange={(e) => checkBadgeDescription(e.target.value)}>
                </textarea>
                {badge_desc_error === true &&
                    <img alt='' className='cross-mark' src={Cross} />
                }
            </div>
            <p className='words-count'>20 words</p>
            <div className='input-row'>
                <DatePicker className='badge-date' placeholderText='Month and Year of Badge issuing*' selected={startDate} onChange={(date) => setStartDate(date)} />
                {badge_date_error === true &&
                    <img alt='' className='cross-mark' src={Cross} />
                }
            </div>
            <button className='badge-input badge-input-file' onClick={() => clickInput()}><p>{inputFile ? inputFile : 'Upload Badge Image'}</p></button>
            <input type='file' id="getFile" onChange={(e) => getInputFile(e.target.files)} />
            {loader === false ?
                <button className='create-badge-btn' onClick={() => createBadgeClick()}>Create and Preview</button>
                :
                <button className='create-badge-btn' onClick={() => createBadgeClick()}>
                    <img alt='' src={Loader} className='loader-img' />
                </button>
            }
        </div>
    )
}

export default CreateBadge;