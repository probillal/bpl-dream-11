import { Suspense } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Players from "./Components/Players/Players";

const fetchPlayers = async () => {
  const res = await fetch("/playerData.json");
  return res.json();
};

function App() {
  const playersPromise = fetchPlayers();
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-lg"></span>
          }
        >
          <Players playersPromise={playersPromise}></Players>
        </Suspense>
      </div>
    </>
  );
}

export default App;
