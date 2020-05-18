import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './NavBar';

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
    return (
        <View style={styles.Header}>
            <View style={styles.HeaderTitle}>
                <Text style={styles.HeaderText}>
                    Star Wars Stuff
                </Text>
            </View>
            <View>
                <NavBar />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Header: {
        paddingVertical: 40,
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
        backgroundColor: "#997f7d"
    }
})

export default Header;
