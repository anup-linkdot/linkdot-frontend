import moment from "moment";
import { Fragment, useEffect, useState } from "react";
import { showAllBadge } from "../../services/badge.service";
import BadgeCard from "../Badge/BadgeCard";
import BadgeLoad from "../../assets/images/badge-load.gif";
import Badge from "../Badge";
import { useNavigate } from "react-router-dom";
import { BadgeList } from "../Badge/BadgeList";

const Dashboard = () => {
  const [active, setActive] = useState("Insights");
  const [active_tab, setActiveTab] = useState("issued");
  const [badges, setBadges] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    getBadge();
  }, [active_tab]);

  const getBadge = async () => {
    const response = await showAllBadge(active_tab);
    if (response.status === true) {
      setBadges(response.data);
    } else {
      alert("Something went wrong. Try again!");
    }
  };

  const changeTab = async (tab) => {
    setLoading(true);
    setActiveTab(tab);
    const response = await showAllBadge(tab);
    if (response.status === true) {
      console.log("response -- ", response.data);
      setBadges(response.data);
      setLoading(false);
    } else {
      alert("Something went wrong. Try again!");
    }
  };

  return (
    <div
      style={{
        marginBottom: "50px",
      }}
    >
      <div className="insight-section-div">
        <div className="badge-navbar">
          <div className="badge-section">
            <div
              className={
                active_tab === "issued"
                  ? "badge-tab badge-tab-active"
                  : "badge-tab"
              }
              onClick={() => changeTab("issued")}
            >
              <p>Issued Badge</p>
            </div>
            <div
              className={
                active_tab === "claimed"
                  ? "badge-tab badge-tab-active"
                  : "badge-tab"
              }
              onClick={() => changeTab("claimed")}
            >
              <p>Claimed Badge</p>
            </div>
          </div>
          <select placeholder="Sort by" className="select-option">
            <option disabled>Sort by</option>
          </select>
        </div>
        {loading === false ? (
          <table className="insights-table">
            <tr className="table-keys">
              <th className="key-text">S.No</th>
              <th className="key-text">Badge Name</th>
              <th className="key-text">Badge Type</th>
              <th className="key-text">Issue Date</th>
              <th className="key-text">
                {active_tab === "issued" ? "Issued To" : "Issued From"}
              </th>
              <th className="key-text">Wallet ID</th>
              <th className="key-text">Status</th>
            </tr>
            {active_tab === "issued" ? (
              <Fragment>
                {badges.map((badge, index) => {
                  return (
                    <tr
                      className="table-keys  table-values"
                      key={badge._id + +Math.random()}
                    >
                      <td className="key-value">{index + 1}</td>
                      <td className="key-value">{badge.name}</td>
                      <td className="key-value">{badge.badge_type}</td>
                      <td className="key-value">
                        {moment(badge.issued_date).format("MMYYYY")}
                      </td>
                      <td className="key-value">{badge.issued_to?.length}</td>
                      <td className="key-value">-</td>
                      <td className="key-value">Pending</td>
                    </tr>
                  );
                })}
              </Fragment>
            ) : (
              <Fragment>
                {badges.map((badge, index) => {
                  return (
                    <tr
                      className="table-keys  table-values"
                      key={badge.badge_id._id + Math.random()}
                    >
                      <td className="key-value">{index + 1}</td>
                      <td className="key-value">{badge.badge_id.name}</td>
                      <td className="key-value">{badge.badge_id.badge_type}</td>
                      <td className="key-value">
                        {moment(badge.badge_id.issued_date).format("MMYYYY")}
                      </td>
                      <td className="key-value">{badge.badge_id.issued_by}</td>
                      <td className="key-value">-</td>
                      <td className="key-value">Accepted</td>
                    </tr>
                  );
                })}
              </Fragment>
            )}
          </table>
        ) : (
          <div className="badges-section loading-badge-section">
            <img alt="" src={BadgeLoad} />
          </div>
        )}
      </div>
      <BadgeList badgeList={[0]} />
    </div>
  );
};

export default Dashboard;
