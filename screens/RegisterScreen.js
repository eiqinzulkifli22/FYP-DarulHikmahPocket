//import { registerRootComponent } from 'expo';
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, TextInput, View, Alert, 
        Button, Text, Picker, KeyboardAvoidingView,
        ScrollView} from 'react-native';
//import {Dropdown} from 'react-native-material-dropdown';


export default class registration extends Component {
    static navigationOptions = ({navigation}) => ({
        title: 'PERSONAL INFORMATION'
        
      })
//Creating constructor
constructor(props) {
    super(props)

    this.state = {
        idNumber:  '',
        fullName: '',
        centre: 'Centre/Kuliyyah',
        emailAddress: '',
        phoneNumber: '',
        barcodeNumber: '',
        pin: '',
        state: 'Centre/Kuliyyah',

    }
}

//Creating function to send TextInput data on server

UserRegistrationFunction = () => {
	const {idNumber} = this.state;
	const {fullName} = this.state;
	const {centre} = this.state;
	const {emailAddress} = this.state;
	const {phoneNumber} = this.state;
	const {barcodeNumber} = this.state;
	const {pin} = this.state;

	let data = JSON.stringify({
		//name: UserName,
		idNumber : idNumber,
		fullName : fullName,
		centre : centre,
		emailAddress : emailAddress,
		phoneNumber : phoneNumber,
		barcodeNumber : barcodeNumber,
		pin : pin
	});
	// Alert.alert(data);
	Alert.alert('Please wait.');

  // AFFIQ	fetch("http://192.168.1.8:8000/api/login", {
//  NASN fetch("http://172.20.10.14:8000/api/login", {
	fetch("http://192.168.1.8:8000/api/register", {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: data,
	})
	.then(res => res.json())
	.then(
		(result) => {
			if(result.success) {
         
                 Alert.alert('Registration succeeded!');
                 this.props.navigation.navigate('LoginScreen');
                SecureStore.setItemAsync('user_token', result.token)
            //     .then(() => {
            //       this.props.navigation.navigate('LoginScreen');
            // });
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

         <View style={styles.ReservationContainer}>
        {/* <Text style={styles.PageTitle}>PERSONAL INFORMATION</Text> */}

        <KeyboardAvoidingView style={styles.content} behavior="position" makeScrollable>
        
        <TextInput
        //placeHolder
        placeholder = "Staff Number/Matric Number"
        onChangeText = {(idNumber) => this.setState({idNumber})}
        borderColor= '#028A7E'
        //underlineColorAndroid = 'transparent'
        style={styles.TextInputStyleClass}
        />

       
        <TextInput
        //placeHolder
        placeholder = "Full Name"
        onChangeText = {(fullName) => this.setState({fullName})}
        borderColor= '#028A7E'
        //underlineColorAndroid = 'transparent'

        style={styles.TextInputStyleClass}
        />

<Picker
selectedvalue={this.state.centre}
style={{height:50, width:300, alignItems: 'center',}}
borderColor= '#028A7E'
//style={{textAlign: 'center' }}

        onValueChange={(itemValue, itemIndex) => this.setState({centre: itemValue})}>

<Picker.Item label = "Centre/Kuliyyah" value="Centre/Kuliyyah" />
<Picker.Item label = "Ahmad Ibrahim Kuliyyah of Laws" value="Ahmad Ibrahim Kuliyyah of Laws"/>
<Picker.Item label = "Centre for Foundation Studies" value="Centre for Foundation Studies"/>
<Picker.Item label = "Centre for Languages and Pre-University Academic Development" value="Centre for Languages and Pre-University Academic Development"/>
<Picker.Item label = "IIUM Academy of Graduate and Professional Studies" value="IIUM Academy of Graduate and Professional Studies"/>
<Picker.Item label = "Kuliyyah of Allied Health Sciences" value="Kuliyyah of Allied Health Sciences"/>
<Picker.Item label = "Kuliyyah of Architecture and Environmental Design" value="Kuliyyah of Architecture and Environmental Design"/>
<Picker.Item label = "Kuliyyah of Dentistry" value="Kuliyyah of Dentistry"/>
<Picker.Item label = "Kuliyyah of Economics and Management Sciences" value="Kuliyyah of Economics and Management Sciences"/>
<Picker.Item label = "Kuliyyah of Education" value="Kuliyyah of Education"/>
<Picker.Item label = "Kuliyyah of Engineering" value="Kuliyyah of Engineering"/>
<Picker.Item label = "Kuliyyah of Information and Communication Technology" value="Kuliyyah of Information and Communication Technology"/>
<Picker.Item label = "Kuliyyah of Islamic Revealed Knowledge and Human Sciences" value="Kuliyyah of Islamic Revealed Knowledge and Human Sciences"/>
<Picker.Item label = "Kuliyyah of Languages and Management" value="Kuliyyah of Languages and Management"/>
<Picker.Item label = "Kuliyyah of Pharmacy" value="Kuliyyah of Pharmacy"/>
<Picker.Item label = "Kuliyyah of Science" value="Kuliyyah of Science"/>

</Picker> 
              
        
        <TextInput
        //placeHolder
        placeholder = "Email Address"
        onChangeText = {(emailAddress) => this.setState({emailAddress})}
        borderColor= '#028A7E'
        keyboardType='email-address'
        style={styles.TextInputStyleClass}
        />

        
        <TextInput
        //placeHolder
        placeholder = "Phone Number"
        onChangeText = {(phoneNumber)=> this.setState({phoneNumber})}
        borderColor= '#028A7E'
        keyboardType='numeric'
        //placeholderTextColor='#028A7E'
        //underlineColorAndroid = '#028A7E'

        style={styles.TextInputStyleClass}
       />


        {/*Next Page*/}
        {/*<Button title = "NEXT" onPress={this.UserRegistrationFunction} color="#028A7E"/>*/}

      {/* <Text style={styles.PageTitle}>ACOUNT INFORMATION</Text> */}
        <TextInput
        //placeHolder
        placeholder = "Barcode Number"
        onChangeText = {(barcodeNumber) => this.setState({barcodeNumber})}
        borderColor= '#028A7E'
        style={styles.TextInputStyleClass}
        />


        <TextInput
        //placeHolder
        placeholder = "6-digit PIN"
        onChangeText = {(pin) => this.setState({pin})}
        style={styles.TextInputStyleClass}
        borderColor= '#028A7E'
        secureTextEntry={true}
        /> 
       <Button title = "REGISTER" onPress={this.UserRegistrationFunction} color="#028A7E"/>
       </KeyboardAvoidingView>

        </View>
        
    );
}
}

const styles = StyleSheet.create({
    
    ReservationContainer: {
        justifyContent: 'flex-start',
        flex: 1,
        alignItems: 'center',
        position: 'relative',
        top: 100
                //margin: 10,
              
    },
    

      TextInputStyleClass: {
          textAlign: 'center',
          alignItems: 'center',
          marginBottom: 15,
          height: 30,
          width: '100%',
          borderWidth: 1,
          
          
      },

      content: {
        //marginTop: 50,
        //marginLeft:10,
        //marginRight:10,
        //height: 350,
        
      }


});

//registerRootComponent(App);
//AppRegistry.registerComponent('App', () => App);
AppRegistry.registerComponent('registration', () => registration);


// import React from 'react';
// import { StyleSheet, 
//   Text, 
//   View,
//   TextInput,
//   TouchableOpacity,
//   Alert, 
//   AppRegistry,
//   Button,
// } from 'react-native';
// //import {Button} from 'native-base';
// import  db  from '../config/db';
// import firebase from '@firebase/app';
// import '@firebase/database';
// import '@firebase/storage';
// import '@firebase/auth';
// import { NavigationEvents } from 'react-navigation';



// // firebase.initializeApp(db.FirebaseConfig);
//  var database = firebase.database();

// export default class RegisterScreen extends React.Component {
//     static navigationOptions = {
//         title: 'Register Page     '
//       };
//   constructor() {
//     super();

//     this.state = {
//       //DOB: "",
//     //   Vname: '',
//     //   Vid: '',
//     //   Vmobile: '',
//     //   Vreason: '',
//       //Vtime: '',
//       email: '',
//       password: '',
//       matricNo: 0
//     }
//   }
//   /* pushToFirebase() {
//     let formValues = this.refs.getValues()
//     this.itemsRef.push(formValues)
//   } */
//   writeUserData(){
//     if (this.state.DOB == "" || this.state.email == "" || this.state.password == "" ) {
//       alert("Please Fill in All the Fields");
//     }
//     else{
//     database.ref('Users/').push({
//         email: this.state.email,
//         password: this.state.password,
//         // mobile: this.state.Vmobile,
//         // reason: this.state.Vreason
//     })
//         Alert.alert("SUCCESS! Your User has been Added!!");
//         <Button style={styles.buttonStyle}   onPress={
//             ()=>this.props.navigation.navigate('LoginScreen')}>
//                 <Text>Log In</Text>
//             </Button>
//     //this.props.navigation.navigate('LoginScreen');
// }
// }

//   submit = async () => {

//     if (this.state.DOB == "" || this.state.email == "" || this.state.password == "" ) {
//       alert("Please Fill in All the Fields");
//     }
//   }
//   sendMatricNo (){
//     database.ref('Users/').orderByChild('email').equalTo(this.state.email).on("value", function(snapshot) {
//         console.log(snapshot.val());
//         snapshot.forEach(function(data) {
//             console.log(data.key);
//             Alert.alert("Visitor Registred");
//         });
//     });
    
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//       <View style={styles.regform}>
//       <Text style={styles.header}>Visitor Registration System</Text>

//       <TextInput style={styles.textinput} placeholder="Enter email" placeholderTextColor='#fff68f' onChangeText={(email) => this.setState({email})} value={this.state.email} />

//       <TextInput style={styles.textinput} placeholder="Enter password" placeholderTextColor='#fff68f' onChangeText={(password) => this.setState({password})} value={this.state.password} />
// {/* 
//       <TextInput style={styles.textinput} placeholder="Visitor Phone No" placeholderTextColor='#fff68f' onChangeText={(Vmobile) => this.setState({Vmobile})} value={this.state.Vmobile} />

//       <TextInput style={styles.textinput} placeholder="Reasons for visiting" placeholderTextColor='#fff68f' onChangeText={(Vreason) => this.setState({Vreason})} value={this.state.Vreason} /> */}


//       <TouchableOpacity style={styles.button} /* onPress={()=> this.submit()} */ onPress={() =>this.writeUserData()}  >
//       <Text style={styles.btntext}> Registr  </Text>
      
//       </TouchableOpacity>
      
//       <TouchableOpacity style={styles.button}   >
//       <TextInput style={{backgroundColor: '#1ec1f4'}}  placeholder='Visitor ID....' onChangeText={(matricNo) => this.setState({matricNo})} onSubmitEditing={()=> this.sendMatricNo()} />

      
//       </TouchableOpacity>

//       </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#36485f',
//     paddingLeft: 40,
//     paddingRight: 40,
//   },
//   regform: {
//     alignSelf: 'stretch',
//   },
//   header:{
//     fontSize: 24,
//     color: '#fff',
//     paddingBottom:10,
//     marginBottom: 20,
//     marginTop: 20,
//     borderBottomColor: '#fff',    
//     borderBottomWidth: 1,
//   },
//   textinput:{
//     color: '#fff',
//     fontSize: 20,
//     alignSelf: 'stretch',
//     height: 40,
//     marginBottom: 30,
//     borderBottomColor: '#fff',    
//     borderBottomWidth: 1,
//     },
//     button:{
//       alignSelf: 'stretch',
//       alignItems: 'center',
//       padding: 20,
//       backgroundColor: '#59cbbd',
//       marginTop:30,
//     },
//     btntext:{
//       fontSize: 20,
//       color: '#fff',
//       fontWeight: 'bold',
//     },
//     image:{
//       alignSelf: 'stretch',
//       alignItems: 'center', 
//       width: 100,
//       height: 100,
//     },
    
// });