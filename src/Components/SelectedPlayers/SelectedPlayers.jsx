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
    <div className="mt-8">
      {selectedPlayers.length === 0 ? (
        <div className="text-center ">
          <h2 className="text-2xl font-medium mb-3">No player selected yet</h2>
          <p>Go to available tab to select players </p>
        </div>
      ) : (
        selectedPlayers.map((player, index) => (
          <SelectedPlayerCard
            key={index}
            player={player}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
            coin={coin}
            setCoin={setCoin}
          ></SelectedPlayerCard>
        ))
      )}
    </div>
  );
};

export default SelectedPlayers;
