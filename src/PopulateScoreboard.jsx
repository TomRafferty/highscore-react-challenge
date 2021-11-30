import { useState } from "react";
import allCountryScores from "./scores";

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
                {country.scores
                  .sort(
                    sortOrder === "descending"
                      ? (a, b) => (a.s < b.s ? 1 : b.s < a.s ? -1 : 0)
                      : (a, b) => (a.s > b.s ? 1 : b.s > a.s ? -1 : 0)
                  )
                  .map((person, personIndex) => {
                    return (
                      <tr key={`${person}-${personIndex}-table-row`}>
                        <td key={`${person}-${personIndex}-name`}>
                          {person.n}
                        </td>
                        <td key={`${person}-${personIndex}-score`}>
                          {person.s}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          );
        })}
      </div>
    </>
  );
};

export default PopulateScoreboard;
