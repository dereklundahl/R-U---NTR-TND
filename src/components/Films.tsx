import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useFilms } from '../hooks/api';
import ListItem from './ListItem';

const Films = () => {

    const [films, fetchFilms] = useFilms();

    React.useEffect(() => {
        fetchFilms();
    },[fetchFilms]);

    if(!films) return null;

    return (
        <View style={styles.films}>
            <Text style={styles.header}>Films</Text>
            {films.map(film => (
                <>
                <ListItem
                    key={film.title}
                    name={film.title}
                />
                <Text>{film.opening_crawl}</Text>
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

export default Films;
