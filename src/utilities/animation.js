export const slideInFromSide = (direction, delay) => {
    return {
      initial: {
        x: direction === "left" ? -100 : 100, // Comienza fuera de la pantalla
        opacity: 0,
      },
      animate: {
        x: [0, direction === "left" ? -50 : 50, 0], // Movimiento de ida y vuelta
        opacity: 1,
        transition: {
          duration: 2, // Duración de cada ciclo
          delay: delay,
          repeat: Infinity, // Repetición infinita
          repeatType: "mirror", // Efecto de "ida y vuelta"
        },
      },
    };
  };