import React, {useState} from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import {AppCard} from  '../components/ui/AppCard'
import {theme} from '../theme'
import { EditModal } from '../components/EditModal'

export const TodoScreen = ({selectedTodo, goBack, removeTodo, edit}) => {
    const [modal,setModal] = useState(false)
    const openModal = () => {
        setModal(true)
    }
    return (
        <View style={styles.container} >
            <EditModal visible={modal} edit={edit} selectedTodo={selectedTodo} onCancel={() => setModal(false)} />
            <AppCard style={styles.card}>
                <View style={styles.content}>
                    <Text style={styles.title}>{selectedTodo.title}</Text>
                </View>
                <View style={styles.edit}>
                    <Button color='#d45079' title="edit" onPress={openModal}/>
                </View>
            </AppCard>
            <View style={styles.buttonsBlock}>
                <Button color='#d45079' title="delete" onPress={() => removeTodo(selectedTodo.id)}/>
                <Button title="back" onPress={goBack}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        margin: 20,
        padding: 45,
        height:'20%',
        backgroundColor: '#ccc',

    },
    buttonsBlock: {
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    content: {
        minHeight: '30%',
        width: '65%',
        padding:10
    },
    title: {
        fontSize: 22
    },
    container: {
        // backgroundColor: theme.ligther_color,
        minHeight: '100%'
    },
    button:{

    }
})