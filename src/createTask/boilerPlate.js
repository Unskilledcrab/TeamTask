import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Items
} from 'react-native';

import styles from '../styles';

class SubTasks extends Component {

  constructor (props) {
    super(props)
    this.state = {
      items: [],
      selected: '',
      taskName: ''
    };
  }

  handleItemSelected (item) {
    this.setState({ selected: item});
  }

  render() {

    return (
      <View>

      </View>
    );
  }
}

export default SubTasks;
