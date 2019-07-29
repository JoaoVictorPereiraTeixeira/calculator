import React from 'react'
import {ScrollView, View, FlatList,Text} from 'react-native'

const alunos = [
    {id: 1, nome: 'Joao', nota:7.9},
    {id: 2, nome: 'Ana',nota: 9.0},
    {id: 3, nome:'Silva',nota:8.9},
    {id: 4, nome:'Julianderson',nota: 9.9},
    {id: 5, nome:'rafael', nota: 10},
    {id: 6, nome:'anderson', nota: 9.9},
    {id: 7, nome:'mariana', nota: 8},
    {id: 8, nome:'Doido', nota: 10},
    {id: 9, nome:'AisTÉin', nota: 10},
    {id: 11, nome: 'Joao', nota:7.9},
    {id: 12, nome: 'Ana',nota: 9.0},
    {id: 13, nome:'Silva',nota:8.9},
    {id: 14, nome:'Julianderson',nota: 9.9},
    {id: 15, nome:'rafael', nota: 10},
    {id: 16, nome:'anderson', nota: 9.9},
    {id: 17, nome:'mariana', nota: 8},
    {id: 18, nome:'Doido', nota: 10},
    {id: 19, nome:'AisTÉin', nota: 10},
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',

    //Flex
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    //justifyContent: 'space-around',
    //alignItems: 'flex-start',
}

export const Aluno = props => {
    <View style ={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{fontWeight:'bold'}}>Nota: {props.nota}</Text>
    </View>
}

export default props => {
    const renderItem = ({item}) => {
        return <Aluno {...item}/>
    }

    return(
        <ScrollView>
            <FlatList 
            data={alunos} 
            renderItem={renderItem} 
            keyExtractor= {(_,index) => index.toString()}/>
        </ScrollView>
    )

}



 

