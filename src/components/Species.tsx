import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSpecies } from '../hooks/api';
import Planet from './ListItem';

const Species = () => {

    const [species, fetchSpecies] = useSpecies();

    React.useEffect(() => {
        fetchSpecies();
    },[fetchSpecies]);

    if(!species) return null;

    return (
        <View style={styles.films}>
            {console.log('species', species)}
            <Text style={styles.header}>Species</Text>
            {species.map(spec => (
                <>
                <Planet
                    key={spec.name}
                    name={spec.name}
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
        fontWeight: "bold",
        textDecorationLine: "underline"
    }
})

export default Species;
