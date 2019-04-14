 import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Alert, Button,
         Text, ImageBackground,Image,
         KeyboardAvoidingView, Keyboard,TouchableWithoutFeedback} from 'react-native';
import { SecureStore } from 'expo';
 
// Importing Stack Navigator library to add multiple activities.
import { StackNavigator } from 'react-navigation';
import  { createStackNavigator }  from 'react-navigation';


// const DismissKeyboard = ({ children }) =>{
//   <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()}>
//       {children}
//   </TouchableWithoutFeedback>
// }

// Creating Login Page
export default class LoginScreen  extends Component {
 
  // // Setting up Login Activity title.
constructor(props) {
    super(props)
    this.state = {
      barcodeNumber: '',
      pin: '',
      name:''
    }
  }
UserLoginFunction = () =>{
  Keyboard.dismiss
const { barcodeNumber }  = this.state ;
const { pin }  = this.state ;

let data = JSON.stringify({
  barcodeNumber : barcodeNumber,
  pin : pin
  
});

	// Alert.alert(data);
	Alert.alert('Please wait.');
// tukar ip address
// AFFIQ	fetch("http://192.168.1.8:8000/api/login", {
//  NASN fetch("http://172.20.10.14:8000/api/login", {
  fetch("http://192.168.1.8:8000/api/login", {
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
       
        Alert.alert('Login succeeded!');
         //console.log(result.token);
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
      
      <ImageBackground source={require('./library-gombak.jpg')}  opacity = {0.10} style={styles.backgroundImage}>
       
          <View style={styles.container}>
          
          <Image source={require('./logo.png')} style={styles.logo}/>

        
          <View style={styles.MainContainer}>
          <KeyboardAvoidingView style={styles.content} behavior="position" makeScrollable >
           <TextInput style = {styles.input}
          
          // Adding hint in Text Input using Place holder.
          placeholder="Barcode Number"
          onChangeText={barcodeNumber => this.setState({barcodeNumber})}
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />
        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="PIN"
          onChangeText={pin => this.setState({pin})}
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          secureTextEntry={true}
        />
      
        
        
        <Button title="LOG IN" onPress={this.UserLoginFunction} color="#2196F3" />
       
       
        <Button title="REGISTER" onPress={() => this.props.navigation.navigate('RegisterScreen')} color="#2196F3" /> 
       
        </KeyboardAvoidingView>
      </View>
      </View>
    </ImageBackground>
            
    );
  }
}

 

const styles = StyleSheet.create({
MainContainer :{

// position: 'absolute',
// top: 300,
// left: 150,
// color: '#028A7E',
justifyContent: 'center',
flex: 1,
alignItems: 'center',
top: 280
},

container: {

  padding: 10,
  //selectionColor: '#5BC3EB',
  //underlineColorAndroid: '#91918E',
  marginVertical: 10,
  paddingBottom:200
     
   },

TextInputStyleClass: {
textAlign: 'center',
marginBottom: 7,
height: 40,
//borderWidth: 1,
// Set border Hex Color Code Here.
borderColor: '#2196F3',
// Set border Radius.
borderRadius: 5 ,
 
},
 
TextComponentStyle: {
  //fontSize: 20,
  color: "#000",
  textAlign: 'center',
  paddingBottom: 450,

},

input:{
  height: 40,
  backgroundColor: 'rgba(225,225,225,0.2)',
  marginBottom: 10,
  padding: 10,
  color: '#fff'
},

backgroundImage: {
  flex: 1,
  resizeMode: 'cover', // or 'stretch'
    
},

logo: {
  flex:1,
  alignItems: 'center',
  justifyContent: 'center',
  height: 150,
  width: 150,
  resizeMode: 'contain',
  //boarderBottom: 200,
  paddingBottom: 150,
  paddingTop: 5,
  marginLeft: 125
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

}); 



// import React from 'react';
// import { View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
// import { Icon,  Container, Content, Left } from 'native-base'
// import {Header, SearchBar } from 'react-native-elements';
// import {createStackNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator,  createNavigationContainer} from 'react-navigation';
// //import OpeningHoursSreen from './screens/OpeningHoursSreen';
// import '@expo/vector-icons';
// import DrawerHeader from '../components/DrawerHeader';



// class LoginScreen extends React.Component{

//   static navigationOptions = ({navigation}) => ({
//     header: null,
    
//   })



//     render(){
//         return(

         

//              <View style={styles.header}>
  
//           <View style={styles.container}>  
            
//               <Text>Login Screen</Text>

              
//               <Button title='LOGIN'
//                       onPress={
//                         ()=>this.props.navigation.navigate('HomeScreen')}
//                       />

//               <Button title='SIGNUP'
//                       onPress={
//                         ()=>this.props.navigation.navigate('HomeScreen')}
//                       />

//               <Button title='Forgot Password '
//                       onPress={
//                         ()=>this.props.navigation.navigate('ResetPasswordScreen')}
//                       />

//             {/*   <View style={[{ width: "20%", height: 70,backgroundColor: "#028A7E" }]}>
//                         <Button
                        
//                           onPress={this.buttonClickListener}
//                           title="Button Three"
//                           color="#fff"
//                         />
//               </View>  */
              
//           </View>
//         </View>  
//         )
//     }
// }


// export default LoginScreen;

// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },

//     header: {
//         flex: 1,
//         paddingTop: 4,
//         backgroundColor: '#ecf0f1',
//       }
// })  


//BIDIL PUNYA

//  import React, {Component} from 'react';
// import {StyleSheet, Alert} from 'react-native';
// import {Container, Text, Content, Form, Item, Input, Button} from 'native-base';
// // import firebase from 'react-native-firebase';
// import  db  from '../config/db';
// import firebase from '@firebase/app';
// import '@firebase/database';
// import '@firebase/storage';
// import '@firebase/auth';

// var database = firebase.database();


// export default class LoginScreen extends Component {

//   constructor () {
//     super();
//     this.state = {
//       email: '',
//       password: ''
//     }
//   }

//   // signUpButtonPress(){
//   //   firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
//   //   .then(() => {this.props.navigation.navigate('RegisterScreen')} )
//   //   .catch((error)=>{
//   //     console.log("Auth failed " + error);

//   //  })
    
//   //   }

//   loginButtonPress(){
//     if (this.state.email == "" || this.state.password == "" ) {
//       alert("Please Fill in All the Fields");
//     }
//     else{
//     database.ref('Users/').push({
//         email: this.state.email,
//         password: this.state.password,
//         // mobile: this.state.Vmobile,
//         // reason: this.state.Vreason
//     })
//    // Alert.alert("SUCCESS! Your User has been Added!!");
// }
//     const email = this.state.email;
//     const password = this.state.password;

//     firebase.auth().signInWithEmailAndPassword(email, password)
//     .then(() => {this.props.navigation.navigate('HomeScreen')})
//     .catch((error) => {
//       //console.log("Auth failed " + error);
//       alert('Salah Beb!');
//     })

//     // .catch((error) => {
//     //   var errorCode = error.code;
//     //   var errorMessage = error.message;
//     //   if (errorCode == 'auth/weak password') {
//     //     Alert.alert('The password is too weak');
//     //   }
//     //   else {
//     //     Alert.alert(errorMessage);
//     //   }
//     //   console.log(error);
//     // });

//     // this.props.navigation.navigate('Home');
//   }

//   render() {
//     return (
//         <Container style={styles.container}>
//             <Text style={styles.headerText}>Login</Text>
//                 <Content>
//                     <Form>
//                         <Item style={styles.inputContainer}>
//                             <Input placeholder="Email" onChangeText={(email) => this.setState({email})} />
//                         </Item>
//                         <Item style={styles.inputContainer}>
//                             <Input secureTextEntry={true} placeholder="Password" onChangeText={(password) => this.setState({password})} />
//                         </Item>

//                         <Button style={styles.buttonStyle}   onPress={
//                         ()=>this.props.navigation.navigate('RegisterScreen')}>
//                             <Text>Sign Up</Text>
//                         </Button>

//                         <Button success style={styles.buttonStyle} onPress={this.loginButtonPress.bind(this)}  >
//                             <Text>Login</Text>
//                         </Button>
//                     </Form>
//                 </Content>
//         </Container>
//     );
//   }
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//     //   alignItems: 'center',
//       backgroundColor: '#00b5ec'
//     },
//     headerText: {
//       marginTop: 40,
//       fontSize: 30,
//       fontWeight: 'bold',
//       alignSelf: 'center'
//     },
//     inputContainer:{
//       borderBottomColor: '#F5FCFF',
//       backgroundColor: '#FFFFFF',
//       borderRadius:30,
//       borderBottomWidth: 1,
//       width:250,
//       height:45,
//       marginBottom:20,
//       flexDirection: 'row',
//       alignItems:'center',
//     },
//     buttonStyle: {
//       marginTop: 10,
//       alignSelf: 'center'
//     }
//   });  */

// import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default class AvatarItem extends Component {
//   render() {
//     <View style={styles.container}>
//       <Image style={styles.avatarImage} source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-9.png' }} />
//       <Text style={styles.title}>John Doe</Text>
//     </View>
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     height: 50,
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   avatarImage: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//   },
//   title: {
//     flex: 1,
//     fontSize: 19,
//     fontWeight: 'bold',
//   },
// });