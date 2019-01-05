import React from 'react'

const History = (props) => {

    console.log(props.state)
// if(props.state.status == 'WinnerX'){
//     console.log('everything its awesome')
// }
    

return(
    <table>
        <thead>
            <tr className="text-center" >
                <th>Game</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            {props.state.map( board => {
                return (
                    <tr key={board._id}>
                        <td>
                            <div className="board">
                            <div className="minisquare">{board.board[0]}</div>
                            <div className="minisquare">{board.board[1]}</div>
                            <div className="minisquare">{board.board[2]}</div>
                            <div className="minisquare">{board.board[3]}</div>
                            <div className="minisquare">{board.board[4]}</div>
                            <div className="minisquare">{board.board[5]}</div>
                            <div className="minisquare">{board.board[6]}</div>
                            <div className="minisquare">{board.board[7]}</div>
                            <div className="minisquare">{board.board[8]}</div>
                            </div>
                        </td>
                        <td>
                            <button className={`btn ${board.status}`}>{board.status}</button>
                        </td>
                    </tr>
                )
            })}
           
        </tbody>
    </table>
)
}
export default History