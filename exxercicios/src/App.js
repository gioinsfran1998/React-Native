 import React, { Component } from 'react';
 import { StyleSheet, View } from 'react-native';
 
 import Simples from './components/Simples';
 import Parimpar from './components/Parimpar';
 import { Inverter, MegaSena } from './components/Multi';

 export default class App extends Component {
      render() {
        return  (
          <View style={styles.container}>
            <Simples texto='Giovanni Insfran'/> 
            <Parimpar numero={30} /> 
            <Inverter texto='React Nativo !'/>
            <MegaSena numeros={6}/>

          </View>
        )
      };
 }

 const styles = StyleSheet.create({
      container: {
          flex: 1,
          justifyContent: 'center',
          borderRadius: 4,
          borderWidth: 0.5,
          alignItems: 'center'
      }
 })