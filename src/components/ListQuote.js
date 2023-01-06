import React from 'react';
import MyQuote from './MyQuote';

// const singleQuote = {
//     id: 'quoteUpdate',
//     name: 'Enjoy Life Updated',
//     description: 'Enjoy life Enjoy life Enjoy life Enjoy life '
// };
const quote = [
    {
    id: 'quote1',
    name: 'Enjoy Life',
    description: 'Enjoy life Enjoy life Enjoy life Enjoy life '
    },
    {
    id: 'quote2',
    name: 'Love Life',
    description: 'Love life Love life Love life EnLovejoy life '
    },
    {
    id: 'quote3',
    name: 'Make Life Easy',
    description: 'Make Life Easy Make Life Easy Make Life Easy'
    }
];


export default function ListQuote() {
const [quotes, setQuotes] = React.useState(quote);
function deleteQuoteFromParent(id) {
    setQuotes((prevQuotes) => {
        return [...prevQuotes.filter((item) => item.id !== id)];
        //return [...prevQuotes, singleQuote];
    })
}
const quoteElements = quotes.map(q => {
    return (
        <MyQuote 
        quote={q}
        handleDeleteQuoteClick={deleteQuoteFromParent}
        />
    )
});
//const singleQuoteElemnt = <MyQuote quote={singleQuote} />;

    //console.log('quoteElements'+quoteElements);
    return quoteElements;
    //return singleQuoteElemnt;
    //return <MyQuote quote={singleQuote} />;
}
