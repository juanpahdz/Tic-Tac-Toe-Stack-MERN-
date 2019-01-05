import React, { Component } from 'react'
import Counter from './Componets/Counter.js'
import uid from 'uid'
import History from './Componets/History.js'
import Control from './Componets/control-panel.js'

class App extends Component{
    constructor(){
        super()
        this.state = {
            status: 'in progress',
            board: Array(9).fill(''),
            turn: 'X',
            totalMoves: 0,
            squares: '',
            message: ' Are we ready to start ?',
            boards: []
        }
    }

    componentWillMount() {
        this.restart()
    }
    componentDidMount(){
        this.fetchBoards()
    }
    componentDidUpdate(){
        if(this.state.status == 'Paused'){
            this.restart();
        }
    }

     //  fetch!

    fetchBoards = () => {
        fetch('/api/boards')
        .then(res => res.json())
        .then(data => {
            this.setState({boards: data}) 
        })
}

    fetchBoardsPost = () => {
        if(this.state._id){
            fetch(`/api/boards/${this.state._id}`,{
                method:'PUT',
                body:JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            M.toast({html: 'game updated'})
            this.fetchBoards()
       }
       else{
        fetch('/api/boards', {
            method: 'POST',
            body:JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                }
        }
        )
        }
    }

    fetchDelete = () => {
        fetch('/api/boards', {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
    })
        M.toast({html: 'History was deleted'})
    }

    handlePause = () => {
            if(this.state.status == 'in progress'){
            this.setState({
                status: 'Paused'
            })
            }
}

    rePlay = (id) => {
        this.restart()
        fetch(`/api/boards/${id}`)
            .then(res => res.json())
            .then(data => { 
                if(data.status == 'Paused'){
                    this.setState({
                        board: data.board,
                        message: 'you come back',
                        status: 'in progress',
                        _id: data._id,
                        totalMoves: data.totalMoves,
                        turn: data.turn,
                        squares: <div className="row bigboard" onClick={(e) => { this.clicked(e)}} >
                                        {data.board.map( (squares, key ) => {
                                        return <div className="square" data-squares={key} key={uid()}>{data.board[key]}</div>
                                        })
                                        }
                                </div>
                    })
           
            
            M.toast({html: 'you are playing again'}) 
        }})
    }

    deleteHistory = () => {
        this.fetchDelete()
        this.fetchBoards()
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
            if(this.state.board[a] && this.state.board[a] == this.state.board[b] && this.state.board[a] == this.state.board[c]){
                
                // determinate who win
                if(this.state.turn == 'X'){
                    this.setState({
                        status:'WinnerX',
                        message: 'the winner is X',
                        turn:''
                    })
                }
                else{
                    this.setState({
                        status:'WinnerO',
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
        if(this.state.board[index]  == '' ) {
            this.state.board[index] = this.state.turn
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
        if(this.state.status == 'WinnerX' || this.state.status == 'Draw' || this.state.status == 'WinnerO' || this.state.status == 'Paused'){
            this.fetchBoardsPost()
            this.fetchBoards()
        }
        this.setState({
            _id: null,
            board: Array(9).fill(''),
            turn: 'X',
            totalMoves:0,
            status: 'in progress',
            message: 'are we ready to start?',
            squares: <div className="row bigboard" onClick={(e) => { this.clicked(e)}} >
                        {this.state.board.map( (squares, key ) => {
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
                            <Counter status={this.state.status} turn={this.state.turn}>
                            </Counter>
                        </div>

                        {/* col-5 */}

                        <div className="col-5 game">
                            { this.state.squares }
                        </div>

                        {/* col-4 */}

                        <div className="col-4 history">
                            <History replay={this.rePlay} boards={this.state.boards}/>
                        </div>    
                     </div>

                     <Control pause={(e) => {this.handlePause(e)}} restart={(e) => {this.restart(e)}} delete={(e) => {this.deleteHistory(e)}}/>
                </div>
            </React.Fragment>
        )
    }
}

export default App