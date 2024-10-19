import { useState, useEffect } from "react";
import PokemonList from "./components/PokemonList";
import SearchBar from "./components/SearchBar";
import { getPokemonDetails, getPokemonList } from "./utils/pokeApi";
import FilterOptions from "./components/FilterOptions";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination"; // Add pagination

const App = () => {
  const [detailedPokemon, setDetailedPokemon] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [filterResults, setFilterResults] = useState([]);
  const [finalResults, setFinalResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await getPokemonList();
        const results = response.results;

        const detailedPokemonList = await Promise.all(
          results.map(async (pokemon) => {
            return getPokemonDetails(pokemon.name);
          })
        );

        const validPokemonList = detailedPokemonList.filter(
          (pokemon) => pokemon !== null
        );

        setDetailedPokemon(validPokemonList);
        setFilterResults(validPokemonList); 
        setSearchResults(validPokemonList);
      } catch (error) {
        console.error("Error fetching Pokémon data: ", error);
      }
    };
    fetchPokemonData();
  }, []);

  useEffect(() => {
    const combinedResults = searchResults.filter((pokemon) =>
      filterResults.includes(pokemon)
    );
    setFinalResults(combinedResults);
    setCurrentPage(1);
  }, [searchResults, filterResults]);

  // Pagination Logic
  const totalPages = Math.ceil(finalResults.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPokemon = finalResults.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="">
      <Navbar />
      
      <SearchBar
        allPokemon={detailedPokemon}
        setSearchResults={setSearchResults}
      />

      <FilterOptions
        allPokemon={detailedPokemon}
        setFilterResults={setFilterResults}
      />


      <PokemonList pokemonData={currentPokemon} />


      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      )}

      <Footer />
    </div>
  );
};

export default App;
