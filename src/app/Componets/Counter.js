import React from 'react'

const Counter = (props) => {
        return(
            <div className="container">
                <div className="player-1">
                    <div className="row">
                        <h2 className="col-8">Player 1</h2>
                        <div className="col-4 identificator">
                            <button className="btn-player btn btn-secundary">X</button>
                        </div>
                    </div>
                </div>

                <div className="text-center my-4">
                    <h4>Draws <span className="draws">{ props.draws} </span></h4>
                </div>
          
                <div className="player-2">
                    <div className="row">
                        <h2 className="col-8">Player 2</h2>
                        <div className="col-4 identificator">
                            <button className="btn-player btn btn-secundary">O</button>
                        </div>                                        
                    </div>
                </div>
            </div>            
        )
}

export default Counter;