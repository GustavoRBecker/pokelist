import './App.css';
import PokeCard from './Components/PokeCard/pokecard.js'

const pikachu = {
  "id": 25,
  "name": "Pikachu",
  "height": 4,
  "weight": 60,
  "image":
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  "types":["electric"]
};

const bulbasaur = {
  "id": 1,
  "name": "Bulbasaur",
  "height": 7,
  "weight": 69,
  "image":
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  "types":["grass", "poison"]
};

const charmander = {
  "id": 4,
  "name": "Charmander",
  "height": 6,
  "weight": 85,
  "image":
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  "types":["fire"]
};

function App() {
  return (
    <>
      <PokeCard pokemon={pikachu} />
      <PokeCard pokemon={bulbasaur} />
      <PokeCard pokemon={charmander} />
    </>
  );
}

export default App;
