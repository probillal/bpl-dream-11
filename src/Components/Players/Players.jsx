import React, { use } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";

const Players = ({ playersPromise }) => {
  //   console.log(playersPromise);
  const players = use(playersPromise);
  console.log(players);
  return (
    <div className="container mx-auto">
      <h2 className="text-xl font-semibold mt-4">
        Available Players: {players.length}
      </h2>
      <AvailablePlayers players={players}></AvailablePlayers>
    </div>
  );
};

export default Players;
