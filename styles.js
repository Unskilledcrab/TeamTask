import React from 'react';
import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
  container: {
     flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#9FC5E8'
  },
  button: {
    alignSelf: 'stretch',
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 5,
    borderRadius: 5,
    height: 40,
    backgroundColor: '#CFE2F3',
    justifyContent: 'center'
  },
  inputHeaders: {
    alignSelf:'flex-start',
    marginTop:10,
    marginLeft:50,
    //marginBottom:5,
    fontSize: 16
  },
  buttonText: {
      color: 'black',
      alignSelf: 'center',
      fontSize: 16
  }
});

export default styles;
