/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const FilterOptions = ({ allPokemon, setFilterResults }) => {
  const [types, setTypes] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [selectedAbility, setSelectedAbility] = useState("");

  useEffect(() => {
    const extractTypesAndAbilities = () => {
      const uniqueTypes = new Set();
      const uniqueAbilities = new Set();

      allPokemon.forEach((pokemon) => {
        if (pokemon.types) {
          pokemon.types.forEach((type) => {
            if (type.type && type.type.name) {
              uniqueTypes.add(type.type.name);
            }
          });
        }

        if (pokemon.abilities) {
          pokemon.abilities.forEach((ability) => {
            if (ability.ability && ability.ability.name) {
              uniqueAbilities.add(ability.ability.name);
            }
          });
        }
      });

      setTypes([...uniqueTypes]);
      setAbilities([...uniqueAbilities]);
    };

    extractTypesAndAbilities();
  }, [allPokemon]);

  useEffect(() => {
    let filtered = allPokemon;

    if (selectedType) {
      filtered = filtered.filter(
        (pokemon) =>
          pokemon.types &&
          pokemon.types.some((type) => type.type.name === selectedType)
      );
    }

    if (selectedAbility) {
      filtered = filtered.filter(
        (pokemon) =>
          pokemon.abilities &&
          pokemon.abilities.some(
            (ability) => ability.ability.name === selectedAbility
          )
      );
    }

    setFilterResults(filtered);
  }, [selectedType, selectedAbility, allPokemon, setFilterResults]);

  return (
    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 my-4 justify-center mx-2">
      {/* Filter by Type */}
      <select
        className="border border-gray-300 rounded-lg p-3 w-full sm:w-1/2 lg:w-1/3 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        <option value="" className="text-center">Filter by Type</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </option>
        ))}
      </select>

      {/* Filter by Ability */}
      <select
        className="border border-gray-300 rounded-lg p-3 w-full sm:w-1/2 lg:w-1/3 shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300 ease-in-out"
        value={selectedAbility}
        onChange={(e) => setSelectedAbility(e.target.value)}
      >
        <option value="" className="text-center">Filter by Ability</option>
        {abilities.map((ability) => (
          <option key={ability} value={ability}>
            {ability.charAt(0).toUpperCase() + ability.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterOptions;
