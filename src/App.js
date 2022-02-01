import './App.css';
import { useState } from 'react';

const cardImages = [
  { "src": "/img/helmet-1.png" },
  {"src": "/img/potion-1.png"},
  {"src": "/img/ring-1.png"},
  {"src": "/img/scroll-1.png"},
  {"src": "/img/shield-1.png"},
  {"src": "/img/sword-1.png"},
]

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  //shuffle cards when new game button is pressed
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => { return Math.random() - 0.5 })
      .map((card) => ({ ...card }))
    setCards(shuffledCards);
    setTurns(0);
  }
  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <img src={card.src} className="front" alt="card front" />
            <img src="/img/cover.png" alt="card back" className="back" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
