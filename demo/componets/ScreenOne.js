import React, { Component } from 'react'
import { Container,Content, Button, Text } from 'native-base';

export default class ScreenOne extends Component {
    render() {
        return (
            <Container>
        <Content>
          <Button onPress={()=>{
              this.props.navigation.navigate('CustomeButton')
          }}>
            <Text>Click Me!</Text>
          </Button>
        </Content>
      </Container>
        )
    }
}
