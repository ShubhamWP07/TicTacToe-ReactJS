import React from "react";

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      currentPlayer: "X",
      winner: null,
    };
  }

  handleClick(index) {
    if (this.state.squares[index] || this.state.winner) {
      return;
    }

    const squares = [...this.state.squares];
    squares[index] = this.state.currentPlayer;

    const winner = this.calculateWinner(squares);
    const currentPlayer = this.state.currentPlayer === "X" ? "O" : "X";

    this.setState({
      squares: squares,
      currentPlayer: currentPlayer,
      winner: winner,
    });
  }

  calculateWinner(squares) {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  }

  resetGame() {
    this.setState({
      squares: Array(9).fill(null),
      currentPlayer: "X",
      winner: null,
    });
  }

  renderSquare(index) {
    return (
      <button className="square" onClick={() => this.handleClick(index)}>
        {this.state.squares[index]}
      </button>
    );
  }

  render() {
    const { winner, currentPlayer } = this.state;

    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${currentPlayer}`;
    }

    return (
      <div className="game">
        <h1>Tic Tac Toe</h1>
        <div className="status">{status}</div>
        <div className="board">
          <div className="row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
        <button className="reset-button" onClick={() => this.resetGame()}>
          Reset
        </button>
      </div>
    );
  }
}

export default TicTacToe;
