import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Title} from "react-native-paper";
import {ListItem, Avatar} from 'react-native-elements'

function HomeScreen() {
    return (
        <View>

            <Text>Overzicht van alle vakanties</Text>
            {
                vakantieList.map((item, i) => (
                    <ListItem key={i} bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title>{item.title}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron/>
                    </ListItem>
                ))
            }
        </View>
    );
}

const vakantieList = [
    {
        title: 'Kerstvakantie',
        startDate: '',
        endDate: '',
    },
    {
        title: 'Voorjaarsvakantie',
        startDate: '',
        endDate: '',
    },
    {
        title: 'Meivakantie',
        startDate: '',
        endDate: '',
    },
    {
        title: 'Zomervakantie',
        startDate: '',
        endDate: '',
    },
    {
        title: 'Herstvakantie',
        startDate: '',
        endDate: '',
    },
]

function CountdownScreen() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Countdown!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Settings!</Text>
        </View>
    );
}

function AboutUsScreen() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Title>About us!</Title>
        </View>
    );
}

const Tab = createMaterialBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Kalender"
                activeColor="#e91e63"
                barStyle={{backgroundColor: 'tomato'}}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({color}) => (
                            <MaterialCommunityIcons name="home" color={color} size={26}/>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Countdown"
                    component={CountdownScreen}
                    options={{
                        tabBarLabel: 'Countdown',
                        tabBarIcon: ({color}) => (
                            <MaterialCommunityIcons name="bell" color={color} size={26}/>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{
                        tabBarLabel: 'Settings',
                        tabBarIcon: ({color}) => (
                            <MaterialCommunityIcons name="account" color={color} size={26}/>
                        ),
                    }}
                />
                <Tab.Screen
                    name="About us"
                    component={AboutUsScreen}
                    options={{
                        tabBarLabel: 'About us',
                        tabBarIcon: ({color}) => (
                            <MaterialCommunityIcons name="bacteria-outline" color={color} size={26}/>
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
