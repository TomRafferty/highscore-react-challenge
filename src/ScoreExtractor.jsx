const ScoreExtractor = (props) => {
  // this should take the scores array as a prop and
  // return all relevant information as an array
  // containing objects (one for each entry)
  const arr = props.arrayInput;
  const objArr = [];
  arr.array.forEach((country) => {
    country.names.forEach((entry, index) => {
      objArr.push({
        countryN: country.name,
        entryN: country.scores[index].n,
        entryS: country.scores[index].s,
      });
    });
  });
  return objArr;
};
export default ScoreExtractor;
