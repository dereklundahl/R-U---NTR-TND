import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

const NavBar = () => {
    return (
        <View style={styles.NavBar}>
            <TouchableOpacity>
                <Text> People /</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text> Planets /</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text> Films /</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text> Species /</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text> Vehicles /</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text> Starships</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    NavBar: {
        flexDirection: "row",
    },
})

export default NavBar;
