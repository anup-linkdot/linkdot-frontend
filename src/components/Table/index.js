import { Loader } from "../Loader";
import PropTypes from "prop-types";
import moment from "moment";
import { DataNotAvailable } from "../DataNotAvailable";

export default function Table({ headerList, tableData, isLoading }) {
  // Show loading screen when loading state is true
  if (isLoading) return <Loader />;

  // if the tableData array is empty.
  if (!tableData.length) return <DataNotAvailable />;

  return (
    <table className="insights-table">
      <thead>
        <tr className="table-keys">
          {headerList.map((header) => (
            <th key={header} className="key-text">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((badge, index) => (
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
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  headerList: PropTypes.array.isRequired,
  tableData: PropTypes.array.isRequired,
};
