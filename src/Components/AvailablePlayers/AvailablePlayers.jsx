import React from "react";
import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayers = ({
  players,
  coin,
  setCoin,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  //   console.log(players);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {players.map((player, index) => {
        return (
          <PlayerCard
            key={index}
            player={player}
            coin={coin}
            setCoin={setCoin}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          ></PlayerCard>
        );
      })}
    </div>
  );
};

export default AvailablePlayers;
