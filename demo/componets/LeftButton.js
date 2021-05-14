import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

export default class LeftButton extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity style={styles.TouchableOpacity}>
                    {/* <Text style={{ color: "white" }}>Press Me</Text> */}

                    <Image style={styles.ControlImage} source={require('../assests/left-arrow.png')} />
                </TouchableOpacity>

            </View>
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
    },
    ControlImage: {
        width: 50,
        height: 50,
        marginRight: 10
    }
})
