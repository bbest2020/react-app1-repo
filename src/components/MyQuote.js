import React from 'react';

export default function MyQuote(props) {
    console.log("props"+props);

    // Simple way to call function
    // function deleteQuote() {
    //      props.handleDeleteQuoteClick(props.quote.id);
    // }
    // <button className='btn btn-danger' id={props.quote.id} onClick={deleteQuote}>Delete</button>
    return (
        <div className="card mt-2">
        <div className="card-header">
            {props.quote.name}
        </div>
        <div className="card-body">
            <blockquote className="blockquote mb-0">
                <p>{props.quote.description}</p>
                <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
            </blockquote>
            
            <button className='btn btn-danger' id={props.quote.id} onClick={() => props.handleDeleteQuoteClick(props.quote.id)}>Delete</button>
        </div>
        </div>
    );
}
