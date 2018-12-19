import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  TextInput,
  ScrollView,
  Item,
  Picker,
  ActivityIndicator,
  Platform
} from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import RNPickerSelect from 'react-native-picker-select';

import styles from './styles';

var items = [
  {
    id: 1,
    name: 'Jeremy',
  },
  {
    id: 2,
    name: 'Hobbie',
  },
  {
    id: 3,
    name: 'Casey',
  }
];

var days = [
  {
    label: '1',
    value: '1'
  }
]

class ScreenOne extends Component {

  constructor (props) {
    super(props)
    this.state = {
      myNumber: "",
      selected1: "key1",
      first_name: '', last_name: '',
      loading: false, disabled: false,
      numOfDays: "1"
    };
  }

  saveData = () =>
  {
      this.setState({ loading: true, disabled: true }, () =>
      {
          fetch('http://www.sullytech.com/TTphp/CreateTask.php',
          {
              method: 'POST',
              headers:
              {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(
              {
                  taskName: this.state.first_name,
                  taskDescription: 'test2',
                  daysToComplete: 10,
                  subTasks: 1,
                  dueDate: '1/1/2018',
                  signOffPersonnel: 5,
                  priority: 1,
                  frequency: 2,
                  assignedPersonnel: 4,
              })

          }).then((response) => response.json()).then((responseJson) =>
          {
              alert(responseJson);
              this.setState({ loading: false, disabled: false });
          }).catch((error) =>
          {
              alert("an error occurred");
              console.error(error);
              this.setState({ loading: false, disabled: false });
          });
      });
  }

  static navigationOptions = {
    drawerLabel: 'Tasks',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./assets/test/to-do-list.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  }

  onChanged(text){
    let newText = '';
    let numbers = '0123456789';

    for (var i=0; i < text.length; i++) {
        if(numbers.indexOf(text[i]) > -1 ) {
            newText = newText + text[i];
        }
        else {
            // your call back function
            alert("please enter numbers only");
        }
    }
    this.setState({ myNumber: newText });
  }

  updateMyNumber = (user) => {
    this.setState({ myNumber: user })
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <Text style={[styles.buttonText, {padding:20, marginTop:10}]}>
          CREATE TASK
        </Text>

        <View
          style={[styles.container, {backgroundColor:'#F0F0F0'}]}
        >
          <Text style={[styles.inputHeaders, {marginTop:20}]}>
            Task Name
          </Text>
          <TextInput style={[styles.button]}
            placeholder="Clean poop deck"
            onChangeText = {(text) => this.setState({ first_name: text})}
          />
          <Text style={[styles.inputHeaders]}>
            Description
          </Text>
          <TextInput style={[styles.button]}
            placeholder="Mop the poop deck"
          />
        </View>

        <Text style={[styles.buttonText, {padding:20, marginTop:10}]}>
          TASK FEATURES
        </Text>
        <View
          style={[styles.container, {backgroundColor:'#F0F0F0'}]}
        >
          <Text style={[styles.inputHeaders]}>
            Estimated Days to Complete
          </Text>

          <RNPickerSelect
                    placeholder={{
                        label: 'Number of Days...',
                        value: 1,
                        color: '#9EA0A4',
                    }}
                    style={styles.inputIOS}
                    items={days}
                    onValueChange={(value) => {
                        this.setState({
                            numOfDays: value,
                        });
                    }}
                    value={this.state.numOfDays}
                />
          <Text style={[styles.inputHeaders]}>
            Sub-Tasks
          </Text>
          <SearchableDropdown
            onItemSelect={item => alert(JSON.stringify(item))}
            containerStyle={{ padding: 5 }}
            textInputStyle={{
              padding: 12,
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 5,
            }}
            itemStyle={{
              padding: 10,
              marginTop: 2,
              backgroundColor: '#ddd',
              borderColor: '#bbb',
              borderWidth: 1,
              borderRadius: 5,
            }}
            itemTextStyle={{ color: '#222' }}
            itemsContainerStyle={{ maxHeight: 140 }}
            items={items}
            placeholder="Pick da task"
            resetValue={false}
            underlineColorAndroid="transparent"
          />
          <Text style={[styles.inputHeaders]}>
            Due Date
          </Text>
          <TextInput style={[styles.button]}
            placeholder="Date picker here..."
          />
          <Text style={[styles.inputHeaders]}>
            Sign-Off Personnel
          </Text>
          <SearchableDropdown
            onItemSelect={item => alert(JSON.stringify(item))}
            containerStyle={{ padding: 5 }}
            textInputStyle={{
              padding: 12,
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 5,
            }}
            itemStyle={{
              padding: 10,
              marginTop: 2,
              backgroundColor: '#ddd',
              borderColor: '#bbb',
              borderWidth: 1,
              borderRadius: 5,
            }}
            itemTextStyle={{ color: '#222' }}
            itemsContainerStyle={{ maxHeight: 140 }}
            items={items}
            placeholder="Pick da guy"
            resetValue={false}
            underlineColorAndroid="transparent"
          />
          <Text style={[styles.inputHeaders]}>
            Priority
          </Text>
          <TextInput style={[styles.button]}
            placeholder="1 - 3..."
          />
          <Text style={[styles.inputHeaders]}>
            Frequency
          </Text>
          <TextInput style={[styles.button]}
            placeholder="Maybe this is a check box that shows options..."
          />
          <Text style={[styles.inputHeaders]}>
            Member / Team Assigned
          </Text>
          <SearchableDropdown
            onItemSelect={item => alert(JSON.stringify(item))}
            containerStyle={{ padding: 5 }}
            textInputStyle={{
              padding: 12,
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 5,
            }}
            itemStyle={{
              padding: 10,
              marginTop: 2,
              backgroundColor: '#ddd',
              borderColor: '#bbb',
              borderWidth: 1,
              borderRadius: 5,
            }}
            itemTextStyle={{ color: '#222' }}
            itemsContainerStyle={{ maxHeight: 140 }}
            items={items}
            placeholder="Pick da guy/gals"
            resetValue={false}
            underlineColorAndroid="transparent"
          />
          <TouchableHighlight
              onPress={() => navigate('ScreenTwo')}
              style={[styles.button, {marginTop:15, marginBottom:15}]}
              onPress = { this.saveData }
              disabled = { this.state.disabled }>
              <Text style={styles.buttonText}> Create Task </Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}

export default ScreenOne;
