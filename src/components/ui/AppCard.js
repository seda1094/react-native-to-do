import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { theme } from '../../theme'


export const AppCard = (props) => (
    <View style={{...styles.mainBlock, ...props.style}}>
        {props.children}
    </View>
)


const styles = StyleSheet.create({
    mainBlock: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        padding: 20,
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: { width: 2, height: 2 },
        elevation: 8,
        borderRadius: 10,
        width: '90%',
        alignSelf: 'center'

    },


})