import ListofPlayers from "./ListofPlayers";
import OddPlayers from "./OddPlayers";
import EvenPlayers from "./EvenPlayers";
import ListofIndianPlayers from "./ListofIndianPlayers";

const T20Players = ["Sachin1", "Dhoni2", "Virat3"];
const RanjiTrophyPlayers = ["Rohit4", "Yuvraj5", "Raina6"];

export const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

function App() {

  let flag = false;

  if (flag === true) {
    return (
      <div>
        <h1>List of Players</h1>
        <ListofPlayers />
      </div>
    );
  } else {
    return (
      <div>

        <h1>Indian Team</h1>

        <h2>Odd Players</h2>
        <OddPlayers IndianPlayers={IndianPlayers} />

        <hr />

        <h2>Even Players</h2>
        <EvenPlayers IndianPlayers={IndianPlayers} />

        <hr />

        <h2>List of Indian Players Merged:</h2>
        <ListofIndianPlayers IndianPlayers={IndianPlayers} />

      </div>
    );
  }
}

export default App;