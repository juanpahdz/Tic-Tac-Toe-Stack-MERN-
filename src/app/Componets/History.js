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
            {props.boards.map( board => { 
                let Message = {}
                if(board.status == 'WinnerX'){
                    Message = 'Won X'
                } 
                if(board.status == 'WinnerO'){
                    Message = 'Won O'
                }              
                if(board.status == 'Draw'){
                    Message = board.status
                }              
                if(board.status == 'Paused'){
                    Message = board.status
                }              

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
                            <button  onClick={() => {props.replay(board._id)}} className={`btn ${board.status} `}>{Message}</button>
                        </td>
                    </tr>
                )
            })}
           
        </tbody>
    </table>
)
}
export default History