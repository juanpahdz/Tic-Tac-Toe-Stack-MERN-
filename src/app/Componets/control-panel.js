import React from 'react'
const Control = (props) => { 
    return(
        <section>
            <div className="control-panel">
                <button className="btn btn-secundary btn-panel" onClick={props.restart}>Restart</button>
                <button className="btn btn-secundary btn-panel" onClick={props.pause}>Pause</button>
                <button className="btn btn-secundary btn-panel" onClick={props.delete}>Delete history</button>
            </div>
        </section>    
    )
}
export default Control