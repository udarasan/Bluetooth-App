import React, { Component } from 'react';

import ControlScreen from '../screens/ControlScreen';
import ScanScreen from '../screens/ScanScreen';
import { StyleSheet, View, Image } from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { color } from 'react-native-reanimated';

export default class AnatomyExample extends Component {

  render() {
    return (
      <Container >
        <Header style={styles.Header}>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Controller</Title>
          </Body>
          <Right />
        </Header>
        <Content style={styles.View} >
          <ControlScreen />
        </Content>
        <Footer >
          <FooterTab style={styles.Footer}>
            <Button onPress={() => {this.props.navigation.navigate('ScanScreen')}}>
              <Text style={{ color: 'white' }}>Scan</Text>
            </Button>
            <Button onPress={() => {this.props.navigation.navigate('ControlScreen')}}>
              <Text style={{ color: 'white' }}>Control</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  View: {
    backgroundColor: '#302c2d',
    top: 100
  },
  Header: {
    backgroundColor: 'black'
  },
  Footer: {
    backgroundColor: 'black'
  }
})

