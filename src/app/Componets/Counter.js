import React from 'react'

const Counter = (props) => {

    let styleO = {}
    let styleX = {}

    if (props.status == 'WinnerX') {
        styleX.background = '#2bbbad'
        styleO.borderBottom = 'none !important'
    }
    if (props.status == 'WinnerO') {
        styleO.background = '#2bbbad'
        styleX.borderBottom = 'none !important'
    }
    if (props.status == 'Draw') {
        styleO.background = '#2bbbad'
        styleX.background = '#2bbbad'
    }
    if (props.turn == 'X') {
        styleX.borderBottom = '5px solid #2bbbad'
        styleO.borderBottom = 'none'
    }
    else if (props.turn == 'O') {
        styleO.borderBottom = '5px solid #2bbbad'
        styleX.borderBottom = 'none'
    }

    return (
        <div className="container">
            <div className="player-1">
                <div className="row">
                    <h2 className="col-8">Player 1</h2>
                    <div className="col-4 identificator">
                        <button className="X btn-player btn" style={styleX}>X</button>
                    </div>
                </div>
            </div>

            <div className="player-2">
                <div className="row">
                    <h2 className="col-8">Player 2</h2>
                    <div className="col-4 identificator">
                        <button className="btn-player btn" style={styleO}>O</button>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default Counter;