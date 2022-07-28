import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "../../styles/dashboard.styles.scss";
import "../../styles/badge.styles.scss";
import BadgeTemp from "../../assets/images/badge-template.png";
import Info from "../../assets/images/info.png";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import Papa from "papaparse";
import { issueBadge } from "../../services/badge.service";
import Loader from "../../assets/images/loader.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const IssueBadge = () => {
  const navigate = useNavigate();
  const userReducer = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [show_hover, setShowHover] = useState(false);
  const [csv_upload, setUploadCSV] = useState(false);
  const [emails, setEmails] = useState("");
  const [loader, setLoader] = useState(false);

  const clickInput = () => {
    document.getElementById("getFile").click();
  };

  const getCSVFile = (file) => {
    if (!file) alert("Please upload a csv file");
    setUploadCSV(true);
    // Initialize a reader which allows user
    // to read any file or blob.
    const reader = new FileReader();
    let email_array = [];
    // Event listener on reader when the file
    // loads, we parse it and set the data.
    reader.onload = async ({ target }) => {
      const csv = Papa.parse(target.result, { header: true });
      const parsedData = csv?.data;
      const columns = Object.keys(parsedData[0]);
      parsedData.map((data) => {
        email_array.push(data[columns[0]]);
      });
      console.log("email_array -- ", email_array);
      setEmails(email_array.join(","));
    };
    reader.readAsText(file);
  };

  const shareBadge = async () => {
    setLoader(true);
    const body = {
      emails: emails.split(","),
      badge_id: userReducer.badge?.data?._id,
      upload_mode: csv_upload === true ? "CSV" : "Email",
    };
    const response = await issueBadge(body);
    console.log("response -- ", response);
    if (response.status === true) {
      toast.success("Success! Badge Issued");
      setTimeout(() => {
        setLoader(false);
        alert("badge issued successfully");
      }, 2000);
    } else {
      alert("Something went wrong. Try again!");
    }
  };

  return (
    <div className="issue-badge-div" style={{ fontFamily: "Poppins" }}>
      <div className="issue-badge-row">
        <div className="badge-div badge-preview">
          <div className="badge-img">
            <img alt="" src={userReducer.badge?.badge_img} />
            <p className="badge-id">
              ID No-{userReducer.badge?.data?._id.substring(19, 24)}
            </p>
            <p className="badge-type">
              Badge Type#
              {moment(userReducer.badge?.data?.created_at).format("MMYYYY")}
            </p>
          </div>
          <div className="badge-desc">
            <table>
              <tr className="badge-data">
                <td className="">Badage Name</td>
                <td className="dot-badge">:</td>
                <td className="badge-value">{userReducer.badge?.data?.name}</td>
              </tr>
              <tr className="badge-data">
                <td className="">Badage Description</td>
                <td>:</td>
                <td className="badge-value">
                  {userReducer.badge?.data?.description}
                </td>
              </tr>
            </table>
          </div>
        </div>

        <div className="issue-badge-ops">
          <div className="upload-btn-div">
            <button
              className="badge-input badge-input-file upload-btn"
              onClick={() => clickInput()}
            >
              <p>Upload CSV</p>
            </button>
            <input
              type="file"
              id="getFile"
              accept={".csv"}
              onChange={(e) => getCSVFile(e.target.files[0])}
            />
            <img
              alt=""
              className="info-img"
              src={Info}
              onClick={() => setShowHover(!show_hover)}
            />
            {show_hover === true && (
              <div className="info-hover-div">
                <p>
                  Please upload csv with header as 'Email ID' and all the emails
                  in the below rows
                </p>
              </div>
            )}
            <p className="or-text">or</p>
          </div>

          <textarea
            className="badge-description issue-email-textarea"
            placeholder="Enter User Email IDs, separated by comma"
            defaultValue={emails}
            onChange={(e) => setEmails(e.target.value)}
          ></textarea>
          <p className="email-text">
            Enter User Email ID separated by comma or upload CSV file for bulk
            Share, click file icon for Uploading CSV file
          </p>
          {loader === false ? (
            <button className="share-badge-btn" onClick={() => shareBadge()}>
              Share Badge
            </button>
          ) : (
            <button className="share-badge-btn loading-share-badge" disabled>
              <img alt="" src={Loader} />
              Sharing Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default IssueBadge;
