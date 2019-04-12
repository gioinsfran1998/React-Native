import React from 'react';
import { View, Text } from 'react-native';
import Padron from '../estilo/Padron';

function paroimpar(num){
    // if ( num % 2 == 0) {
    //     return <Text style={Padron.ex}>Par</Text>
    // } else {
    //     return <Text style={Padron.ex}>Impar</Text>
    // }

    const v = num % 2 == 0 ? 'Par' : 'Impar'
    return <Text style={Padron.ex}>{v}</Text>
}


export default props => 
    <View>
        {
            paroimpar(props.numero)
        }
        {/* {
            props.numero % 2 == 0
            ? <Text style={Padron.ex}>Par</Text>
            : <Text style={Padron.ex}>Impar</Text>
        } */}
    </View>