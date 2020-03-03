import React, {useState, useEffect} from 'react'
import { StyleSheet, View, FlatList, Image, Dimensions } from 'react-native'
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'
import {theme} from '../theme'


export const MainScreen = ({selectTodo, addTodo,todos,onRemove}) => {
    const [diviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width - theme.paddingHorizontal * 2)
    
    useEffect(() => {
        const update = () => {
            const width = Dimensions.get('window').width - theme.paddingHorizontal * 2
            setDeviceWidth(width)
        }
        Dimensions.addEventListener('change', update)
        return () => {
        Dimensions.removeEventListener('change', update)
        }

    })

    let content = ( 
    <View style={{ width: diviceWidth}}>
        <FlatList
            keyExtractor={item => item.id.toString()}
            data={todos}
            renderItem={({ item }) => 
            <Todo todo={item} onRemove={onRemove} selectTodo={selectTodo}/>}
        />
    </View>)

    if(todos.length <= 0){
        content = (
            <View style={styles.notFound}>
                <Image style={styles.notFoundImg} source={require('../../assets/giphy.gif')}/>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <AddTodo onSubmit={addTodo}></AddTodo>
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      minHeight: '100%',
      paddingHorizontal: theme.paddingHorizontal,
      paddingVertical: 20,
    },
    notFound: {
        width: '80%'
    },
    notFoundImg: {
        width: '100%'
    }
  });
  