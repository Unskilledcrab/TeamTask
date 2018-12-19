import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

import styles from '../styles';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';


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
        <Sae
          style={{    alignSelf: 'stretch',
              marginLeft: 50,
              marginRight: 50,
              marginBottom: 5,
              borderRadius: 5,
              height: 40}}
          label={this.props.headerText}
          onChangeText = {(text) => this.setState({ first_name: text})}
          iconClass={FontAwesomeIcon}
          iconName={'pencil'}
          labelStyle={{ color: '#9FC5E8' }}
          inputStyle={{ color: '#9FC5E8' }}
          iconColor={'#9FC5E8'}
          // TextInput props
          autoCapitalize={'none'}
          autoCorrect={false}
        />
      </View>
    );
  }
}

export default SubTasks;
