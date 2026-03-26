import React, { use } from "react";

const Players = ({ playersPromise }) => {
  //   console.log(playersPromise);
  const players = use(playersPromise);
  console.log(players);
  return (
    <div className="container mx-auto">
      <h2 className="text-xl font-semibold mt-4">
        Available Players: {players.length}
      </h2>
    </div>
  );
};

export default Players;
