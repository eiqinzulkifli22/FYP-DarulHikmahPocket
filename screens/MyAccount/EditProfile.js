import React, { Component } from 'react';
import {AppRegistry, StyleSheet, TextInput, View, Alert, Text, Picker, ScrollView, TouchableOpacity} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SecureStore } from 'expo';

export default class EditProfile extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'PERSONAL INFORMATION'

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
      state: 'Centre/Kuliyyah',
      text: '',

    }
  }

  componentDidMount(){
 
    // Received Personal Details in Database and Set Into State.
    this.setState({ 
      idNumber : this.props.navigation.state.params.idNumber,
      fullName: this.props.navigation.state.params.fullName,
      centre: this.props.navigation.state.params.centre,
      emailAddress: this.props.navigation.state.params.emailAddress,
      phoneNumber: this.props.navigation.state.params.phoneNumber,
    })

   }


  //Creating function to send TextInput data on server

  UserUpdateFunction = () => {
    // const { idNumber } = this.state;
    // const { fullName } = this.state;
    // const { centre } = this.state;
    // const { emailAddress } = this.state;
    // const { phoneNumber } = this.state;
    // const { barcodeNumber } = this.state;
    // const { pin } = this.state;

    let data = JSON.stringify({
      idNumber: this.state.idNumber,
      fullName: this.state.fullName,
      centre: this.state.centre,
      emailAddress: this.state.emailAddress,
      phoneNumber: this.state.phoneNumber,
    
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

            Alert.alert('Personal Information Updated!');
            this.props.navigation.navigate('Profile')
            SecureStore.setItemAsync('user_token', result.token)

          }
          else {
            Alert.alert('Personal Information Failed to Update! ' + result.message);
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

      <KeyboardAwareScrollView>
        <View style={styles.ReservationContainer}>
          <ScrollView>

          <Picker
              style={{ height: 210, width: 300, marginBottom: -55, top: -75 }}
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
              value={this.state.idNumber}
              onChangeText={TextInputValue => this.setState({idNumber: TextInputValue})}
              borderColor='#028A7E'
              //underlineColorAndroid = 'transparent'
              style={styles.TextInputStyleClass}
            />


            <TextInput
              //placeHolder
              placeholder="Full Name"
              value={this.state.fullName}
              onChangeText={TextInputValue => this.setState({fullName: TextInputValue})}
              borderColor='#028A7E'
              //underlineColorAndroid = 'transparent'

              style={styles.TextInputStyleClass}
            />

            <TextInput
              //placeHolder
              placeholder="Email Address"
              value={this.state.emailAddress}
              onChangeText={TextInputValue => this.setState({emailAddress: TextInputValue})}
              borderColor='#028A7E'
              keyboardType='email-address'
              style={styles.TextInputStyleClass}
            />


            <TextInput
              //placeHolder
              placeholder="Phone Number"
              value={this.state.phoneNumber}
              onChangeText={TextInputValue => this.setState({phoneNumber: TextInputValue})}
              borderColor='#028A7E'
              keyboardType='numeric'
              //placeholderTextColor='#028A7E'
              //underlineColorAndroid = '#028A7E'
              style={styles.TextInputStyleClass}
            />

            <View style={styles.content}>
              <TouchableOpacity
                style={styles.button}
                onPress={this.UserUpdateFunction}

              >
                <Text style={{ color: "#FFFFFF", fontSize: 15 }}> UPDATE </Text>
              </TouchableOpacity>

            </View>
          </ScrollView>
        </View>
      </KeyboardAwareScrollView>

    );
  }
}

const styles = StyleSheet.create({

  ReservationContainer: {
    justifyContent: 'flex-start',
    flex: 1,
    alignItems: 'center',
    position: 'relative',
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
    //marginTop: 50,
    //marginLeft:10,
    //marginRight:10,
    //height: 350,
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


});
AppRegistry.registerComponent('registration', () => registration);
