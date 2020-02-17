import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export const Todo = ({ todo, onRemove }) => {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={() => {
            console.log("pressed", todo.id)
        }}
            onLongPress={onRemove.bind(null, todo.id)}>
            <View style={styles.todo} >
                <Text style={styles.text}>{todo.title}</Text>
            </View>
        </TouchableOpacity>
    ) 
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        padding: 15,
        borderWidth: 3,
        alignItems: 'center',
        borderColor: '#ffe75e',
        borderRadius: 15,
        marginBottom: 10,
        backgroundColor: '#feb72b'

    },
    text: {
        color: '#899857'
    }
})