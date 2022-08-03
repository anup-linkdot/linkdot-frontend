import React, { useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/dashboard.styles.scss";
import "../../styles/badge.styles.scss";
import BadgeTemp from "../../assets/images/badge-template.png";
import { useDispatch, useSelector } from "react-redux";
import { getBadgeData, updateBadge } from "../../services/badge.service";
import { saveBadge, setBadgeId } from "../../redux/actions/badge";
import Badge from "../Badge";
import { toJpeg } from "html-to-image";

const BadgePreview = () => {
  const navigate = useNavigate();
  const userReducer = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const ref = useRef();

  const updateBadgeMintImage = useCallback(async () => {
    /**
     * This code takes screen shot of the html node of the badge from the DOM,
     * converts into a jpeg/base64 format,
     * Send this image to back-end.
     *
     * If the api call responds with success, reidrect to badge issue page.
     * NOTE: The code will only create a usable image url only if the node is visible in the DOM.
     */
    if (ref.current === null) {
      return;
    }

    const dataUrl = await toJpeg(ref.current, { cacheBust: true });
    const payload = {
      mint_image: dataUrl,
      image_type: "image/jpeg;base64",
      image_name: userReducer.badge.data._id,
    };
    try {
      const response = await updateBadge(userReducer.badge.data._id, payload);
      if (response.status) navigate("badge/issue");
    } catch (error) {}
  }, [ref]);

  useEffect(() => {
    showPreview();
  }, []);

  const showPreview = async () => {
    if (userReducer.badge_id !== null) {
      const response = await getBadgeData(userReducer.badge_id);
      if (response.status === true) {
        dispatch(setBadgeId(null));
        dispatch(saveBadge(response.data));
      } else {
        navigate("/dashboard/badge");
      }
    }
    updateBadgeMintImage();
    console.log("userData -- ", userReducer);
  };

  return (
    <div className="badge-preview-div">
      <p className="preview-text">Preview</p>
      <div className="badge-div badge-preview">
        <div ref={ref}>
          <Badge
            title={userReducer.badge.data.name}
            description={userReducer.badge.data.description}
            image={userReducer.badge.badge_img}
            badge_type={userReducer.badge.badge_type}
            created_at={userReducer.badge.created_at}
          />
        </div>

        {/* <div className='badge-img'>
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
                </div> */}
      </div>

      <div className="issue-btn-div">
        <button
          className="create-badge-btn issue-btn"
          onClick={() => navigate("/dashboard/badge")}
        >
          Issue Later
        </button>
        <button
          className="create-badge-btn issue-btn issue-now"
          onClick={() => updateBadgeMintImage()}
        >
          Issue to user
        </button>
      </div>
    </div>
  );
};

export default BadgePreview;
