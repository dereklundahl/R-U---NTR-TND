import React from 'react';

interface QuoteInterface {
    quotes: string[]
}

const getQuoteIndex: string = ()

export const useRandomQuote = (): [QuoteInterface | undefined] => {
    const [quote, setQuote] = React.useState('');
    const quoteIndex = React.useCallback(() => {
        Math.floor((Math.random() * 4) + 1);
        setQuote(quotes[quoteIndex]);
    }, [setQuote, quotes])
    return [
        quote,
        getQuote
    ]
}
