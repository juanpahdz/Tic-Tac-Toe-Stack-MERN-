import React, { Component } from 'react'
import Counter from './Componets/Counter.js'
import uid from 'uid'

class App extends Component{
    constructor(){
        super()
        this.state = {
            draws: '3',
            totalMoves: 0,
            turn: 'X',
            status: 'inprogress',
            squares: '',
            message: '¿ Are we ready to start ?'
        }

        this.boardState ={
            board: Array(9).fill(''),
        }
    }

    componentWillMount() {
        this.restart()
    }
    
    clicked = (e) => {
        let index = e.target.dataset.squares
        if(this.boardState.board[index]  == '' ) {
            this.boardState.board[index] = this.state.turn
            e.target.innerText = this.state.turn
    
            this.setState({
                turn: this.state.turn == 'X' ? 'O' : 'X',
                totalMoves: this.state.totalMoves+1
            })
        }
    }

    restart = () => {
        this.boardState.board = Array(9).fill('')
        this.setState({
            totalMoves: 0,
            turn: 'X',
            status: 'in progress',
            message: '¿are we ready to start?',
            squares: <div className="row bigboard" onClick={(e) => { this.clicked(e)}} >
                        {this.boardState.board.map( (squares, key ) => {
                            return <div className="square" data-squares={key} key={uid()}></div>
                        })
                        }
                    </div>
        })
    }

    render(){
        return (
            <React.Fragment>
                <div className="container app">
                    <div className="message text-center text-uppercase mb-5">
                        <h1> { this.state.message } </h1>
                    </div>
                     <div className="row">

                        {/* col-3 */}

                        <div className="col-3 counter-panel">
                            <Counter draws={this.state.draws} turn={this.state.turn}>
                            </Counter>
                        </div>

                        {/* col-5 */}

                        <div className="col-5 game">
                            { this.state.squares }
                        </div>

                        {/* col-4 */}

                        <div className="col-4 historial">
                            <table>
                                <thead>
                                    <tr className="text-center" >
                                        <th>Game</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                 <tr>
                                     <td>
                                        <div className="board">
                                            <div className="minisquare">x</div>
                                            <div className="minisquare">O</div>
                                            <div className="minisquare">x</div>
                                            <div className="minisquare">x</div>
                                            <div className="minisquare">X</div>
                                            <div className="minisquare">x</div>
                                            <div className="minisquare">x</div>
                                            <div className="minisquare">O</div>
                                            <div className="minisquare">O</div>
                                        </div>
                                     </td>
                                     <td>
                                        <button className="btn btn-finished"> Winer X</button>
                                     </td>
                                 </tr>
                                </tbody>
                            </table>
                        </div>    
                     </div>

                     <section>
                         <div className="control-panel">
                            <button className="btn btn-secundary btn-panel" onClick={(e) => this.restart(e) }>Restart</button>
                            <button className="btn btn-secundary btn-panel">Pause</button>
                            <button className="btn btn-secundary btn-panel">Delete history</button>
                         </div>
                     </section>    
                </div>
            </React.Fragment>
        )
    }
}

export default App