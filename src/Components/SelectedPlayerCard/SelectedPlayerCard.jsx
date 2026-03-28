import React from "react";
import { FaUser } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const SelectedPlayerCard = ({
  player,
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}) => {
  const handleDeleteSelectedPlayer = (player) => {
    console.log(player);
    const filteredPlayers = selectedPlayers.filter(
      (selectedPlayer) => selectedPlayer.playerName !== player.playerName,
    );
    setSelectedPlayers(filteredPlayers);
    setCoin(coin + player.price);
  };
  return (
    <div className="flex justify-between items-center gap-4 border p-8 rounded-md mt-8">
      <div className="flex items-center gap-3">
        <img
          className="w-[100px] rounded-lg"
          src={player.image}
          alt={player.playerName}
        />
        <div>
          <h2 className="text-xl font-semibold flex gap-2 items-center">
            <FaUser /> {player.playerName}
          </h2>
          <p>{player.playerType}</p>
        </div>
      </div>
      <button
        className="btn text-red-500 text-2xl"
        onClick={() => handleDeleteSelectedPlayer(player)}
      >
        <MdDeleteOutline />
      </button>
    </div>
  );
};

export default SelectedPlayerCard;
