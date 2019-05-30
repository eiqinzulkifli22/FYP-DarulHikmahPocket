import React, { Component } from 'react';
import {
  StyleSheet, TextInput, View, Alert, Button,
  Text, ImageBackground, Image,
  KeyboardAvoidingView, Keyboard,
  TouchableWithoutFeedback, TouchableOpacity,
} from 'react-native';
import { SecureStore } from 'expo';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { HeaderBackButton } from 'react-navigation';

import Spinner from 'react-native-loading-spinner-overlay';

// Importing Stack Navigator library to add multiple activities.
import { StackNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation';
import { colors } from 'react-native-elements';




// Creating Login Page
export default class ResetPinScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'RESET PIN',
    headerLeft: (
      <HeaderBackButton
        onPress={() => { navigation.navigate('LoginScreen') }} />
    )
  })
  // // Setting up Login Activity title.
  constructor(props) {
    super(props)
    this.state = {
      barcodeNumber: '',
      pin: '',
      tac: '',
      //name: ''
    }
  }
  RequestTAC = () => {
    Keyboard.dismiss
    const { barcodeNumber } = this.state;
    const { pin } = this.state;
    const { tac } = this.state;

    let data = JSON.stringify({
      barcodeNumber: barcodeNumber,
      pin: pin,
      tac: tac

    });

    //Current IP Address
    fetch("http://172.20.10.14:8000/api/requestTAC", {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    })
      .then(res => res.json())
      .then(
        (result) => {
          if (result.success) {

            Alert.alert('TAC has been send to your email!');
            console.log(result.token);
            Keyboard.dismiss()
            SecureStore.setItemAsync('user_token', result.token)
            //this.props.navigation.navigate('HomeScreen')

          }
          else {
            Alert.alert('Reset PIN failed! ' + result.message);
          }
        },
        (error) => {
          // Alert.alert(error);
          Alert.alert("An error just occurred.");
        }
      )
  }


  ResetUserPIN = () => {
    Keyboard.dismiss
    const { barcodeNumber } = this.state;
    const { pin } = this.state;
    const { tac } = this.state;

    let data = JSON.stringify({
      barcodeNumber: barcodeNumber,
      pin: pin,
      tac: tac

    });

    // Current IP Address
    fetch("http://172.20.10.14:8000/api/changePassword", {


      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    })
      .then(res => res.json())
      .then(
        (result) => {
          if (result.success) {

            Alert.alert(result.message);
            console.log(result.token);
            Keyboard.dismiss()
            SecureStore.setItemAsync('user_token', result.token)
            this.props.navigation.navigate('LoginScreen')

          }
          else {
            Alert.alert('Login failed! ' + result.message);
          }
        },
        (error) => {
          // Alert.alert(error);
          Alert.alert("An error just occurred.");
        }
      )
  }


  render() {
    return (

      <ImageBackground source={require('././main.jpg')} opacity={0.11} style={styles.backgroundImage}>
        <View style={styles.container}>
        </View>

        <View style={styles.MainContainer} >
          <KeyboardAvoidingView style={styles.content} behavior="position" makeScrollable >

            <View style={[{ position: 'absolute', top: -143, left: -150, right: 50 }]}>
              <TextInput style={styles.input}

                // Adding hint in Text Input using Place holder.
                placeholder="Barcode Number"
                onChangeText={barcodeNumber => this.setState({ barcodeNumber })}
                // Making the Under line Transparent.
                //underlineColorAndroid='transparent'
                borderColor='#028A7E'
                style={styles.TextInputStyleClass}
                returnKeyType='done'
              />

              <TextInput

                // Adding hint in Text Input using Place holder.
                placeholder="New PIN"
                onChangeText={pin => this.setState({ pin })}
                // Making the Under line Transparent.
                // underlineColorAndroid='transparent'
                borderColor='#028A7E'
                style={styles.TextInputStyleClass}
                secureTextEntry={true}
                keyboardType='numeric'
                returnKeyType='done'
              />

              <View style={[{ width: 150, height: 50, left: 73, position: 'absolute', top: 107, }]}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={this.RequestTAC}
                >
                  <Text style={{ color: "#FFFFFF", fontSize: 15 }}> REQUEST TAC </Text>

                </TouchableOpacity>
                {/* <Button style={[{ fontSize: 1, color: 'red' }]} title="Forgot PIN?" onPress={() => this.props.navigation.navigate('ResetPinScreen')} color="red" /> */}
              </View>

              <View style={[{ position: 'absolute', top: 170, left: 0, right: 50 }]}>

                <TextInput style={styles.input}

                  // Adding hint in Text Input using Place holder.
                  placeholder="TAC"
                  onChangeText={tac => this.setState({ tac })}
                  // Making the Under line Transparent.
                  //underlineColorAndroid='transparent'
                  borderColor='#028A7E'
                  style={styles.TextInputStyleClass}
                  secureTextEntry={true}
                  keyboardType='numeric'
                  returnKeyType='done'
                />
              </View>
            </View>
          </KeyboardAvoidingView>

          <View style={[{ width: "30%", height: 70, position: 'absolute', top: 165 }]}>
            <TouchableOpacity
              style={styles.button}
              onPress={this.ResetUserPIN}
            >
              <Text style={{ color: "#FFFFFF", fontSize: 15 }}> RESET </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>

    );
  }
}



const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    top: 60
  },

  container: {
    marginVertical: 10,
    paddingBottom: 200

  },

  TextInputStyleClass: {
    textAlign: 'center',
    alignItems: 'center',
    marginBottom: 15,
    height: 35,
    width: 300,
    borderRadius: 10,
    borderWidth: 1,
  },


  TextComponentStyle: {
    //fontSize: 20,
    color: "#000",
    textAlign: 'center',
    paddingBottom: 450,

  },

  input: {
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 30,
    padding: 10,
    color: '#fff'
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'

  },

  logo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    width: 150,
    resizeMode: 'contain',
    //boarderBottom: 200,
    paddingBottom: 100,
    paddingTop: 1,
    marginLeft: 140
  },

  content: {
    marginTop: 20,
    //marginLeft:10,
    //marginRight:10,
    height: 350,
  },

  buttons: {
    flex: 1,
    height: 70,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#028A7E',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },

  buttonTAC: {
    alignItems: 'center',
    backgroundColor: '#028A7E',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },
});



