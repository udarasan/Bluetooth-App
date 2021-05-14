import React, { Component } from 'react'
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'

export default class ScanScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={styeles.Scanscreen}>
                <Text style={styeles.Title}> Bluetooth </Text>
                <View style={styeles.ScanButtonRow}>
                    <TouchableOpacity style={styeles.ScanButton}>
                        <Text style={styeles.ButtonTitle}> SCAN </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styeles.SubTitle}>Devices</Text>
                </View>
                <View>
                    <View style={styeles.AvailableDevice}>
                        <TouchableOpacity>
                            <Text style={styeles.AvailableDeviceText}>AN Robot C1</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styeles.AvailableDevice}>
                        <TouchableOpacity>
                            <Text style={styeles.AvailableDeviceText}>AN Robot C2</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styeles = StyleSheet.create({

    Title: {
        fontSize: 20,
        top: 20,
        // alignItems: 'center',
        // justifyContent:'center',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#38fc74'
    },
    ScanButton: {
        height: 80,
        width: 80,
        // backgroundColor: '#2C2C2C',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        borderWidth: 4,
        borderColor: "#38fc74",
        margin: 10,
    },
    ScanButtonRow: {
        marginTop: 50,
        alignItems: 'center',
        marginBottom: 10
    },
    ButtonTitle: {
        fontWeight: 'bold',
        color: '#38fc74'
    },
    Scanscreen: {
        backgroundColor: '#302c2d',
        flex: 1,
    },
    SubTitle: {
        color: 'grey',
        fontSize: 15,
        marginLeft: 30,
        marginBottom: 8
    },
    AvailableDevice: {
        height: 50,
        borderBottomColor: 'white',
        borderWidth: 1,
        backgroundColor: '#348248',
        justifyContent: 'center'
    },
    AvailableDeviceText: {
        color: 'white',
        marginLeft: 30
    }

})