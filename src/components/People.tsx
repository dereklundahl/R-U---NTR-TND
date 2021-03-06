import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { usePeople } from '../hooks/api';
import ListItem from './ListItem';

const People = () => {

    const [people, fetchPeople] = usePeople();

    React.useEffect(() => {
        fetchPeople();
    },[fetchPeople]);

    if(!people) return null;



    return (
        <View style={styles.People}>
            <Text style={styles.header}>People</Text>
            {people.map(person => (
                <ListItem
                    key={person.name}
                    name={person.name}
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    People: {
        paddingHorizontal: 20,
    },
    header: {
        color: "#ffffff",
        fontWeight: "bold",
        textDecorationLine: "underline"
    }
})

export default People;
