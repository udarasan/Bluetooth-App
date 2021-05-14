import React, { Component } from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native'
import UpButton from '../componets/UpButton';
import DownButton from '../componets/DownButton';
import LeftButton from '../componets/LeftButton';
import RightButton from '../componets/RightButton';
import ControlButton from '../componets/ControlButton';

export default class ControlScreen extends Component {
    render() {
        return (
            <View style={styles.View}>
                <View style={styles.UpButton}>
                    <UpButton />
                </View>
                <View style={styles.MiddleButton}>
                    <LeftButton />
                    <ControlButton />
                    <RightButton />
                </View >
                <View style={styles.DownButton}>
                    <DownButton />
                </View>
                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    View: {
        backgroundColor: '#302c2d',
        flex: 1,
        justifyContent:'center'
    },
    UpButton: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    MiddleButton: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    DownButton: {
        justifyContent: 'center',
        alignItems: 'center',

    }
})


