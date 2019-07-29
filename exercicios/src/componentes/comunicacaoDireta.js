import React from 'react'
import {View, Text} from 'react-native'
import ValidarProps from './ValidarProps';

const fonte = { style: {fontSize:30}}

function filhosComProps(props){
    return React.Children.map(props.children, c => React.cloneElement(c,{...props,...c.props}))
}

export const Filho = props => 
    <View>
        <Text {...fonte}>Filho: {props.nome} {props.sobrenome} </Text>

    </View>

export const Pai = props => 
    <View>
        <Text {...fonte}>Pai: {props.nome} {props.sobrenome} </Text>
        {filhosComProps(props)}
    </View>

export const Avo = props=> 
    <View>
        <Text {...fonte}>Avô: {props.nome} {props.sobrenome}</Text>

        <Pai nome = 'Joao' sobrenome= {props.sobrenome} >
            <Filho nome ='Junior' />
            <Filho  nome ='Ana' />
        </Pai>

        <Pai  nome = 'Julio' sobrenome = {props.sobrenome}>
            <Filho nome = 'Sara'/>
            <Filho nome = 'Fernanda'/>
        </Pai>

    </View>

export default Avo
