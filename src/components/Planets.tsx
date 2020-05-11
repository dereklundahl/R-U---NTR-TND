import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { usePlanets } from '../hooks/api';

const Planets = () => {

    const [planets, fetchPlanets] = usePlanets();

    React.useEffect(() => {
        fetchPlanets();
    },[fetchPlanets]);

    if(!planets) return null;

    return (
        <View style={styles.planets}>
            <Text>{JSON.stringify(planets?.[0].diameter)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    planets: {
        paddingHorizontal: 20,
    }
})

export default Planets;
