import { StatusBar } from 'expo-status-bar'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


function AltaChofer({ navigation }) {
  return (
    <View style={StyleSheet.container}>
        <Text>Bienvenido!</Text>
        <StatusBar style="auto"></StatusBar>
    </View>
  );
}

export default AltaChofer;
