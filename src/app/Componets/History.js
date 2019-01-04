import React from 'react'

const History = (props) => {
return(
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
)
}
export default History