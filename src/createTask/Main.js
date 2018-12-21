import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight,
  View, Image, ScrollView, ImageBackground} from 'react-native';
import styles from '../styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import SubTasks from './pickerSubTasks';
import TaskName from './taskName';

class ScreenOne extends Component {

  constructor (props) {
    super(props)
    this.state = {
      subTaskSelected: '',
      taskName: '',
      description: '',
      signOff: '',
      assignedBody: '',
      dueDate: '',
      estimatedTime: '',
      priority: '',
      frequency: '',
      currentIndex: 0
    };
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

  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAwareScrollView>
        <ImageBackground style={{width: '100%', height: '100%'}} source={require('../../assets/test/background.jpg')}>
        <ScrollView style={styles.container}>
          <Text style={[styles.buttonText, {padding:20, marginTop:10}]}>
            CREATE TASK
          </Text>

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

          <View style={[styles.containerInputs]}>
            <Text style={[styles.buttonText, {padding:20, marginTop:10}]}>
              Optional Inputs
            </Text>

            {/*
            <SubTasks handleSubTask = {this.handleSubTask.bind(this)} />
            */}
            <TaskName headerText = "Task Description"
              onChangeText={(value) => this.setState({description: value})}/>
            <TaskName headerText = "SubTasks"
              onChangeText={(value) => this.setState({subTask: value})}/>
            <TaskName headerText = "Due Date"
              onChangeText={(value) => this.setState({dueDate: value})}/>
            <TaskName headerText = "Estimated Days to Complete"
              onChangeText={(value) => this.setState({estimatedTime: value})}/>
            <TaskName headerText = "Priority"
              onChangeText={(value) => this.setState({priority: value})}/>
            <TaskName headerText = "Frequency"
              onChangeText={(value) => this.setState({frequency: value})}/>

          </View>

          <TouchableHighlight
              onPress={() => navigate('ScreenTest')}
              style={[styles.button, {marginTop:15, marginBottom:15}]}>
              <Text style={styles.buttonText}> Create Task </Text>
          </TouchableHighlight>

        </ScrollView>
        </ImageBackground>
      </KeyboardAwareScrollView>
    );
  }
}

export default ScreenOne;
