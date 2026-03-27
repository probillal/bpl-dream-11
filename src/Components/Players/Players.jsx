import React, { use, useState } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";

const Players = ({ playersPromise }) => {
  //   console.log(playersPromise);
  const players = use(playersPromise);
  console.log(players);
  const [selectedType, setSelectedType] = useState("available");
  return (
    <div className="container mx-auto my-[60px]">
      <div className="flex justify-between items-center gap-4">
        <h2 className="text-2xl font-bold ">
          Available Players: {players.length}
        </h2>
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
            Selected
          </button>
        </div>
      </div>
      <AvailablePlayers players={players}></AvailablePlayers>
    </div>
  );
};

export default Players;
