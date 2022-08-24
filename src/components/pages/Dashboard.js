import { useEffect, useState } from "react";
import { showAllBadge } from "../../services/badge.service";
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

  function sortBadgeData(sortKey) {
    console.log(badges[0][`${sortKey}`]);
    const acceptedKeys = ["name", "created_at"];
    if (!sortKey in acceptedKeys) {
      throw new Error(`Cannot sort using  key:${sortKey}`);
    }
    const sortedBadges = [...badges].sort((a, b) =>
      a[sortKey].localeCompare(b[sortKey])
    );

    console.log(sortedBadges)

    setBadges(sortedBadges);
  }

  const getBadges = async (filterKey) => {
    try {
      setLoading(true);
      const response = await showAllBadge(filterKey);
      if (response.status) {
        setLoading(false);
        if (filterKey === "claimed") {
          console.log('here -- ', response)
          // wrong response structure recieving for claimed badges
          const badgesArray = [];
          response.data.badges_earned.map((badge) => {
            badgesArray.push({
              name: badge.name,
              badge_type: badge.badge_type,
              created_at: badge.created_at,
              _id: badge._id,
              image: badge.image,
              description: badge.description,
            });
          });

          console.log(badgesArray)
          setBadges(badgesArray);
        } else {
          setBadges(response.data.badges_issued);
          console.log(response.data)
        }
      } else {
        alert("Something went wrong. Try again!");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
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
        <Tab
          tabItems={tabList}
          activeTab={activeTab}
          switchTab={switchTab}
          sort={sortBadgeData}
        />
        {/* if issued badges are empty return <NoBadge/> component.
        If claimed badges are empty <DataNotAvailable/> component is returned by default */}
        {!loading && activeTab === "issued" && badges.length > 0 ? (
          <BadgeList badgeList={badges} badgeDetailUrl={`/badge/issued`} />
        ) : activeTab === "claimed" ? (
          <BadgeList badgeList={badges} />
        ) : (
          <NoBadge userName={userReducer.user.user_name} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
