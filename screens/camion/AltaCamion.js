import { StatusBar } from 'expo-status-bar'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function AltaCamion() {
  return (
    <View style={StyleSheet.container}>
        <Text>
          
        </Text>
        <StatusBar style="auto"></StatusBar>
    </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default AltaCamion;
