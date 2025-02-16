import { useState } from 'react';
import { motion } from 'framer-motion';

const PokemonList = () => {
  const [showAll, setShowAll] = useState(false);

  // Datos de los Pokémon con imágenes
  const pokemons = [
    { id: 1, name: "Bulbasaur", type: "Planta", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" },
    { id: 2, name: "Charmander", type: "Fuego", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" },
    { id: 3, name: "Squirtle", type: "Agua", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png" },
    { id: 4, name: "Pikachu", type: "Eléctrico", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" },
    { id: 5, name: "Jigglypuff", type: "Normal", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png" },
  ];

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-8">Pokédex</h1>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {/* Renderizado de la lista de Pokémon */}
        {pokemons.slice(0, showAll ? pokemons.length : 3).map((pokemon) => (
          <div
            key={pokemon.id}
            className="bg-white rounded-lg shadow-md overflow-hidden text-center transition-transform hover:scale-105"
          >
            {/* Imagen del Pokémon */}
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className="w-full h-48 object-contain bg-gray-100" // Ajusta la imagen para que se vea completa
            />
            {/* Información del Pokémon */}
            <div className="p-4">
              <h2 className="text-xl font-bold text-red-600">{pokemon.name}</h2>
              <p className="text-gray-600">Tipo: {pokemon.type}</p>
            </div>
          </div>
        ))}
      </motion.div>
      {/* Botón para mostrar más/menos */}
      <button
        onClick={toggleShowAll}
        className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition w-full sm:w-auto"
      >
        {showAll ? "Mostrar Menos" : "Mostrar Más"}
      </button>
    </div>
  );
};

export default PokemonList;