import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  ScrollView,
} from 'react-native';

import styles from '../styles';

class ScreenTest extends Component {

  constructor (props) {
    super(props)
    this.state = {
      test:''
    };
  }

  static navigationOptions = {
    drawerLabel: 'Test',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../../assets/test/to-do-list.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <View style={[styles.container, { paddingTop: 25}]}>
          <Text>THIS IS A TESTING SCREEN</Text>
        </View>


      </ScrollView>
    );
  }
}

export default ScreenTest;
