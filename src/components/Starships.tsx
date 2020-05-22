import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useStarships } from '../hooks/api';
import ListItem from './ListItem';

const Starships = () => {

    const [starships, fetchStarships] = useStarships();

    React.useEffect(() => {
        fetchStarships();
    },[fetchStarships]);

    if(!starships) return null;

    return (
        <View style={styles.films}>
            <Text style={styles.header}>Starships</Text>
            {starships.map(starship => (
                <>
                <ListItem
                    key={starship.name}
                    name={starship.name}
                />
                </>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    films: {
        paddingHorizontal: 20,
    },
    header: {
        color: "#ffffff",
        fontWeight: "bold",
        textDecorationLine: "underline"
    }
})

export default Starships;
