import React, { Component } from 'react'
import Counter from './Componets/Counter.js'
import uid from 'uid'

class App extends Component{
    constructor(){
        super()
        this.state = {
            draws: '3',
            turn: 'X',
            status: 'in progress',
            squares: '',
            message: '¿ Are we ready to start ?',
            totalMoves: 0,
        }

        this.boardState ={
            board: Array(9).fill(''),
            movimientos: 0
        }
    }

    componentWillMount() {
        this.restart()
    }
    
    checkWinner = () => {
        let winnerCombos = [
            ['0','1','2'],
            ['3','4','5'],
            ['6','7','8'],
            ['0','3','6'],
            ['1','4','7'],
            ['2','5','8'],
            ['0','4','8'],
            ['2','4','6']
        ]

        for (let i = 0; i < winnerCombos.length; i++){
            const [a, b, c] = winnerCombos[i]
            if(this.boardState.board[a] && this.boardState.board[a] == this.boardState.board[b] && this.boardState.board[a] == this.boardState.board[c]){
                
                // determinate who win
                if(this.state.turn == 'X'){
                    this.setState({
                        status:'Winner X',
                        message: 'the winner is X',
                        turn:''
                    })
                }
                else{
                    this.setState({
                        status:'Winner O',
                        message: 'the winner is O',
                        turn:''
                    })
                }
            }

        }

        return 'winner'
    }
    
    draw = () =>{
            this.setState({
                status: 'Draw',
                message:'Draw',
                turn:'',
    
            })
    }
    clicked = (e) => {
        let index = e.target.dataset.squares
        if(this.state.status == 'in progress'){
        if(this.boardState.board[index]  == '' ) {
            this.boardState.board[index] = this.state.turn
            e.target.innerText = this.state.turn
            this.setState({
                turn: this.state.turn == 'X' ? 'O' : 'X',
                totalMoves: this.state.totalMoves == 8 ? this.draw() : this.state.totalMoves+1,
            })
            this.checkWinner()
        }
    }
    }

    restart = () => {
        this.boardState.board = Array(9).fill('')
        this.setState({
            turn: 'X',
            totalMoves:0,
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
                            <Counter status={this.state.status} draws={this.state.draws} turn={this.state.turn}>
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