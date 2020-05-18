import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export interface PersonProps {
    name: string;
}

const Person: React.FC<PersonProps> = ({
    name,
}) => {
    return (
        <View style={styles.constainer}>
            <Text>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    constainer: {
        marginVertical: 10,
    }
})


export default Person;
