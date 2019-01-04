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
                <div className="container App">
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
                             <div className="row justify-contet-center bigboard">
                                {this.state.quares}
                             </div>                       
                        </div>

                        {/* col-4 */}

                        <div className="col-4 historial">
                            <table className="table rounded">
                                <thead className="thead-dark">
                                    <tr className="col">Game</tr>
                                    <tr className="col">Status</tr>
                                </thead>
                                <tbody className="table-body">
                                </tbody>
                            </table>
                        </div>    
                     </div>

                     <section>
                         <div className="control-panel">
                            <button className="btn btn-secundary btn-player-active btn-panel">Restart</button>
                            <button className="btn btn-secundary btn-player-active btn-panel">Pause</button>
                            <button className="btn btn-secundary btn-player-active btn-panel">Delete history</button>
                         </div>
                     </section>    
                </div>
            </React.Fragment>
        )
    }
}

export default App