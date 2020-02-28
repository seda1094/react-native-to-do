import React from 'react'
import { StyleSheet, View, FlatList, Image } from 'react-native'
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'
import {theme} from '../theme'


export const MainScreen = ({selectTodo, addTodo,todos,onRemove}) => {
    let content = ( <FlatList
        keyExtractor={item => item.id.toString()}
        data={todos}
        renderItem={({ item }) => <Todo todo={item} onRemove={onRemove} selectTodo={selectTodo}/>}
    />)

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
      paddingHorizontal: 30,
      paddingVertical: 20,
    },
    notFound: {
        width: '80%'
    },
    notFoundImg: {
        width: '100%'
    }
  });
  