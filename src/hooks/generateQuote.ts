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

// The above doesn't work quite as I intended, so this is the second pass
export const useRandomIndex = (): [number, () => void] => {
    const [index, setIndex] = React.useState(1);
    const createRandomIndex = React.useCallback(() => {
        setIndex(Math.floor((Math.random() * 23) + 1))
    }, [setIndex])
    return [
        index,
        createRandomIndex
    ]
}
