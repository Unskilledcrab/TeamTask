import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  Image
} from 'react-native';

import styles from './styles';

class ScreenTwo extends Component {
  static navigationOptions = {
    drawerLabel: 'ScreenTwo',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./assets/test/chat-icon.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => this.props.navigation.openDrawer()}
          style={[styles.button, {backgroundColor: '#C56EE0'}]}>
          <Text style={styles.buttonText}>Go To Screen Three </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default ScreenTwo;
