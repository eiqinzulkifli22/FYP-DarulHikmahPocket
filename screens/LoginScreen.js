import React, { Component } from 'react';
import {
  StyleSheet, TextInput, View, Alert, Button,
  Text, ImageBackground, Image,
  KeyboardAvoidingView, Keyboard,
  TouchableWithoutFeedback, TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import { SecureStore } from 'expo';
import Spinner from 'react-native-loading-spinner-overlay';


// Importing Stack Navigator library to add multiple activities.
import { StackNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation';
import { colors } from 'react-native-elements';


// Creating Login Page
export default class LoginScreen extends Component {

  // // Setting up Login Activity title.
  constructor(props) {
    super(props)
    this.state = {
      barcodeNumber: '',
      pin: '',
      name: '',
      // spinner: false,

    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        spinner: !this.state.spinner
      });
    }, 3000);
  }

  UserLoginFunction = () => {
    Keyboard.dismiss
    const { barcodeNumber } = this.state;
    const { pin } = this.state;

    let data = JSON.stringify({
      barcodeNumber: barcodeNumber,
      pin: pin

    });

    //Current IP Address
    fetch("http://172.20.10.14:8000/api/login", {

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

            Alert.alert('Login succeeded!');
            console.log(result.token);
            Keyboard.dismiss()
            SecureStore.setItemAsync('user_token', result.token)
            this.props.navigation.navigate('HomeScreen')

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
  static navigationOptions = ({ navigation }) => ({
    header: null,


  })
  render() {
    return (

      <ImageBackground source={require('./main.jpg')} opacity={0.11} style={styles.backgroundImage}>

        <View style={styles.container}>

          <Image source={require('./output.png')} style={styles.logo} size={55} />

        </View>

        <View style={styles.MainContainer} >
          <KeyboardAvoidingView style={styles.content} behavior="position" makeScrollable >

            <View style={[{ position: 'absolute', top: -105, left: -150, right: 50 }]}>
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
                placeholder="PIN"
                onChangeText={pin => this.setState({ pin })}
                // Making the Under line Transparent.
                // underlineColorAndroid='transparent'
                borderColor='#028A7E'
                style={styles.TextInputStyleClass}
                secureTextEntry={true}
                keyboardType='numeric'
                returnKeyType='done'
              />

            </View>
          </KeyboardAvoidingView>
          <View style={[{ width: "30%", height: 70, position: 'absolute', top: 125 }]}>
            <TouchableOpacity
              style={styles.button}
              onPress={this.UserLoginFunction}
            >
              <Text style={{ color: "#FFFFFF", fontSize: 17 }}> LOG IN </Text>
            </TouchableOpacity>
          </View>

          <View style={[{ width: "70%", height: 70, position: 'absolute', top: 150, justifyContent: 'center', alignItems: 'center' }]}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('ResetPinScreen')}
            >
              <Text style={{ color: "red", fontSize: 15 }}> Forgot PIN? </Text>

            </TouchableOpacity>
          </View>


          <View style={[{ width: "70%", height: 70, position: 'absolute', top: 255, justifyContent: 'center', alignItems: 'center' }]}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('RegisterScreen')}
            >
              <Text style={{ color: "#028a7E", fontSize: 17 }}> New to Darul Hikmah Pocket? </Text>

            </TouchableOpacity>
          </View>


          <View style={[{ width: "70%", height: 70, position: 'absolute', top: 275, justifyContent: 'center', alignItems: 'center' }]}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('RegisterScreen')}
            >
              <Text style={{ color: "#028a7E", fontSize: 16, fontWeight: 'bold' }}> Register Now! </Text>

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
  },

  container: {
    padding: 10,
    //selectionColor: '#5BC3EB',
    //underlineColorAndroid: '#91918E',
    marginVertical: 10,
    paddingBottom: 200

  },

  TextInputStyleClass: {
    textAlign: 'center',
    alignItems: 'center',
    marginBottom: 15,
    marginLeft: 30,
    height: 35,
    width: 250,
    borderRadius: 13,
    borderWidth: 1,
    opacity: 0.8
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
    height: 170,
    width: 170,
    opacity: 0.8,
    resizeMode: 'contain',
    //boarderBottom: 200,
    paddingBottom: 150,
    paddingTop: 5,
    marginLeft: 119,
  },

  content: {
    marginTop: 50,
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

  forgotPIN: {
    fontSize: 10,
  },

  spinnerTextStyle: {
    color: '#FFF'
  },

});

