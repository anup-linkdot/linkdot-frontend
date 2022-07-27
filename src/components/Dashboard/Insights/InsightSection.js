import { useEffect, useState } from "react";
import {
  InsightClaimedTable,
  InsightIssuedTable,
} from "../../../constants/table/header";
import { showAllBadge } from "../../../services/badge.service";
import Table from "../../Table";
import Tab from "../Tab";

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
    setLoading(true);
    try {
      const response = await showAllBadge(filterKey);
      if (response.status) {
        console.log(response);
        setLoading(false);
        setBadges([...badges, ...response.data.data]);
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
      {activeTab === "issued" ? (
        <Table
          headerList={InsightIssuedTable}
          tableData={badges}
          isLoading={loading}
        />
      ) : (
        <Table
          headerList={InsightClaimedTable}
          tableData={badges}
          isLoading={loading}
        />
      )}
    </div>
  );
};

export default InsightSection;
