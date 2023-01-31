import React, { useState, useEffect } from "react";

function RandomQuote() {

    const [quote, setQuote] = useState('');
    
    useEffect(() => {
        fetch("http://localhost:8004/quotes")
            .then((response) => response.json())
            .then((quotes) => renderRandomQuote(quotes))
    }, [])

    function renderRandomQuote(quotes) {
        console.log("here")
        const randInt = Math.floor(Math.random(1) * quotes.length);
        setQuote(quotes[randInt].quote);
    }

    return (
        <h3 id = 'quote'>{quote}</h3>
    )

}

export default RandomQuote;