import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { PlanetInterface } from '../hooks/api';

export interface ListItem { name: string, key: string}

const ListItem: React.FC<ListItem> = ({
    name,
    key
}) => {
    return (
        <View style={styles.container} key={key}>
            <Text>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    }
})


export default ListItem;
