import React from 'react'

const Counter = (props) => {
 console.log(props)

 let styleO = {
    borderBottom: 'none'
    }

 let styleX = {
    borderBottom: '5px solid #2bbbad'
    }
 
   if(props.turn == 'X'){
       styleX.borderBottom = `5px solid #2bbbad`
       styleO.borderBottom = 'none'
   } else{
       styleO.borderBottom = '5px solid #2bbbad'
       styleX.borderBottom = `none`
   }
    
        return(
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