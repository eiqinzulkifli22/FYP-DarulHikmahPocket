import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Header} from 'react-native-elements';
import '@expo/vector-icons';
import { SecureStore } from 'expo';

class Profile extends React.Component{

  static navigationOptions = ({navigation}) => ({
    title: 'Profile'
    
  })
    render(){
      SecureStore.getItemAsync('user_token')
      .then((token) => {
        console.log("Token: " + token)
        fetch("http://192.168.1.8:8000/api/user/details", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
          },
        })
        .then(res => res.json())
        .then(
          (result) => {
            // display token. can be other user details
            Alert.alert("Welcome, " + result.name);
          }
        );
      });
      
      return(


            <View style={styles.header}>
      {/*  <Header
          leftComponent={{
            icon: 'menu',
            color: '#fff',
            onPress: () => {this.props.navigation.openDrawer()},
          }}
          
          rightComponent={{ 
            icon: 'person', 
            color: '#fff',
            onPress: () => this.props.navigation.navigate('My Account')}}
          centerComponent={{  style: { color: '#fff' } }}
          backgroundColor="#028A7E"
        />
 */}
            <View style={styles.container}>  
            
                    <Text>Profile Screen</Text>

            </View>

        </View> 
      
     
        )
    }
}
export default Profile;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        flex: 1,
        paddingTop: 4,
        backgroundColor: '#ecf0f1',
      }
})