import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useVehicles } from '../hooks/api';
import ListItem from './ListItem';

const Vehicles = () => {

    const [vehicles, fetchVehicles] = useVehicles();

    React.useEffect(() => {
        fetchVehicles();
    },[fetchVehicles]);

    if(!vehicles) return null;

    return (
        <View style={styles.films}>
            {console.log('species', vehicles)}
            <Text style={styles.header}>Vehicles</Text>
            {vehicles.map(vehicle => (
                <>
                <ListItem
                    key={vehicle.name}
                    name={vehicle.name}
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

export default Vehicles;
