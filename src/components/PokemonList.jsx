/* eslint-disable react/prop-types */
import NotFoundPage from "./NotFoundPage";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemonData }) => {
  if (pokemonData.length === 0) {
    return <NotFoundPage />;
  }

  return (
    <div className="flex flex-wrap justify-center gap-6 p-4 sm:p-6 md:p-8">
      {pokemonData.map((pokemon, index) => (
        <PokemonCard key={index} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;
