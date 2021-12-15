import ScoreTableMaker from "./ScoreTableMaker";
const WorldScoreTable = (props) => {
  return (
    <div className="world-score-table-wrapper">
      <table className="table" key="world-score-table">
        <caption className="table-caption" key="world-score-table-caption">
          World Scores:
        </caption>
        <tbody key="world-score-table-body">
          <thead key="world-score-table-head">
            <tr key="world-score-table-row-headers">
              <th
                key="world-score-table-name-heading"
                className="table-heading"
              >
                Name
              </th>
              <th
                key="world-score-table-score-heading"
                className="table-heading"
              >
                Score
              </th>
            </tr>
          </thead>
          {props.passedArr.map((country) => {
            return (
              <ScoreTableMaker country={country} sortOrder={props.sortOrder} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default WorldScoreTable;
