import React, {useState} from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import {AppCard} from  '../components/ui/AppCard'
import {theme} from '../theme'
import { EditModal } from '../components/EditModal'
import { AppTextBold } from '../components/ui/AppTextBold'
import { AppButton } from '../components/ui/AppButton'

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
                    <AppTextBold style={styles.title}>{selectedTodo.title}</AppTextBold>
                </View>
                <View style={styles.edit}>
                    <AppButton color={theme.dark_color} onPress={openModal}>
                        <AntDesign name='edit' size={20}/>
                    </AppButton>
                </View>
            </AppCard>
            <View style={styles.buttonsBlock}>
                <AppButton style={styles.button} color={theme.red} onPress={() => removeTodo(selectedTodo.id)}>
                    <AntDesign name='delete' size={20}/>
                </AppButton>
                <AppButton style={styles.button} onPress={goBack}>
                    <AntDesign name='stepbackward' size={20}/>
                </AppButton>
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
        width: Dimensions.get('window').width/2
    }
})