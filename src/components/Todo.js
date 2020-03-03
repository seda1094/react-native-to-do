import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import {theme} from '../theme'
import { AppTextBold } from './ui/AppTextBold'

export const Todo = ({ todo, onRemove, selectTodo }) => {
    return (
        <TouchableOpacity
            onPress={()=>selectTodo(todo.id)}
            onLongPress={() => {
                onRemove(todo.id)
            }}>
            <View style={styles.todo}>
                <AppTextBold style={styles.titleStyle}>{todo.title}</AppTextBold>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        backgroundColor: theme.light_color,
        borderWidth: 3,
        borderColor: theme.dark_color,
        padding: 10,
        margin: 10,
        height:50,
        borderRadius: 10,
    },
    titleStyle: {
        fontFamily: 'roboto-regular',

    }
})