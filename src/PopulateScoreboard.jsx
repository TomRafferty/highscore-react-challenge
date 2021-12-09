import { useState } from "react";
import allCountryScores from "./scores";
import ScoreTableMaker from "./ScoreTableMaker";
import WorldScoreTable from "./WorldScoreTable";

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
      {/* sort button - toggles ascending/descending order */}
      <button onClick={toggleSortOrder}>Toggle Sort Order</button>
      {/* rendering the first table - world score */}
      <WorldScoreTable passedArr={sortedArr} sortOrder={sortOrder} />
      {/* rendering the main table */}
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
