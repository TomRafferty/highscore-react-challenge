const ScoreTableMaker = (props) => {
    return (
      <>
        {props.country.scores
          .sort(
            props.sortOrder === "descending"
              ? (a, b) => (a.s < b.s ? 1 : b.s < a.s ? -1 : 0)
              : (a, b) => (a.s > b.s ? 1 : b.s > a.s ? -1 : 0)
          )
          .map((person, personIndex) => {
            return (
              <tr key={`${person}-${personIndex}-table-row`}>
                <td key={`${person}-${personIndex}-name`}>{person.n}</td>
                <td key={`${person}-${personIndex}-score`}>{person.s}</td>
              </tr>
            );
          })}
      </>
    );
}
export default ScoreTableMaker;