import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CalendarTab from "./components/pages/Calendar";
import CountdownTab from "./components/pages/Countdown";
import SettingsTab from "./components/pages/Settings";
import AboutUsTab from "./components/pages/AboutUs";
import axios from "axios";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar />
            <Tab.Navigator
                initialRouteName="Counter"
                activeColor="#e91e63"
                barStyle={{ backgroundColor: "white" }}
            >
                <Tab.Screen
                    name="Calender"
                    component={CalendarTab}
                    options={{
                        tabBarLabel: "Calendar",
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons
                                name="account-child-outline"
                                color={color}
                                size={26}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Counter"
                    component={CountdownTab}
                    options={{
                        tabBarLabel: "Countdown",
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="bell" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Settings"
                    component={SettingsTab}
                    options={{
                        tabBarLabel: "Settings",
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="account" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="About us"
                    component={AboutUsTab}
                    options={{
                        tabBarLabel: "About us",
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="account" color={color} size={26} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
