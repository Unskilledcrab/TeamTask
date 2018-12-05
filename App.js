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
} from 'react-native';
//import {createStackNavigator} from 'react-navigation';
//npm install --save react-navigation
//import {StackNavigator} from 'react-navigation';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export default class App extends React.Component {

  constructor (props) {
    super(props)
    this.RotateValueHolder = new Animated.Value(0);
    this.ImageSizeHolder = new Animated.Value(0);
    this.ImageOpacityHolder = new Animated.Value(0);
    this.state = {
      count: 0,
      rotateSpeed: 15000,
      rotateON: true
    }
  }

  componentDidMount() {
    this.StartImageRotateFunction();
    this.ImageRotateOut();
  }

  ImageRotateOut () {
    this.ImageSizeHolder.setValue(0)
    this.ImageOpacityHolder.setValue(0)
    Animated.sequence([
      Animated.parallel([
        Animated.timing(this.ImageSizeHolder, {
          toValue: 1,
          duration: 1000
        }),
        Animated.timing(this.ImageOpacityHolder, {
          toValue: 1,
          duration: 1000
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
    })

    const WidthData = this.ImageSizeHolder.interpolate({
      inputRange: [0,1],
      outputRange: [SCREEN_WIDTH,SCREEN_WIDTH*5]
    })

    const HeightData = this.ImageSizeHolder.interpolate({
      inputRange: [0,1],
      outputRange: [SCREEN_HEIGHT - 120,SCREEN_HEIGHT*5]
    })

    const Scale = this.ImageSizeHolder

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

            <TouchableOpacity
              style={styles.button}
              onPress={this.onPress}
            >
              <Text style={styles.buttonText}> Login </Text>
            </TouchableOpacity>
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
    width: SCREEN_WIDTH/2,
    padding: 8
    ,margin: 20
    ,borderRadius: 10
    //,border: 2
  },
  buttonText: {
    fontSize: 24,
    fontFamily: textFontFamily
  }
});
