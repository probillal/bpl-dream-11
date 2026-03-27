import React from "react";
import { FaFlag, FaUser } from "react-icons/fa";

const PlayerCard = ({ player }) => {
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
          <button className="btn btn-primary">Choose Player</button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
