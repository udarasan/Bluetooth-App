import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import CardExample from './componets/CardExample';
import { NavigationContainer } from '@react-navigation/native';
import ControlScreen from './screens/ControlScreen';
import ScanScreen from './screens/ScanScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FlatList } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();
export default class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator tabBarOptions={{
                    showLabel: false,
                    style: {
                        backgroundColor: '#302c2d',
                    }
                }}>
                    <Tab.Screen name="ScanScreen" component={ScanScreen}
                        options={
                            {
                                tabBarIcon: ({ focused }) => (
                                    <View >
                                        <Text style={{ color: focused ? '#38fc74' : 'white' }}>SCAN</Text>
                                    </View>
                                )
                            }
                        } />
                    <Tab.Screen name="ControlScreen" component={ControlScreen} options={
                        {
                            tabBarIcon: ({ focused }) => (
                                <View>
                                    <Text style={{ color: focused ? '#38fc74' : 'white' }}>CONTROL</Text>
                                </View>
                            ),
                        }
                    } />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}



