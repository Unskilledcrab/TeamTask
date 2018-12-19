import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight,
  View, Image, ScrollView} from 'react-native';
import styles from '../styles';

import SubTasks from './pickerSubTasks';
import TaskName from './taskName';

class ScreenOne extends Component {

  constructor (props) {
    super(props)
    this.state = {
      subTaskSelected: '',
      taskName: ''
    };

    //this.handleSubTask = this.handleSubTask.bind(this)
  }

  static navigationOptions = {
    drawerLabel: 'Tasks',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../../assets/test/to-do-list.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  }

  handleSubTask(subTask) {
    this.setState({subTaskSelected: subTask})
  }

  handleTaskName(taskName) {
    this.setState({taskName: taskName})
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <Text style={[styles.buttonText, {padding:20, marginTop:10}]}>
          CREATE TASK
        </Text>
        <View style={[styles.container, {backgroundColor:'#F0F0F0'}]}>

          <TaskName headerText = "Task Name" />
          <TaskName headerText = "Task Description" />
          <SubTasks handleSubTask = {this.handleSubTask.bind(this)} />

          <TouchableHighlight
              onPress={() => navigate('ScreenTwo')}
              style={[styles.button, {marginTop:15, marginBottom:15}]}>
              <Text style={styles.buttonText}> Create Task </Text>
          </TouchableHighlight>

        </View>
      </ScrollView>
    );
  }
}

export default ScreenOne;
