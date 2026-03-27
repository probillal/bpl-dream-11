import React, { use, useState } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const Players = ({ playersPromise, coin, setCoin }) => {
  //   console.log(playersPromise);
  const players = use(playersPromise);
  console.log(players);
  const [selectedType, setSelectedType] = useState("available");
  return (
    <div className="container mx-auto my-[60px]">
      <div className="flex justify-between items-center gap-4">
        {selectedType === "available" ? (
          <h2 className="text-2xl font-bold ">
            Available Players: {players.length}
          </h2>
        ) : (
          <h2 className="text-2xl font-bold ">Selected Player (4/6)</h2>
        )}
        <div>
          <button
            onClick={() => setSelectedType("available")}
            className={`btn ${selectedType === "available" ? "btn-primary" : ""}  rounded-r-none rounded-l-2xl`}
          >
            Available
          </button>
          <button
            onClick={() => setSelectedType("selected")}
            className={`btn ${selectedType === "selected" ? "btn-primary" : ""}  rounded-l-none rounded-r-2xl`}
          >
            Selected (0)
          </button>
        </div>
      </div>
      {selectedType === "available" ? (
        <AvailablePlayers
          players={players}
          coin={coin}
          setCoin={setCoin}
        ></AvailablePlayers>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}
    </div>
  );
};

export default Players;
