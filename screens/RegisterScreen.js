//import { registerRootComponent } from 'expo';
import React, { Component } from 'react';
import {
  AppRegistry, StyleSheet, TextInput, View, Alert,
  Button, Text, Picker, KeyboardAvoidingView,
  ScrollView, TouchableOpacity, ImageBackground
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

//import DropdownMenu from 'react-native-dropdown-menu';
//import PickerCascader from 'react-native-picker-cascader';
import { SecureStore } from 'expo';

//import {Dropdown} from 'react-native-material-dropdown';


export default class registration extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'REGISTER'

  })
  //Creating constructor
  constructor(props) {
    super(props)

    this.state = {
      idNumber: '',
      fullName: '',
      centre: 'Centre/Kuliyyah',
      emailAddress: '',
      phoneNumber: '',
      barcodeNumber: '',
      pin: '',
      state: 'Centre/Kuliyyah',
      text: '',

    }
  }

  //Creating function to send TextInput data on server

  UserRegistrationFunction = () => {
    const { idNumber } = this.state;
    const { fullName } = this.state;
    const { centre } = this.state;
    const { emailAddress } = this.state;
    const { phoneNumber } = this.state;
    const { barcodeNumber } = this.state;
    const { pin } = this.state;

    let data = JSON.stringify({
      //name: UserName,
      idNumber: idNumber,
      fullName: fullName,
      centre: centre,
      emailAddress: emailAddress,
      phoneNumber: phoneNumber,
      barcodeNumber: barcodeNumber,
      pin: pin
    });
    // Alert.alert(data);
    Alert.alert('Please wait.');

    //Current IP Address
    fetch("http://172.20.10.14:8000/api/register", {



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

            Alert.alert('Registration succeeded!');
            this.props.navigation.navigate('LoginScreen')
            SecureStore.setItemAsync('user_token', result.token)

          }
          else {
            Alert.alert('Registration failed! ' + result.message);
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
      <ImageBackground source={require('./main.jpg')} opacity={0.11} style={styles.backgroundImage}>
        <KeyboardAwareScrollView>
          <View style={styles.ReservationContainer}>
            <ScrollView>
              <Picker
                style={{ height: 210, width: 300, marginBottom: -55, top: -75 }}
                // borderColor= '#028A7E'
                selectedValue={this.state.centre}
                onValueChange={(itemValue, itemIndex) => this.setState({ centre: itemValue })}>

                <Picker.Item label="Centre/Kuliyyah" value="Centre/Kuliyyah" />
                <Picker.Item label="Ahmad Ibrahim Kuliyyah of Laws" value="Ahmad Ibrahim Kuliyyah of Laws" />
                <Picker.Item label="Centre for Foundation Studies" value="Centre for Foundation Studies" />
                <Picker.Item label="Centre for Languages and Pre-University Academic Development" value="Centre for Languages and Pre-University Academic Development" />
                <Picker.Item label="IIUM Academy of Graduate and Professional Studies" value="IIUM Academy of Graduate and Professional Studies" />
                <Picker.Item label="Kuliyyah of Allied Health Sciences" value="Kuliyyah of Allied Health Sciences" />
                <Picker.Item label="Kuliyyah of Architecture and Environmental Design" value="Kuliyyah of Architecture and Environmental Design" />
                <Picker.Item label="Kuliyyah of Dentistry" value="Kuliyyah of Dentistry" />
                <Picker.Item label="Kuliyyah of Economics and Management Sciences" value="Kuliyyah of Economics and Management Sciences" />
                <Picker.Item label="Kuliyyah of Education" value="Kuliyyah of Education" />
                <Picker.Item label="Kuliyyah of Engineering" value="Kuliyyah of Engineering" />
                <Picker.Item label="Kuliyyah of Information and Communication Technology" value="Kuliyyah of Information and Communication Technology" />
                <Picker.Item label="Kuliyyah of Islamic Revealed Knowledge and Human Sciences" value="Kuliyyah of Islamic Revealed Knowledge and Human Sciences" />
                <Picker.Item label="Kuliyyah of Languages and Management" value="Kuliyyah of Languages and Management" />
                <Picker.Item label="Kuliyyah of Pharmacy" value="Kuliyyah of Pharmacy" />
                <Picker.Item label="Kuliyyah of Science" value="Kuliyyah of Science" />

              </Picker>


              <TextInput
                //placeHolder
                placeholder="Staff Number/Matric Number"
                onChangeText={(idNumber) => this.setState({ idNumber })}
                borderColor='#028A7E'
                //underlineColorAndroid = 'transparent'
                style={styles.TextInputStyleClass}
                returnKeyType='done'

              />


              <TextInput
                //placeHolder
                placeholder="Full Name"
                onChangeText={(fullName) => this.setState({ fullName })}
                borderColor='#028A7E'
                //underlineColorAndroid = 'transparent'
                style={styles.TextInputStyleClass}
                returnKeyType='done'
              />




              <TextInput
                //placeHolder
                placeholder="Email Address"
                onChangeText={(emailAddress) => this.setState({ emailAddress })}
                borderColor='#028A7E'
                keyboardType='email-address'
                style={styles.TextInputStyleClass}
                returnKeyType='done'
              />

              <TextInput
                //placeHolder
                placeholder="Phone Number"
                onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
                borderColor='#028A7E'
                keyboardType='numeric'
                //placeholderTextColor='#028A7E'
                //underlineColorAndroid = '#028A7E'
                style={styles.TextInputStyleClass}
                returnKeyType='done'
              />

              <TextInput
                //placeHolder
                placeholder="Barcode Number"
                onChangeText={(barcodeNumber) => this.setState({ barcodeNumber })}
                borderColor='#028A7E'
                style={styles.TextInputStyleClass}
                returnKeyType='done'
              />

              <TextInput
                //placeHolder
                placeholder="6-digit PIN"
                onChangeText={(pin) => this.setState({ pin })}
                style={styles.TextInputStyleClass}
                borderColor='#028A7E'
                secureTextEntry={true}
                keyboardType='numeric'
                returnKeyType='done'
              />

              <Text></Text>
              <Text></Text>

              <View style={styles.content}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={this.UserRegistrationFunction}

                >
                  <Text style={{ color: "#FFFFFF", fontSize: 15 }}> REGISTER </Text>
                </TouchableOpacity>

              </View>
            </ScrollView>
          </View>
        </KeyboardAwareScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({

  ReservationContainer: {
    justifyContent: 'flex-start',
    flex: 1,
    alignItems: 'center',
    position: 'relative',
    //top: 40
    //margin: 10,

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

  content: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',

  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#028A7E',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    width: 120,
    height: 45,

  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'

  },


});
AppRegistry.registerComponent('registration', () => registration);
