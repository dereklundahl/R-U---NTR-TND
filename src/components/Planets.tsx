import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { usePlanets } from '../hooks/api';
import ListItem from './ListItem';

const Planets = () => {

    const [planets, fetchPlanets] = usePlanets();

    React.useEffect(() => {
        fetchPlanets();
    },[fetchPlanets]);

    if(!planets) return null;



    return (
        <View style={styles.planets}>
            <Text style={styles.header}>Planets</Text>
            {planets.map(planet => (
                <ListItem
                    key={planet.name}
                    name={planet.name}
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    planets: {
        paddingHorizontal: 20,
    },
    header: {
        fontWeight: "bold",
        textDecorationLine: "underline"
    }
})

export default Planets;
