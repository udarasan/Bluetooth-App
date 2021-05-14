import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default class CustomeButton extends Component {
    render() {
        return (
            <View style={styles.View}>
                <TouchableOpacity style={styles.TouchableOpacity1}>
                    <Text style={{ color:"white"}}>Press Me</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.TouchableOpacity2}>
                    <Text style={{ color:"white"}}>Press Me</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.TouchableOpacity3}>
                    <Text style={{ color:"white"}}>Press Me</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.TouchableOpacity4}>
                    <Text style={{ color:"white"}}>Press Me</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({

    View:{
        justifyContent: 'center',
        alignItems: 'center',
        flex:1
    },

    TouchableOpacity1: {
        backgroundColor: "#00b51a",
        alignItems: "center",
        justifyContent: "center",
        width: 80,
        height: 80,
        borderRadius: 100
    },
    TouchableOpacity2: {
        backgroundColor: "#00b51a",
        alignItems: "center",
        justifyContent: "center",
        width: 80,
        height: 80,
        right:100,
        borderRadius: 100

    },
    TouchableOpacity3: {
        backgroundColor: "#00b51a",
        alignItems: "center",
        justifyContent: "center",
        width: 80,
        height: 80,
        borderRadius: 100

    },
    TouchableOpacity4: {
        backgroundColor: "#00b51a",
        alignItems: "center",
        justifyContent: "center",
        width: 80,
        height: 80,
        borderRadius: 100

    }

})
