import React, { useState, useEffect } from "react";

function Square({ value, onClick }) {
  return (
    <button
      className="w-[120px] h-[120px] bg-slate-200 font-bold border-2 border-gray-400 text-4xl hover:bg-gray-300 transition-all duration-200"
      onClick={onClick}
    >
      {value}
    </button>
  );
}

const App = () => {
  const [zer, iszer] = useState(true); // Keeps track of whether it's "0" or "X"'s turn
  const [squares, setsquares] = useState(Array(9).fill("")); // Game board state
  const [winner, setWinner] = useState(null); // Tracks the winner
  const [isGameOver, setIsGameOver] = useState(false); // Tracks if the game is over

  // Function to handle the click on a square
  function handleonclick(current) {
    if (squares[current] || winner) return; // Prevent clicks on already-filled squares or after a winner is decided

    let cpy = [...squares];
    cpy[current] = zer ? "0" : "X";
    setsquares(cpy);
    iszer(!zer);
  }

  // Function to check if there is a winner
  function getWinner(squares) {
    const winningPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningPattern.length; i++) {
      const [a, b, c] = winningPattern[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        return squares[a];
    }
    return null;
  }

  // `useEffect` to handle winner detection and game over logic
  useEffect(() => {
    const detectedWinner = getWinner(squares);
    if (detectedWinner) {
      setWinner(detectedWinner);
      setIsGameOver(true);
      return;
    }

    // Check for a draw if all squares are filled and there's no winner
    if (!squares.includes("")) {
      setIsGameOver(true);
    }
  }, [squares]);

  // Function to restart the game
  const restartGame = () => {
    setsquares(Array(9).fill(""));
    iszer(true);
    setWinner(null);
    setIsGameOver(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 p-8">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-6">
        Tic-Tac-Toe
      </h1>
      <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg">
        {isGameOver && (
          <div className="mb-4 p-4 bg-yellow-200 text-gray-800 rounded-lg shadow">
            {winner ? `Game Over! ${winner} Won 🎉` : "It's a Draw! 🤝"}
          </div>
        )}
        <div className="grid grid-cols-3 gap-2">
          {squares.map((value, index) => (
            <Square
              key={index}
              value={value}
              onClick={() => handleonclick(index)}
            />
          ))}
        </div>
        {isGameOver && (
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-all"
            onClick={restartGame}
          >
            Restart Game
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
