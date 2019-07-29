import React , {Component} from 'react'
import {View,Text,TouchableHighlight} from 'react-native'
import Padrao from '../estilo/Padrao'

export default class Contador extends Component{


    state = {
        numero : this.props.numeroInicial
    }

    
    constructor(props){
        super(props)
        //this.state = {/*.....*/}
        this.clicar = this.clicar.bind(this)
    }

    


    clicar(){
        this.setState({numero: this.state.numero + 1}) //Dentro da função Arrow... o this aponta para a propria instância
    }

    segurar = () => {
        this.setState({numero: this.props.numeroInicial})
    }


    render(){
        return(
            <View>
                <Text style = {{fontSize: 40}}>{this.state.numero} </Text>

                <TouchableHighlight 
                    onPress = {this.clicar}
                    onLongPress = {this.segurar}
                >            
                    <Text>Incrementar/Zerar</Text>
                </TouchableHighlight>
            </View>
        )
    }    
}

