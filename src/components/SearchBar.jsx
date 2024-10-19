/* eslint-disable react/prop-types */
import { useState, useCallback, useEffect } from "react";

const SearchBar = ({ allPokemon, setSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = useCallback(
    (value) => {
      if (value) {
        const filteredResults = allPokemon.filter(
          (pokemon) =>
            pokemon.name.toLowerCase().includes(value.toLowerCase()) ||
            pokemon.id === parseInt(value)
        );
        setSearchResults(filteredResults);
      } else {
        setSearchResults(allPokemon);
      }
    },
    [allPokemon, setSearchResults]
  );

  useEffect(() => {
    const handler = setTimeout(() => {
      handleSearch(searchTerm);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, handleSearch]);

  const onChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex justify-center mb-4">
      <input
        type="text"
        className="border-2 border-gray-300 rounded-lg p-3 w-full max-w-md text-gray-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300 ease-in-out sm:w-3/4 md:w-2/3 lg:w-1/2 mx-2"
        placeholder="Search Pokémon by name or ID..."
        value={searchTerm}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
