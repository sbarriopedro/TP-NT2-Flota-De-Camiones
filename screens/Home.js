import { StatusBar } from 'expo-status-bar'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


function Home({ navigation }) {
  return (
    <View style={StyleSheet.container}>
      <StatusBar style="auto"></StatusBar>
    </View>
  );
}

export default Home;
