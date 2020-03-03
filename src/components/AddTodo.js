import React, {useState} from 'react'
import {StyleSheet, View, TextInput, Alert, Keyboard} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import {theme} from '../theme'


export const AddTodo = ({onSubmit}) => {
    const [value, setValue] = useState("")
    const pressHandler = () => {
        if(value.trim()){
            onSubmit(value),
            setValue('')
            Keyboard.dismiss()
        }
        else{
            Alert.alert('please write title')
        }
    }
    return (
        <View style={styles.block}>
            <TextInput 
            value={value} 
            style={styles.input} 
            onChangeText={setValue}
            placeholder="title"
            autoCorrect={false}
            autoCapitalize='none'
            />
            {/* <Button 
            onPress={pressHandler} 
            color={theme.dark_color} 
            title="Add" />  */}
            <AntDesign.Button
            onPress={pressHandler} name="pluscircle">
                Add
            </AntDesign.Button>
        </View>
    )
}


const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 15
    },
    input: {
        borderBottomWidth: 4,
        borderBottomColor: theme.dark_color,
        color: theme.dark_color,
        padding: 5,
        width: '60%'
    },
    button: {

    }
})