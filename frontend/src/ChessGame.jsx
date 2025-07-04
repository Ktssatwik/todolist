import React, { useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import "./ChessGame.css";

const ChessGame = () => {
  const [game, setGame] = useState(new Chess());

  const handleDrop = (sourceSquare, targetSquare) => {
    const move = game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q" 
    });

    if (move === null) return false; 
    setGame(new Chess(game.fen()));
    return true;
  };

  const resetGame = () => {
    setGame(new Chess());
  };

  return (
    <div className="chess-container">
      <h2 className="chess-title">♟️ Chess Game</h2>
      <div className="chess-board">
        <Chessboard 
          position={game.fen()}
          onPieceDrop={handleDrop}
          boardWidth={400}
        />
      </div>
      <button className="chess-btn" onClick={resetGame}>Reset Game</button>
    </div>
  );
};

export default ChessGame;
