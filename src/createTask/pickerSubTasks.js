import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';

import styles from '../styles';

class SubTasks extends Component {

  constructor (props) {
    super(props)
    //state should be what is currently selected
    this.state = {
      items: [],
      selected: ""
    };
  }

  // props
  // header
  // placeholder
  //


  gatherData = () =>
  {
      this.setState({ loading: true, disabled: true }, () =>
      {
          //
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
              })

          }).then((response) => response.json()).then((responseJson) =>
          {
              alert(responseJson);
              this.setState({ loading: false, disabled: false });
              // need a for each and set items
          }).catch((error) =>
          {
              alert("an error occurred");
              console.error(error);
              this.setState({ loading: false, disabled: false });
          });
      });
  }

  render() {

    return (

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

    );
  }
}

export default SubTasks;
