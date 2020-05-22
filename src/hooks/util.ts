import React from 'react';


// custom hook example
export const useRandomQuote = (): [string, ([]) => void] => {
    const randomIndex = Math.floor((Math.random() * 23) + 1);
    const [quote, setQuote] = React.useState('');
    const generateQuote = React.useCallback((quotes) => {
        setQuote(quotes[randomIndex]);
    }, [setQuote])
    return [
        quote,
        generateQuote
    ]
}
