import React,  { useState }  from 'react'
import {View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native'

export const AddTodo = ({onSubmit}) => {

    const [value, setValue] = useState(' ')
    const pressHandler = () => {
        if(value.trim()){
            onSubmit(value)
            setValue('')
        }
        else{
            Alert.alert("Todo can't be Empty")
        }
    } 

    return(
        <View style={styles.block}>
            <TextInput 
            onChangeText={setValue} 
            value={value} 
            placeholder='write todo' 
            style={styles.input}
            autoCorrect={false} 
            autoCapitalize='words'
            // keyboardType='number-pad'
            />
            <Button color="#527318" style={styles.button} title="Add" onPress={pressHandler} />
        </View>
    )
}


const styles = StyleSheet.create({
    block:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 15
    },
    input:{
        width: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#ffe75e',
        color: '#ffe75e'
    },

})