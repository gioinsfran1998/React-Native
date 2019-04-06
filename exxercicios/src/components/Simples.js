import React from 'react';
import { Text } from 'react-native';
import Padron from '../estilo/Padron'

// export default function(props) {
//     return <Text>{props.texto}</Text>
// }

export default props => <Text style={Padron.ex}>Arrow :{props.texto}</Text>
