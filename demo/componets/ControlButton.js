import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native'


export default class ControlButton extends Component {
    render() {
        return (

            <TouchableOpacity style={styles.TouchableOpacity} onPress={() => {
                console.log('udara');
            }}>
                
                <Text style={{ color: "white" }}>STOP</Text>

                
                

            </TouchableOpacity>


        )
    }
}
const styles = StyleSheet.create({
    TouchableOpacity: {
        height: 80,
        width: 80,
        // backgroundColor: '#2C2C2C',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        borderWidth: 4,
        borderColor: "#38fc74",

        margin: 10
    }




})