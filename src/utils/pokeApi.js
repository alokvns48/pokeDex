import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

export const getPokemonList = async (limit = 200, offset = 0) => {
  const response = await axios.get(
    `${API_URL}?limit=${limit}&offset=${offset}`
  );
  return response.data;
};

export const getPokemonDetails = async (name) => {
  const response = await axios.get(`${API_URL}/${name}`);
  return response.data;
};

