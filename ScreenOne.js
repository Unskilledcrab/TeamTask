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
  Picker
} from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';

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

class ScreenOne extends Component {

  constructor (props) {
    super(props)
    this.state = {
      myNumber: "",
      selected1: "key1"
    };
  }

  static navigationOptions = {
    title: 'GOTEM',
    tabBarLabel: 'Tasks',
    tabBarIcon: ({ tintColor }) => (
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
        <Text style={[styles.inputHeaders, {marginTop:20}]}>
          Task Name
        </Text>
        <TextInput style={[styles.button]}
          placeholder="Clean poop deck"
        />
        <Text style={[styles.inputHeaders]}>
          Description
        </Text>
        <TextInput style={[styles.button]}
          placeholder="Mop the poop deck"
        />
        <Text style={[styles.inputHeaders]}>
          Estimated Days to Complete
        </Text>
        <Picker selectedValue = {this.state.myNumber} onValueChange = {this.updateUser}>
           <Picker.Item label = "1" value = "steve" />
           <Picker.Item label = "2" value = "ellen" />
           <Picker.Item label = "3" value = "maria" />
        </Picker>
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
            style={[styles.button, {marginTop:15, marginBottom:15}]}>
            <Text style={styles.buttonText}> Create Task </Text>
        </TouchableHighlight>
      </ScrollView>
    );
  }
}

export default ScreenOne;
