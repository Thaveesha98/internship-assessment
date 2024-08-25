import React from "react";

const CharacterCard = ({ character }) => {
  return (
    <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden m-4 hover:scale-105">
      <img
        className="w-full h-64 overflow-auto"
        src={character.image}
        alt={character.name}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{character.name}</h2>
        <p className="text-gray-700">
          {character.name} is a {character.species} from {character.origin.name}{" "}
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
