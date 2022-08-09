import PropTypes, { func } from "prop-types";

const Tab = ({ tabItems, activeTab, switchTab, sort }) => {
  function handleChange(e) {
    sort(e.target.value);
  }
  return (
    <div className="badge-navbar">
      <div className="badge-section">
        {tabItems.map((e) => (
          <div
            key={e.key}
            className={
              activeTab === e.key ? "badge-tab badge-tab-active" : "badge-tab"
            }
            onClick={() => switchTab(e.key)}
          >
            <p>{e.name}</p>
          </div>
        ))}
      </div>
      <select
        placeholder="Sort by"
        className="select-option"
        onChange={handleChange}
      >
        <option selected disabled>
          Sort by
        </option>
        <option value={"created_at"}>Created Date</option>
        <option value={"name"}>Name</option>
      </select>
    </div>
  );
};

export default Tab;

Tab.propTypes = {
  tabItems: PropTypes.array.isRequired,
  activeTab: PropTypes.string.isRequired,
  switchTab: PropTypes.func,
  sort: PropTypes.func,
};
