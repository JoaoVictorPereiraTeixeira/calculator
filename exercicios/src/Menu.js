import React from 'react'
import {createDrawerNavigator} from 'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import Inverter, { MegaSena } from './componentes/Multi'
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'
import Eventos from './componentes/Evento'
import Avo from './componentes/comunicacaoDireta'
import {TextoSincronizado} from './componentes/comunicacaoIndireta' //está sem import Default
import ListaFlex from './componentes/ListaFlex'

export default createDrawerNavigator({
    ListaFlex: {
        screen: ListaFlex,
        navigationOptions: {title: 'Texto Sincronizado'}
    },
    TextoSincronizado:{
        screen: () => <TextoSincronizado/>
    },
    Avo: {
        screen: () => <Avo nome='Jacinto' sobrenome = 'Doido' />
    },
    Eventos: {
        screen: () => <Eventos/>  
    },
    ValidarProps: {
        screen: () => <ValidarProps label = 'Teste' ano={18}/>
    },
    Plataformas: {
        screen: () => <Plataformas />
    },
    Contador : {
        screen: () => <Contador numeroInicial={15}/>
    },
    MegaSena: {
        screen: () => <MegaSena numeros={8} />,
        navigationOptions: { title: 'Mega aqui Sena' }
    },
    Inverter: {
        screen: () => <Inverter texto='React Nativo!' />
    },
    ParImpar: {
        screen: () => <ParImpar numero={30} />,
        navigationOptions: { title: 'Par & Ímpar' }
    },
    Simples: {
        screen: () => <Simples texto='Flexível!!!' />
    }
}, { drawerWidth: 300 })