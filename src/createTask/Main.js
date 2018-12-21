import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight,
  View, Image, ScrollView, ImageBackground, Dimensions} from 'react-native';
import styles from '../styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

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
      currentIndex: 0,
      index: 0,
      routes: [
        { key: 'required', title: 'Required'},
        { key: 'optional', title: 'Optional'},
      ]
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

  /* COME BACK TO THE CAROUSEL LATERRRRR FRUSTRATED UGHHHHHHHH

  FirstRoute = () => {
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
  };

  SecondRoute = () => {
    return (
      <View style={[styles.containerInputs]}>
        <Text style={[styles.buttonText, {padding:20, marginTop:10}]}>
          Optional Inputs
        </Text>
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
    );
  };
  */
  handleSubTask() {

  };

  render() {
    /* AHHHHHHH MORE CAROUSEL

    const FRoute = this.FirstRoute();
    const SRoute = this.SecondRoute();
    */

    const { navigate } = this.props.navigation;
    return (
      <KeyboardAwareScrollView>
        <ImageBackground style={{width: '100%', height: '100%'}} source={require('../../assets/test/background.jpg')}>
        <ScrollView style={styles.container}>
          <Text style={[styles.buttonText, {textShadowOffset:{width:-1, height:1}, textShadowColor: 'rgba(0,0,0,0.75)', textShadowRadius: 2, fontWeight: 'bold', fontSize: 24, padding:20, marginTop:10}]}>
            CREATE TASK
          </Text>
          <Text style={[styles.buttonText, {textTransform:'capitalize', fontSize: 20}]}>
            {this.state.taskName}
          </Text>

          <View style={[styles.containerInputs]}>
            <Text style={[styles.buttonText, {fontWeight:'bold', fontSize:18, padding:20, marginTop:10}]}>
              Required Inputs
            </Text>

            <TaskName headerText = "Task Name"
              onChangeText={(value) => this.setState({taskName: value})}/>
            <TaskName headerText = "Member / Team Assigned"
              onChangeText={(value) => this.setState({assignedBody: value})}/>
            <TaskName headerText = "Sign-Off Personnel"
              onChangeText={(value) => this.setState({signOff: value})}/>
          </View>

          {/* CAROUSEL UGHHHHHHH
          <TabView
            navigationState={this.state}
            renderScene={SceneMap({
              first: FRoute,
              second: SRoute,
            })}
            onIndexChange={index => this.setState({ index })}
            initialLayout={{ width: Dimensions.get('window').width }}
          />
          */}

          <View style={[styles.containerInputs]}>
            <Text style={[styles.buttonText, {fontWeight:'bold', fontSize:18, padding:20, marginTop:10}]}>
              Optional Inputs
            </Text>


            <SubTasks handleSubTask = {this.handleSubTask.bind(this)} />

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
