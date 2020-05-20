import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { HeaderProps } from './Header';

export interface NavBarProps {
    setCategory: (category: string) => void,
    isSelected: string
}

const NavBar: React.FC<NavBarProps> = ({ setCategory, isSelected }) => {

    // Not sure if this makes sense here but I thought using tuples would be good
    const options: [number, string][] = [
        [1, "People"],
        [2, "Planets"],
        [3, "Films"],
        [4, "Species"],
        [5, "Vehicles"],
        [6, "Starships"]
    ]

    // Another use memo example
    const navBarList = React.useMemo(() => {
        return (
            options.map((option) => (
                <TouchableOpacity
                    key={option[0]}
                    onPress={() => setCategory(option[1])}
                >
                    <Text
                        style={(isSelected === option[1]) ?
                            Styles.Selected :
                            Styles.NotSelected}
                    >
                        {option[1]} /
                    </Text>
                </TouchableOpacity>
            ))
        )
    }, [options])

    return (
        <View style={Styles.NavBar}>
            {navBarList}
        </View>
    );
}

const Styles = StyleSheet.create({
    NavBar: {
        flexDirection: "row",
    },
    Selected: {
        fontWeight: "bold",
        textDecorationLine: "underline"
    },
    NotSelected: {
        fontWeight: "normal"
    }
})

export default NavBar;
