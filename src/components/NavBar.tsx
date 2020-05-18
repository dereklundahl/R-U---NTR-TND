import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { HeaderProps } from './Header';

export interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {

    const [isSelected, setIsSelected] = React.useState(false);

    const toggleSelected = React.useCallback(() => {
        setIsSelected(!isSelected)
    }, [isSelected, setIsSelected])


    return (
        <View style={styles.NavBar}>
            <TouchableOpacity onPress={toggleSelected}>
                <Text style={isSelected ? styles.Selected : styles.NotSelected}> People /</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleSelected}>
                <Text style={isSelected ? styles.Selected : styles.NotSelected}> Planets /</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={isSelected ? styles.Selected : styles.NotSelected}> Films /</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={isSelected ? styles.Selected : styles.NotSelected}> Species /</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={isSelected ? styles.Selected : styles.NotSelected}> Vehicles /</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={isSelected ? styles.Selected : styles.NotSelected}> Starships</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    NavBar: {
        flexDirection: "row",
    },
    Selected: {
        fontWeight: "bold",
    },
    NotSelected: {
        fontWeight: "normal"
    }
})

export default NavBar;
