import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { PlanetInterface } from '../hooks/api';

export interface PlanetProps extends PlanetInterface {}

const Planet: React.FC<PlanetProps> = ({
    name,
}) => {
    return (
        <View style={styles.container}>
            <Text>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    }
})


export default Planet;
