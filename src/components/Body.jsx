import { motion } from "framer-motion";
import { slideInFromSide } from "../utilities/animation.js";

const Body = () => {
  return (
    <div className="flex justify-center mt-20">
      {/* Animación de entrada */}
      <motion.div
        variants={slideInFromSide("left", 1)} // Usa la animación desde la izquierda con un retraso de 1 segundo
        initial="initial" // Estado inicial
        animate="animate" // Estado final
        className="p-8 sm:p-12 md:p-16 lg:p-20 xl:p-24"
      >
        {/* Logo de Pokémon */}
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
          alt="Pikachu"
          className="w-64 sm:w-80 md:w-96 lg:w-[400px] xl:w-[500px]"
        />
      </motion.div>
    </div>
  );
};

export default Body;
