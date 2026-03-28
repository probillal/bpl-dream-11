import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Players from "./Components/Players/Players";
import { ToastContainer } from "react-toastify";

const fetchPlayers = async () => {
  const res = await fetch("/playerData.json");
  return res.json();
};

function App() {
  const playersPromise = fetchPlayers();
  const [coin, setCoin] = useState(50000);
  return (
    <>
      <div>
        <Navbar coin={coin}></Navbar>
        <Banner></Banner>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-lg"></span>
          }
        >
          <Players
            playersPromise={playersPromise}
            coin={coin}
            setCoin={setCoin}
          ></Players>
        </Suspense>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
