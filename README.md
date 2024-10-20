# PokeDex App

This is a Pokemon search and filter app built with **React**. The app fetches Pokemon data from the **PokeAPI** and displays them in cards. It includes features like search, filter by type and ability, detailed Pokemon information via modal, and pagination for easier browsing.

## Features

- **Responsive Design**: Works across all screen sizes (mobile, tablet, desktop).
- **Search Pokemon**: Search Pokemon by name or ID using a debounced search bar.
- **Filter Pokemon**: Filter Pokemon based on their type and abilities.
- **View Details**: Click on a Pokemon card to view detailed information in a modal.
- **Pagination**: Browse through paginated Pokemon results for better navigation.
- **Error Handling**: Displays a 'No Pokemon Found' page when no results match the search or filters.

## Demo

You can see a live demo of the project [here](https://poke-dex-inky.vercel.app/).

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (v12 or higher)
- **npm** (v6 or higher) or **yarn**

### Installation

1. Clone the repository:

```bash
git clone https://github.com/alokvns48/pokeDex.git
```

2. Navigate into the project directory:

```bash
cd pokeDex
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

The app should now be running on http://localhost:5173.

## Usage

- **Search Bar**: Type the name or ID of a Pokemon in the search bar to find it quickly.
- **Filter Options**: Use the dropdowns to filter by type and ability.
- **Card Click**: Click on any Pokemon card to view its detailed information in a modal.
- **Pagination**: Navigate through the list of Pokemon using pagination controls.

## Components

- **Navbar**: Renders the navigation bar.
- **Footer**: Renders the footer with GitHub and LinkedIn links.
- **PokemonList**: Displays the list of Pokemon cards.
- **PokemonCard**: Renders each Pokemon card.
- **PokemonModal**: Modal to show detailed Pokemon info.
- **SearchBar**: Allows searching Pokemon by name or ID.
- **FilterOptions**: Dropdown to filter Pokemon by type and ability.
- **NotFoundPage**: Shown when no Pokemon match the search or filter criteria.
- **Pagination**: Browse through paginated Pokemon results for better navigation.

## Utilities

- **pokeApi.js**: Handles the API requests to the PokéAPI.

## Technologies Used

- **React**: Frontend library for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **PokéAPI**: Public API for fetching Pokémon data.
- **Axios**: HTTP client for making API requests.
- **Debounce**: Optimizes search functionality to reduce excessive API calls.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
