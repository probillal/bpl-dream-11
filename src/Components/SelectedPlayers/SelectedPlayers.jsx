import React from "react";
import SelectedPlayerCard from "../SelectedPlayerCard/SelectedPlayerCard";

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}) => {
  console.log(selectedPlayers);
  return (
    <div>
      {selectedPlayers.map((player, index) => (
        <SelectedPlayerCard
          key={index}
          player={player}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          coin={coin}
          setCoin={setCoin}
        ></SelectedPlayerCard>
      ))}
    </div>
  );
};

export default SelectedPlayers;
