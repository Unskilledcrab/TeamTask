import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
  container: {
     flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    //backgroundColor: '#E5E5E5'
  },
  containerInputs: {
    flex: 1,
    backgroundColor:'white',
    marginLeft:20,
    marginRight:20,
    borderRadius:5,
    padding: 15,
    marginTop:10,
    marginBottom:10
  },
  seaInputs: {
    alignSelf: 'stretch',
    marginBottom: 5,
    marginTop: 5,
    borderRadius: 5,
    height: 40
  },
  button: {
    alignSelf: 'stretch',
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 5,
    borderRadius: 5,
    height: 40,
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  inputIOS: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    backgroundColor: 'white',
    color: 'black',
  },
  inputAndroid: {
      fontSize: 14,
      paddingTop: 13,
      paddingHorizontal: 10,
      paddingBottom: 12,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      backgroundColor: 'white',
      color: 'black',
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
