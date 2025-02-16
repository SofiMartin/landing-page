import Navbar from './components/Navbar';
import Body from './components/Body'; // Importa el componente Body
import PokemonList from './components/PokemonList';
import Counter from './components/Counter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-pokemon">
      <Navbar />
      <main>
        <Body /> {/* Renderiza el componente Body */}
        <PokemonList />
        <Counter />
      </main>
      <Footer />
    </div>
  );
}

export default App;