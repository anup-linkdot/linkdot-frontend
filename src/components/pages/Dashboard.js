import { useEffect, useState } from "react";
import { showAllBadge } from "../../services/badge.service";
import { useNavigate } from "react-router-dom";
import { BadgeList } from "../Badge/BadgeList";
import Tab from "../Dashboard/Tab";
import { useSelector } from "react-redux";
import NoBadge from "../Dashboard/NoBadge";
import { Loader } from "../Loader";

const Dashboard = () => {
  const tabList = [
    { name: "Issued Badge", key: "issued" },
    { name: "Claimed Badge", key: "claimed" },
  ];
  const [loading, setLoading] = useState(false);
  const [badges, setBadges] = useState([]);
  const [activeTab, setActiveTab] = useState(tabList[0]["key"]);
  const userReducer = useSelector((state) => state.userReducer);

  const switchTab = (key) => setActiveTab(key);

  const getBadges = async (filterKey) => {
    try {
      setLoading(true);
      const response = await showAllBadge(filterKey);
      if (response.status) {
        setLoading(false);
        setBadges(response.data);
      } else {
        alert("Something went wrong. Try again!");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab) getBadges(activeTab);
  }, [activeTab]);

  if (loading) return <Loader />;
  return (
    <div
      style={{
        marginBottom: "50px",
      }}
    >
      <div className="insight-section-div">
        <Tab tabItems={tabList} activeTab={activeTab} switchTab={switchTab} />
        {/* if issued badges are empty return <NoBadge/> component.
        If claimed badges are empty <DataNotAvailable/> component is returned by default */}
        {!loading && activeTab === "issued" && badges.length ? (
          <BadgeList badgeList={badges} badgeDetailUrl={`/badge/issued`} />
        ) : activeTab === "claimed" ? (
          <BadgeList badgeList={badges} badgeDetailUrl={`/badge/claimed`} />
        ) : (
          <NoBadge userName={userReducer.user.user_name} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
