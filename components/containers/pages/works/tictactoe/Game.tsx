import React from 'react'
import Board from './Board'
import { calculateWinner } from './Calculater'
import Button from '../../../../components/atoms/Button'

type GameState = {
  history: { squares: string[] }[]
  xIsNext: boolean
  stepNumber: number
}
type GameProps = {}

class Game extends React.Component<GameProps, GameState> {
  constructor(props: GameProps) {
    super(props)
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      xIsNext: true,
      stepNumber: 0,
    }
  }

  handleClick = (i: number) => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[history.length - 1]
    const squares = current.squares.slice()
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
      history: history.concat([{ squares: squares }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    })
  }

  jumpTo = (step: number) =>
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    })

  moves = (history: { squares: string[] }[]) =>
    history.map((_step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start'
      return (
        <li className="mt-1" key={move}>
          <Button
            label={desc}
            color={move ? 'default' : 'success'}
            onClick={() => this.jumpTo(move)}
          />
        </li>
      )
    })

  renderStatus = (xIsNext: boolean, winner: string | null) => {
    if (winner) {
      const styles = ['text-2xl', 'text-white', 'text-center', 'm-2']
      styles.push(winner === 'O' ? 'bg-green-500' : 'bg-red-500')
      return <div className={styles.join(' ')}>Winner: {winner}</div>
    }
    return <div>Next Player: {xIsNext ? 'X' : 'O'}</div>
  }

  render = () => {
    const history = this.state.history
    const current = history[this.state.stepNumber]
    const winner = calculateWinner(current.squares)
    return (
      <div className="flex">
        <div className="mr-5">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
          {this.renderStatus(this.state.xIsNext, winner)}
        </div>
        <div>
          <ol>{this.moves(history)}</ol>
        </div>
      </div>
    )
  }
}

export default Game
