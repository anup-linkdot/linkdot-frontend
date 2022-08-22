import InsightSection from "../Dashboard/Insights/InsightSection";
import SideBar from "../Dashboard/SideBar";

export default function Insights() {
  return (
    <div className="main-dashboard-div">
      <div className="main-row">
        <div className="button-left-main">
          <SideBar />
        </div>
        <div
          style={{
            width: "100%",
          }}
        >
          <InsightSection />
        </div>
      </div>
    </div>
  );
}
