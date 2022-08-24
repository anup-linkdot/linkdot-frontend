import { useEffect, useState } from "react";
import {
  InsightClaimedTable,
  InsightIssuedTable,
} from "../../../constants/table/header";
import { showAllBadge } from "../../../services/badge.service";
import Table from "../../Table";
import Tab from "../Tab";
import "../../../styles/dashboard.styles.scss";
import "../../../styles/insights.styles.scss";

const InsightSection = () => {
  const tabList = [
    { name: "Issued Badge", key: "issued" },
    { name: "Claimed Badge", key: "claimed" },
  ];
  const [loading, setLoading] = useState(false);
  const [badges, setBadges] = useState([]);
  const [activeTab, setActiveTab] = useState(tabList[0]["key"]);
  const switchTab = (key) => setActiveTab(key);

  const getBadges = async (filterKey) => {
    console.log(badges);
    setLoading(true);
    try {
      const response = await showAllBadge(filterKey);
      if (response.status) {
        setLoading(false);
        if (activeTab === "issued") {
          console.log("active");
          if (response.data.length > 0)
            setBadges([...response.data]);
          else
            setBadges([])
        } else {
          console.log(response.data);
          if (response.data.length > 0) {
            // wrong response structure recieving for claimed badges
            const badges = [];
            response.data.map((bagde) => {
              badges.push({
                name: bagde.badge_id.name,
                badge_type: bagde.badge_id.badge_type,
                issued_date: badges.issued_date,
                issued_to: bagde.badge_id.issued_by, // wrong logic, may be refactor Table component for supporting different keys.
                _id: bagde.badge_id._id,
              });
            });
            setBadges(badges);
          }
          else
            setBadges([])
        }
      } else {
        alert("Something went wrong. Try again!");
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (activeTab) getBadges(activeTab);
  }, [activeTab]);
  return (
    <div className="insight-section-div">
      <Tab tabItems={tabList} activeTab={activeTab} switchTab={switchTab} />
      <Table
        headerList={
          activeTab === "issued" ? InsightIssuedTable : InsightClaimedTable
        }
        tableData={badges}
        isLoading={loading}
      />
    </div>
  );
};

export default InsightSection;
