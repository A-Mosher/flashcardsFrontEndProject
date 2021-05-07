import React from 'react';


function CardViewer(props){
    return(

        <div className="row row-spacer">
            <div className="col">
                <button onClick={() => props.previousCard()}>Previous Card</button>
            </div>

             <div className="col-a">
                 <h1>{props.title}</h1>
                <h4>{props.display}</h4>
                <button onClick={() => props.revealAnswer()}>Answer</button>
            </div>
            <div className="col">
                <button onClick={() => props.nextCard()}>Next Card</button>
            </div>
        </div>
    )
}

export default CardViewer;