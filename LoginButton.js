import React from 'react';
import {
  StyleSheet
  ,Text
  ,View
  ,Image
  ,Dimensions
  ,Animated
  ,Easing
  ,TouchableOpacity
  ,TextInput
} from 'react-native';

//import {createStackNavigator} from 'react-navigation';
//npm install 'react-navigation'
//npm install 'react-native-animatable'
//npm install 'native-base'
//npm install
//import {StackNavigator} from 'react-navigation';
//

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export default class ButtonLogin extends React.Component {

  constructor (props) {
    super(props)
    this.RotateValueHolder = new Animated.Value(0);
    this.ImageSizeHolder = new Animated.Value(1);
    this.ImageOpacityHolder = new Animated.Value(0);
    this.ButtonTranslationHolder = new Animated.Value(0);
    this.state = {
      count: 0,
      rotateSpeed: 15000,
      rotateON: true
    }
  }

  componentDidMount() {
    this.StartImageRotateFunction();
    //this.ImageRotateOut();
  }

  ButtonTranslateIn () {
    Animated.timing(
      this.RotateValueHolder,
      {
        toValue: 1,
        duration: this.state.rotateSpeed,
        easing: Easing.linear
      }
    ).start();
  }

  ImageRotateOut () {
    this.ImageSizeHolder.setValue(1)
    this.ImageOpacityHolder.setValue(0)
    this.ButtonTranslationHolder.setValue(0)
    Animated.sequence([
      Animated.parallel([
        Animated.timing(this.ImageSizeHolder, {
          toValue: 0,
          duration: 1000,
          easing: Easing.linear
        }),
        Animated.timing(this.ImageOpacityHolder, {
          toValue: 1,
          duration: 1000
        }),
        Animated.timing(this.ButtonTranslationHolder, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear
        })
      ])
    ]).start();
  }

  StartImageRotateFunction () {
    if (this.state.rotateON == true) {
      this.RotateValueHolder.setValue(0)
      Animated.timing(
        this.RotateValueHolder,
        {
          toValue: 1,
          duration: this.state.rotateSpeed,
          easing: Easing.linear
        }
      ).start(() => this.StartImageRotateFunction())
    }
  }

  onPress = () => {
    this.ImageRotateOut();
  }

  render() {

    const RotateData = this.RotateValueHolder.interpolate({
      inputRange: [0,1],
      outputRange: ['0deg','360deg']
    });

    const ButtonTranslateData = this.ButtonTranslationHolder.interpolate({
      inputRange: [0,1],
      outputRange: [100,0]
    });

    const ButtonWidth = this.ButtonTranslationHolder.interpolate({
      inputRange: [0,1],
      outputRange: [SCREEN_WIDTH/2,SCREEN_WIDTH]
    });

    const ButtonMargin = this.ButtonTranslationHolder.interpolate({
      inputRange: [0,1],
      outputRange: [20,0]
    });

    const ButtonRadius = this.ButtonTranslationHolder.interpolate({
      inputRange: [0,1],
      outputRange: [10,0]
    });

    const InputOpacity = this.ButtonTranslationHolder.interpolate({
      inputRange: [0,1],
      outputRange: [0,1]
    });

    const InputMargin = this.ButtonTranslationHolder.interpolate({
      inputRange: [0,1],
      outputRange: [0,20]
    });

    const Scale = this.ImageSizeHolder;

    return (
        <View style={styles.container}>

            <View style={styles.viewTitle}>
              <Text style={styles.textTitle}>Team Task!</Text>
            </View>

            <Animated.Image
              source={require('./assets/cartoon-sun-vector.png')}
              style={{
                borderRadius: 20,
                zIndex: -1,
                opacity: this.state.ImageOpacityHolder,
                flex: 1,
                height: SCREEN_HEIGHT - 120,
                width: SCREEN_WIDTH,
                transform: [
                  {
                    rotate: RotateData
                  },
                  {
                    scale: Scale
                  }
                ],
                resizeMode: 'contain'}}
            >
            </Animated.Image>

            <Animated.View
              style={{
                flex: 0
                ,opacity: InputOpacity,
                backgroundColor: '#FFF',
                margin: InputMargin
              }}>
              <View
                style={{
                  flex: 1
                  ,flexDirection: 'row'
                }}>
                <Text style={{flex:1 ,height:50}}>Enter User Name: </Text>
                <TextInput style={{flex:3 ,height:50}} placeholder='User Name' />
              </View>
              <View
                style={{
                  alignItems: 'flex-start'
                }}>
                <Text>Enter Password: </Text>
                <TextInput placeholder='Password' />
              </View>
            </Animated.View>

            <Animated.View
              style={{
                //flex:1,
                alignItems: 'stretch',
                justifyContent: 'flex-start',
                width: ButtonWidth,
                height: 60,
                padding: 8,
                backgroundColor: buttonColor,
                margin: ButtonMargin,
                borderRadius: ButtonRadius
              }}
            >
              <TouchableOpacity
                style={styles.button}
                onPress={this.onPress}
              >
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            </Animated.View>
        </View>
    );
  }
}

const buttonColor = '#CFE2F3';
const textFontFamily = 'Noteworthy-Bold';
//has to be a custom font family linked to project

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9FC5E8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewTitle: {
    justifyContent:'center',
    alignItems:'center'
    ,marginTop:40
    //,marginBottom:60
  },
  textTitle: {
    fontSize: 36,
    fontFamily: textFontFamily
    ,fontWeight: 'bold'
    ,textDecorationLine: 'underline'
  },
  button: {
    alignItems: 'center',
    backgroundColor: buttonColor,
    flex:1
    ,width: null
    ,height: null
    //  ,transform: [{
    //  translateY: ButtonTranslateData
    //}],
    //,border: 2
  },
  buttonText: {
    fontSize: 24,
    fontFamily: textFontFamily
  }
});
