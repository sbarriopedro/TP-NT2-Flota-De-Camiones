import { StatusBar } from 'expo-status-bar'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


function Login({ navigation }) {
  return (
    <View style={StyleSheet.container}>
        <Text>Por favor introduzca su usuario y contraseña</Text>
        <StatusBar style="auto"></StatusBar>
    </View>
  );
}

export default Login;
