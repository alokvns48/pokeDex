/* eslint-disable react/prop-types */
import { useState } from "react";
import Modal from "./PokemonModal";

const PokemonCard = ({ pokemon }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div
        onClick={openModal}
        className="bg-gray-800 rounded-xl shadow-lg p-6 w-72 sm:w-64 lg:w-64 hover:scale-105 transition-transform duration-300 cursor-pointer"
      >
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
          className="w-32 h-32 mx-auto"
        />

        <div className="text-center mt-4">
          <h2 className="text-white text-2xl font-bold capitalize">
            {pokemon.name}
          </h2>
          <p className="text-gray-400 text-lg font-semibold">
            #{pokemon.id.toString().padStart(3, "0")}
          </p>
        </div>

        <div className="flex justify-center space-x-2 mt-4">
          {pokemon.types.map((typeSlot) => (
            <span
              key={typeSlot.slot}
              className={`px-3 py-1 rounded-full text-sm font-bold text-white ${
                typeSlot.type.name === "grass"
                  ? "bg-green-500"
                  : typeSlot.type.name === "fire"
                  ? "bg-orange-500"
                  : typeSlot.type.name === "water"
                  ? "bg-blue-500"
                  : typeSlot.type.name === "poison"
                  ? "bg-purple-500"
                  : "bg-gray-500"
              }`}
            >
              {typeSlot.type.name.toUpperCase()}
            </span>
          ))}
        </div>
      </div>

      <Modal isOpen={isModalOpen} closeModal={closeModal} pokemon={pokemon} />
    </>
  );
};

export default PokemonCard;
