import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navbarLinks = [
    { id: 1, title: "Inicio", link: "/" },
    { id: 2, title: "Pokédex", link: "/pokedex" },
    { id: 3, title: "Entrenadores", link: "/trainers" },
    { id: 4, title: "Gimnasios", link: "/gyms" },
  ];

  const navbarRedes = [
    { id: 1, title: "Instagram", link: "https://www.instagram.com", icon: "bi bi-instagram" },
    { id: 2, title: "GitHub", link: "https://www.github.com", icon: "bi bi-github" },
  ];

  return (
    <nav className="w-full bg-red-600 text-white shadow-md z-50">
      {/* VIEW DESKTOP */}
      <div className="flex justify-between items-center px-6 py-4">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img
            src="/pokemon.svg"
            alt="Pikachu Logo"
            className="w-[50px]"
          />
          <p className="text-xl font-bold">Pokémon World</p>
        </div>

        {/* BURGER BTN */}
        <button
          className="md:hidden text-white p-2 cursor-pointer"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* NAVIGATION LINKS DESKTOP */}
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            {navbarLinks.map((link) => (
              <li key={link.id}>
                <a href={link.link} className="text-sm hover:text-yellow-500 transition-transform duration-300 transform hover:scale-110 inline-block">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* NAVIGATION SOCIAL DESKTOP */}
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            {navbarRedes.map((link) => (
              <li key={link.id}>
                <a
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform duration-300 transform hover:scale-125"
                >
                  <i className={`${link.icon} text-lg text-white hover:text-yellow-500`}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* VIEW MOBILE */}
      <div
        className={`md:hidden absolute w-full bg-red-700 transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        {/* VIEW MOBILE LINKS */}
        <ul className="flex flex-col px-4 py-2">
          {navbarLinks.map((link) => (
            <li key={link.id} className="py-2 text-center">
              <a
                href={link.link}
                className="text-white hover:text-yellow-500 block"
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* VIEW MOBILE SOCIAL */}
        <ul className="flex space-x-4 px-4 py-2 border-t border-yellow-500 justify-center">
          {navbarRedes.map((link) => (
            <li key={link.id}>
              <a
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
                onClick={() => setIsOpen(false)}
              >
                <i className={`${link.icon} text-lg text-white hover:text-yellow-500`}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;