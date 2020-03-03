import React from 'react'
import { StyleSheet, View, Text, Platform } from 'react-native'
import {theme} from '../theme'
import { AppTextBold } from './ui/AppTextBold'

export const Navbar = (props) => {
    return (
        <View style={{...styles.navbar, ...Platform.select({
            ios: styles.navbarIos,
            android: styles.navbarAndroid
        })}}>
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
    navbarAndroid: {
        backgroundColor: theme.dark_color
    },
    navbarIos: {
        backgroundColor: 'white',
        borderBottomColor: theme.dark_color,
        borderBottomWidth: 3
    },
    text: {
        color: Platform.OS === 'ios' ? theme.light_color : theme.dark_color,
        fontSize: 20,
        fontFamily: 'roboto-bold',
    }
})