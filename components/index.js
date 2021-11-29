import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../screens/Home';
import Login from '../screens/Login';
import HomeConductor from '../screens/HomeConductor';
import AltaCamion from '../screens/camion/AltaCamion';
import BajaCamion from '../screens/camion/BajaCamion';
import DetalleCamion from '../screens/camion/DetalleCamion';
import EditarCamion from '../screens/camion/EditarCamion';
import AltaChofer from '../screens/chofer/AltaChofer';
import BajaChofer from '../screens/chofer/BajaChofer';
import DetalleChofer from '../screens/chofer/DetalleChofer';
import EditarChofer from '../screens/chofer/EditarChofer';
import AltaEncargado from '../screens/encargado/AltaEncargado';
import BajaEncargado from '../screens/encargado/BajaEncargado';
import DetalleEncargado from '../screens/encargado/DetalleEncargado';
import EditarEncargado from '../screens/encargado/EditarEncargado';



export default function StackNavigator() {

    const Stack = createStackNavigator()

    return (
        <StackNavigator initialRouteName={"Home"}>
            <Stack.Screen name={"Login"} component={Login}></Stack.Screen>
            <Stack.Screen name={"Home"} component={Home}></Stack.Screen>
            <Stack.Screen name={"HomeConductor"} component={HomeConductor}></Stack.Screen>
            {/*
            <Stack.Screen name={"AltaCamion"} component={AltaCamion}></Stack.Screen>
            <Stack.Screen name={"BajaCamion"} component={BajaCamion}></Stack.Screen>
            <Stack.Screen name={"DetalleCamion"} component={DetalleCamion}></Stack.Screen>
            <Stack.Screen name={"EditarCamion"} component={EditarCamion}></Stack.Screen>
            <Stack.Screen name={"AltaChofer"} component={AltaChofer}></Stack.Screen>
            <Stack.Screen name={"BajaChofer"} component={BajaChofer}></Stack.Screen>
            <Stack.Screen name={"DetalleChofer"} component={DetalleChofer}></Stack.Screen>
            <Stack.Screen name={"EditarChofer"} component={EditarChofer}></Stack.Screen>
            <Stack.Screen name={"AltaEncargado"} component={AltaEncargado}></Stack.Screen>
            <Stack.Screen name={"BajaEncargado"} component={BajaEncargado}></Stack.Screen>
            <Stack.Screen name={"DetalleEncargado"} component={DetalleEncargado}></Stack.Screen>
            <Stack.Screen name={"EditarEncargado"} component={EditarEncargado}></Stack.Screen>
             */}
        </StackNavigator>
    )
}