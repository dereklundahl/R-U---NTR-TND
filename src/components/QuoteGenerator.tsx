import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRandomQuote } from '../hooks/generateQuote';

export const quotes: string[] = [
    "",
    "'When gone am I, the last of the Jedi will you be. The Force runs strong in your family. Pass on what you have learned.'",
    "'I find your lack of faith disturbing.'",
    "'Never tell me the odds!'",
    "'Fear is the path to the dark side. Fear leads to anger; anger leads to hate; hate leads to suffering. I sense much fear in you.'",
    "'I’m just a simple man trying to make my way in the universe.'",
    "'Help me, Obi-Wan Kenobi. You’re my only hope.'",
    "'It’s the ship that made the Kessel run in less than twelve parsecs.'",
    "'Why, you stuck-up, half-witted, scruffy-looking nerf herder!'",
    "'Do. Or do not. There is no try.'",
    "'I’ll never turn to the dark side. You’ve failed, your highness. I am a Jedi, like my father before me.'",
    "'In my experience there is no such thing as luck.'",
    "'I’ve got a bad feeling about this.'",
    "It’s a trap!'",
    "'So this is how liberty dies…with thunderous applause.'",
    "'Your eyes can deceive you. Don’t trust them.'",
    "'The Force is strong with this one.'",
    "'You have failed me for the last time'",
    "'Be careful not to choke on your aspirations'",
    "'Who's the more foolish: the fool, or the fool who follows him?'",
    "'Fear leads to anger, anger leads to hate, hate leads to suffering'",
    "'Once you start down the dark path, forever will it dominate you destiny'",
    "'When 900 years old you reach, look as good you will not'",
    "'I'd just as soon kiss a Wookiee'"
]

export interface QuoteGeneratorProps {
    quote: string
}

const QuoteGenerator: React.FC<QuoteGeneratorProps> = ({quote}) => {

    // const [quote, generateQuote] = useRandomQuote();

    // React.useEffect(() => {
    //     generateQuote(quotes)
    // }, [generateQuote])

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{quote}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 250,
        borderTopWidth: 3,
        borderTopColor: "#737373",
    },
    text: {
        paddingTop: 10,
        fontStyle: "italic",
        color: "#e6e6e6"
    }
})

export default QuoteGenerator;
