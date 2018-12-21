import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import styles from '../styles';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';

class SubTasks extends Component {
  constructor (props) {
    super(props)
  }

  render() {
  const color = '#000000';
      return (
      <View style={{flex:1}}>
        <Sae
          style={styles.seaInputs}
          label={this.props.headerText}
          onChangeText = {(text) => this.props.onChangeText(text)}
          iconClass={FontAwesomeIcon}
          iconName={'pencil'}
          labelStyle={{ color: color }}
          inputStyle={{ color: color}}
          iconColor={color}
          // TextInput props
          autoCapitalize={'none'}
          autoCorrect={false}
        />
      </View>
    );
  }
}

export default SubTasks;
