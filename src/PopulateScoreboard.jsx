import { useState } from "react";
import allCountryScores from "./scores";
import ScoreTableMaker from "./ScoreTableMaker";

const sortCountries = () => {
  let newArr = allCountryScores;
  //had to google this line:
  newArr.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));

  return newArr;
};

const PopulateScoreboard = () => {
  const [sortOrder, setSortOrder] = useState("descending");
  const toggleSortOrder = () => {
    if (sortOrder === "descending") {
      setSortOrder("ascending");
    } else {
      setSortOrder("descending");
    }
  };

  const sortedArr = sortCountries();
  return (
    <>
      <button onClick={toggleSortOrder}>Toggle Sort Order</button>

      <div className="tables-wrapper">
        <table className="table">
          <caption className="table-caption" key="world-score-table-caption">
            World Scores:
          </caption>
          <tbody key="world-score-table">
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
            {sortedArr.map((country) => {
              return (
                <ScoreTableMaker country={country} sortOrder={sortOrder} />
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="tables-wrapper">
        {sortedArr.map((country, countryIndex) => {
          return (
            <table key={`${country}-${countryIndex}-table`} className="table">
              <caption key={`${country}-caption`} className="table-caption">
                {country.name} - Score Board
              </caption>

              <thead>
                <tr>
                  <th
                    key={`${country}-${countryIndex}-name-heading`}
                    className="table-heading"
                  >
                    Name
                  </th>
                  <th
                    key={`${country}-${countryIndex}-score-heading`}
                    className="table-heading"
                  >
                    Score
                  </th>
                </tr>
              </thead>
              <tbody>
                <ScoreTableMaker country={country} sortOrder={sortOrder} />
              </tbody>
            </table>
          );
        })}
      </div>
    </>
  );
};

export default PopulateScoreboard;
