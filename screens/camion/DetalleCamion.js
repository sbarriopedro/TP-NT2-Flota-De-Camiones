import { StatusBar } from 'expo-status-bar'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
/*import constants from '../../servicios/constants';
import {getCamiones} from '../../servicios/camion.js'*/

/*
const [aCamiones, setACamiones] = usestate ([]);

useEffect(()=>{
  getCamiones.then(res => res.json())
    .then(data => {  
      setACamiones (data);
    })
    .catch(err => {
      console.error(err)
    })
},[])
*/

function DetalleCamion({ navigation }) {
  return (
    <View style={StyleSheet.container}>
        <Text>Detalle de camion</Text>
        <StatusBar style="auto"></StatusBar>
    </View>
  );
}

export default DetalleCamion;
