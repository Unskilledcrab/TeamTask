import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Items
} from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';

import styles from '../styles';

class SubTasks extends Component {

  constructor (props) {
    super(props)
    this.state = {
      items: [{id:1, name:'null'}, {id:2, name:'test'}],
      selected: '',
      taskName: ''
    };
  }

  componentDidMount() {
    this.gatherData();
  }

  gatherData = () =>
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
                  taskName: this.state.taskName,
              })

          }).then((response) => response.json()).then((responseJson) =>
          {
              //alert(responseJson);
              alert('Casey needs to make da php file!');
              for (var tasks in responseJson) {
                console.log(tasks);
                //this.setState({ items: [...this.state.items, tasks]});
              }
              this.setState({ loading: false, disabled: false });
          }).catch((error) =>
          {
              alert("pickerSubTasks - gatherData Error");
              console.error(error);
              //this.setState({ loading: false, disabled: false });
          });
      });
  }

  handleItemSelected (item) {
    this.setState({ selected: item});
  }

  render() {

    var handleSubTask = this.props.handleSubTask;
    return (
      <View>
        <Text style={[styles.inputHeaders]}>
          Sub-Tasks
        </Text>
        <SearchableDropdown
          onItemSelect={item => handleSubTask(item)}
          containerStyle={{alignSelf: 'stretch', marginLeft: 50, marginRight: 50}}
          textInputStyle={{
            padding: 12,
            borderWidth: 1,
            borderColor: 'blue',
            color: 'black',
            borderRadius: 5,
            backgroundColor: 'pink'
          }}
          itemStyle={{
            padding: 10,
            marginTop: 2,
            backgroundColor: 'white',
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 5,
          }}
          itemTextStyle={{ color: 'purple' }}
          itemsContainerStyle={{ maxHeight: 140 }}
          items={this.state.items}
          placeholder="Pick da task"
          resetValue={false}
          underlineColorAndroid="transparent"
        />
      </View>
    );
  }
}

export default SubTasks;
