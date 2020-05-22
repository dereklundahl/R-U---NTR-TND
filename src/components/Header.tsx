import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './NavBar';

export interface HeaderProps {
    setCategory: (id: string) => void,
    isSelected: string
}

const Header: React.FC<HeaderProps> = ({ setCategory, isSelected }) => {
    return (
        <View style={styles.Header}>
            <View style={styles.HeaderTitle}>
                <Text style={styles.HeaderText}>
                    Star Wars Stuff
                </Text>
            </View>
            <View style={styles.NavBarBorder}>
                <NavBar setCategory={setCategory} isSelected={isSelected}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Header: {
        paddingVertical: 20,
    },
    HeaderText: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: "bold",
        color: "#f0ebeb"
    },
    HeaderTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        backgroundColor: "#737373"
    },
    NavBarBorder: {
        paddingVertical: 5,
        borderBottomWidth: 5,
        borderBottomColor: '#737373'
    }
})

export default Header;
