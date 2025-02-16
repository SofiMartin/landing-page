import { useState } from 'react';
import { motion } from 'framer-motion';

const Counter = () => {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(number + 1);
  };

  const decrease = () => {
    if (number > 0) setNumber(number - 1);
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4 bg-gray-100 rounded-lg shadow-md w-64 mx-auto mt-10">
      {/* Imagen Animada de Torchic con Movimiento */}
      <motion.img
        src="/gengar.svg"
        alt="Gengar"
        className="w-32 h-32 object-contain"
        animate={{ x: [0, 20, 0] }} // Movimiento de ida y vuelta
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Título del Contador */}
      <h1 className="text-2xl font-bold text-red-600">Capturados</h1>

      {/* Valor del Contador */}
      <h1 className="text-4xl font-bold">{number}</h1>

      {/* Botones de Incremento y Decremento */}
      <div className="flex space-x-4">
        <button
          onClick={decrease}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition cursor-pointer"
        >
          -
        </button>
        <button
          onClick={increase}
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition cursor-pointer"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;