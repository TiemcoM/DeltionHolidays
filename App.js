import {StatusBar} from "expo-status-bar";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CalendarTab from "./components/pages/Calendar";
import CountdownTab from "./components/pages/Countdown";
import SettingsTab from "./components/pages/Settings";
import AboutUsTab from "./components/pages/AboutUs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Location from "expo-location";

const Tab = createMaterialBottomTabNavigator();

const init = async () => {
    try {
        const value = await AsyncStorage.getItem("Region");
        if (value !== null) {
        } else {
            setRegion();
        }
    } catch (e) {
        console.log(e);
    }
};

const setRegion = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
        console.log("permission not granted");
    }

    const userLocation = await Location.getCurrentPositionAsync();
    console.log(userLocation);
    let region = "";
    if (userLocation.coords.latitude >= 53) {
        region = "noord";
    }
    if (userLocation.coords.latitude < 53) {
        region = "midden";
    }
    if (userLocation.coords.latitude <= 52) {
        region = "zuid";
    }
    try {
        await AsyncStorage.setItem("Region", region);
    } catch (e) {
        console.log(e);
    }
};


export default function App() {
    init();
    return (
        <NavigationContainer>
            <StatusBar/>
            <Tab.Navigator
                initialRouteName="Counter"
                activeColor="#e91e63"
                barStyle={{backgroundColor: "white"}}
            >
                <Tab.Screen
                    name="Calender"
                    component={CalendarTab}
                    options={{
                        tabBarLabel: "Calendar",
                        tabBarIcon: ({color}) => (
                            <MaterialCommunityIcons name="calendar" color={color} size={26}/>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Counter"
                    component={CountdownTab}
                    options={{
                        tabBarLabel: "Countdown",
                        tabBarIcon: ({color}) => (
                            <MaterialCommunityIcons name="alarm" color={color} size={26}/>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Settings"
                    component={SettingsTab}
                    options={{
                        tabBarLabel: "Settings",
                        tabBarIcon: ({color}) => (
                            <MaterialCommunityIcons name="cog-outline" color={color} size={26}/>
                        ),
                    }}
                />
                <Tab.Screen
                    name="About us"
                    component={AboutUsTab}
                    options={{
                        tabBarLabel: "About us",
                        tabBarIcon: ({color}) => (
                            <MaterialCommunityIcons name="account" color={color} size={26} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
