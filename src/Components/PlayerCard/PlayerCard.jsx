import React, { useState } from "react";
import { FaFlag, FaUser } from "react-icons/fa";

const PlayerCard = ({
  player,
  coin,
  setCoin,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleChoosePlayer = () => {
    const newCoin = coin - player.price;
    if (newCoin >= 0) {
      setCoin(coin - player.price);
    } else {
      alert("Not enough coin purchase this player");
      return;
    }
    alert(`${player.playerName} is selected`);
    setIsSelected(true);
    setSelectedPlayers([...selectedPlayers, player]);
  };
  return (
    <div className="card bg-base-100 w-96 mx-auto shadow-lg mt-5 border-2">
      <figure>
        <img src={player.image} alt={player.playerName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <FaUser /> {player.playerName}
        </h2>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <FaFlag />
            <p>{player.playerCountry}</p>
          </div>
          <button className="btn btn-accent">{player.playerType}</button>
        </div>

        <div className="divider"></div>

        <h2 className="text-xl font-bold">Rating</h2>
        <div className="flex justify-between items-center gap-5">
          <div className="font-bold">{player.batStyle}</div>
          <div className="font-bold">{player.blowingStyle}</div>
        </div>

        <div className="card-actions flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Price: ${player.price}</h2>
          <button
            className="btn btn-primary"
            onClick={handleChoosePlayer}
            disabled={isSelected}
          >
            {isSelected === true ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
