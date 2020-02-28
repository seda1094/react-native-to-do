import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import {theme} from '../theme'

export const Navbar = (props) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        backgroundColor: theme.dark_color,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 10
    },
    text: {
        color: theme.light_color,
        fontSize: 20
    }
})