import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export interface ListItem { name: string, key: string}

const ListItem: React.FC<ListItem> = ({
    name,
    key
}) => {
    return (
        <View style={styles.container} key={key}>
            <Text style={styles.text}>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    text: {
        color: '#ffffff'
    }
})


export default ListItem;
