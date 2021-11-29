import { StatusBar } from 'expo-status-bar'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


function AltaEncargado({ navigation }) {
  return (
    <View style={StyleSheet.container}>
        <Text>Bienvenido!</Text>
        <StatusBar style="auto"></StatusBar>
    </View>
  );
}

export default AltaEncargado;
