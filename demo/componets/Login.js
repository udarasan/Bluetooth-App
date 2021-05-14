import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'

export default class Login extends Component {
    render() {
        return (
            <View>
                <Text> LoginComponets </Text>
                <Image
                source={require('../assests/v.png')}
                style={{width:360,height:200}}
                />
            </View>
        )
    }
}
