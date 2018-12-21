import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Items,
  Platform
} from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';

import styles from '../styles';

class SubTasks extends Component {

  constructor (props) {
    super(props)
    this.state = {
      items: [{id:1, name:'Test Task 1'}, {id:2, name:'Test Task 2'}],
      selected: '',
      taskName: '',
      loading: false,
      disabled: false
    };
  }

  componentDidMount() {
    this.gatherData();
  }

  gatherData = () =>
  {
      this.setState({ loading: true, disabled: true }, () =>
      {
          fetch('http://www.sullytech.com/TTphp/SubTaskNameQuery.php',
          {
              method: 'POST',
              headers:
              {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(
              {
                  taskName: 'banana'
              })

          }).then((response) => response.json()).then((responseJson) =>
          {
              alert(responseJson);
              console.log(responseJson);
              //alert('Casey needs to make da php file!');
              for (var tasks in responseJson) {
                console.log(tasks);
                this.setState({ items: [...this.state.items, tasks]});
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
      <View style={{paddingTop:10}}>
        <Text style={[styles.inputHeaders, {color:'#9FC5E8'}]}>
          Sub-Tasks
        </Text>
        <SearchableDropdown
          onItemSelect={item => handleSubTask(item)}
          containerStyle={{alignSelf: 'stretch', marginLeft: 50, marginRight: 50}}
          textInputStyle={{
            padding: 12,
            borderWidth: 1,
            borderColor: '#9FC5E8',
            color: '#9FC5E8',
            borderRadius: 5,
            backgroundColor: 'rgba(0,0,0,0)'
          }}
          itemStyle={{
            padding: 10,
            marginTop: 2,
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: '#9FC5E8',
            borderWidth: 1,
            borderRadius: 5,
          }}
          itemTextStyle={{ color: '#9FC5E8' }}
          itemsContainerStyle={{ maxHeight: 140 }}
          items={this.state.items}
          placeholder="Pick da task"
          placeholderTextColor = '#9FC5E8'
          resetValue={false}
          underlineColorAndroid="transparent"
        />
      </View>
    );
  }
}

export default SubTasks;
