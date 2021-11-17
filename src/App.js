import "./App.css";
import allCountryScores from "./scores";

const AllCountries = () => {
  return (
    <div>
      {allCountryScores.map((x, index) => {
        return <p key={index}>{x.name}</p>;
      })}
    </div>
  );
};

function App() {
  return (
    <div>
      <AllCountries />
    </div>
  );
}

export default App;
