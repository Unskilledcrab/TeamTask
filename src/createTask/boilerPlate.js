import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaskName from './taskName';
import styles from '../styles';

class RequiredTasks extends Component {

  constructor (props) {
    super(props)
  }

  render() {
    return (
      <View style={[styles.containerInputs]}>
        <Text style={[styles.buttonText, {padding:20, marginTop:10}]}>
          Required Inputs {this.state.taskName}
        </Text>

        <TaskName headerText = "Task Name"
          onChangeText={(value) => this.setState({taskName: value})}/>
        <TaskName headerText = "Member / Team Assigned"
          onChangeText={(value) => this.setState({assignedBody: value})}/>
        <TaskName headerText = "Sign-Off Personnel"
          onChangeText={(value) => this.setState({signOff: value})}/>
      </View>
    );
  }
}

export default RequiredTasks;
