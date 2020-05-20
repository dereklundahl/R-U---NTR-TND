import React from 'react';
import { View, Text } from 'react-native';
import { useRandomQuote } from '../hooks/util';

const QuoteGenerator = () => {
    const quotes: string[] = [
        "When gone am I, the last of the Jedi will you be. The Force runs strong in your family. Pass on what you have learned.",
        "I find your lack of faith disturbing.",
        "Never tell me the odds!",
        "Fear is the path to the dark side. Fear leads to anger; anger leads to hate; hate leads to suffering. I sense much fear in you.",
    ]

    const [quote, getQuote] = useRandomQuote();

    React.useEffect(() => {
        getQuote();
    }, [getQuote])

    return (
        <View>
            <Text>{quote}</Text>
        </View>
    );
}

export default QuoteGenerator;
