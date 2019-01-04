import React, { Component } from 'react'
import Counter from './Componets/Counter.js'

class App extends Component{
    constructor(){
        super()
        this.state = {
            draws: '3',
            turn: 'X',
            status: 'inprogress',
            board: '',
            message: '¿ Are we ready to start ?'
        }
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
                            <Counter draws={this.state.draws}>
                            </Counter>
                        </div>

                        {/* col-5 */}

                        <div className="col-5 game">
                             <div className="row bigboard">
                                {/* {this.state.quares} */}
                                <div className="square">X</div>
                                <div className="square">O</div>
                                <div className="square"></div>
                                <div className="square">X</div>
                                <div className="square"></div>
                                <div className="square"></div>
                                <div className="square">O</div>
                                <div className="square">X</div>
                                <div className="square">O</div>
                             </div>                       
                        </div>

                        {/* col-4 */}

                        <div className="col-4 historial">
                            <table>
                                <thead>
                                    <tr class="text-center" >
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
                            <button className="btn btn-secundary btn-panel">Restart</button>
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