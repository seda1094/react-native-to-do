import React, {useState} from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Modal, TextInput, Button, Alert } from 'react-native'
import {theme} from '../theme'


export const EditModal = ({visible, onCancel, selectedTodo, edit}) => {
    const [value, setValue] = useState(selectedTodo.title)

    const onSave = () => {
        if(value.trim()){
            edit(selectedTodo.id, value)
            setValue('')
        }
        else{
            Alert.alert("write a title")
        }
    }
    return (
        <Modal visible={visible} animationType='slide' transparent={false}>
            <View style={styles.wrap}>
                <TextInput value={value} style={styles.input} onChangeText={setValue}/>
                <View style = {styles.buttons}>
                    <Button title="save" onPress={onSave}/>
                    <Button title="cancel" onPress={onCancel}/>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        borderBottomColor: theme.dark_color,
        borderBottomWidth: 4,
        margin: 20,
        height: 60,
        fontSize:30
    },
    buttons: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})