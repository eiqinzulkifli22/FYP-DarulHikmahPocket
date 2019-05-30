import React from 'react';
import { View, Text, StyleSheet,ImageBackground } from 'react-native';
import '@expo/vector-icons';
import { SecureStore } from 'expo';
import { env } from 'config/env.js';
import { HeaderBackButton } from 'react-navigation';

class Profile extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'PROFILE',
    headerLeft: (
      <HeaderBackButton
        onPress={() => { navigation.navigate('MyAccountScreen') }} />
    )
  })

  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "",
        email: "",
        matric_no: "",
        centre: "",
        phone_no: "",
        barcode_no: "",
      }
    };
  }

  render() {
    const { userInfo } = this.state;
    const that = this;

    SecureStore.getItemAsync('user_token')
      .then((token) => {
        console.log("Token: " + token)
        fetch(env('LARAVEL_HOST') + "/api/user/details", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
          },
        })
          .then(res => res.json())
          .then(
            (result) => {
              console.log(result.barcode_no);
              console.log(result.name);

              that.setState({
                userInfo: {
                  name: result.name,
                  email: result.email,
                  matric_no: result.matric_no,
                  centre: result.centre,
                  phone_no: result.phone_no,
                  barcode_no: result.barcode_no,
                }
              });
            }
          );
      });

    return (

      <ImageBackground source={require('./main.jpg')} opacity={0.11} style={styles.backgroundImage}>

      <View style={styles.header}>
        <View style={styles.RectangleShapeView} >
          <Text style={{
            textAlign: 'center', alignItems: 'center',
            fontWeight: 'bold', fontSize: 18, color: '#fff',
            paddingTop: 3
          }}>
            PERSONAL INFORMATION
          </Text>
        </View>

        <View style={styles.container}>
          <View style={styles.leftColumn}>
            
            <Text></Text>
            <Text style={{ fontWeight: 'bold' }}>Staff/Matric No</Text>
            <Text></Text>
            <Text style={{ fontWeight: 'bold' }}>Full Name</Text>
            <Text></Text>
            <Text style={{ fontWeight: 'bold' }}>Centre/Kuliyyah</Text>
            <Text></Text>
            <Text></Text>
            <Text style={{ fontWeight: 'bold' }}>Email Address</Text>
            <Text></Text>
            <Text style={{ fontWeight: 'bold' }}>Phone No</Text>

          </View>

          <View style={styles.rightColumn}>
           
            <Text></Text>
            <Text>: {userInfo.matric_no}</Text>
            <Text></Text>
            <Text>: {userInfo.name}</Text>
            <Text></Text>
            <Text>: {userInfo.centre}</Text>
            <Text></Text>
            <Text>: {userInfo.email}</Text>
            <Text></Text>
            <Text>: {userInfo.phone_no}</Text>
          </View>


          <View style={styles.RectangleShapeView} >
            <Text style={{
              textAlign: 'center', alignItems: 'center',
              fontWeight: 'bold', fontSize: 18, color: '#fff',
              paddingTop: 3
            }}>
              ACCOUNT INFORMATION
          </Text>
          </View>
          <View style={styles.leftColumn2}>
            <Text></Text>
            <Text style={{ fontWeight: 'bold' }}> Barcode No </Text>
            <Text></Text>
            <Text style={{ fontWeight: 'bold' }}> PIN </Text>


          </View>

          <View style={styles.rightColumn2}>
            <Text></Text>
            <Text>: {userInfo.barcode_no}</Text>
            <Text></Text>
            <Text>: {userInfo.password}</Text>


          </View>
        </View>
      </View>
      </ImageBackground>
    )
  }
}
export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    flex: 1,
    paddingTop: 4,
    backgroundColor: '#ecf0f1',
  },

  leftColumn: {
    position: 'absolute',
    top: 60,
    left: 10,
    //right: 10,
  },

  rightColumn: {
    position: 'absolute',
    top: 60,
    left: 135,
    paddingRight: 145,
    //right: 250,

  },

  leftColumn2: {
    position: 'absolute',
    top: 360,
    left: 10,
    //right: 10,
  },

  rightColumn2: {
    position: 'absolute',
    top: 360,
    left: 135,
    paddingRight: 135,
    //right: 250,

  },

  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#028A7E',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    width: '100%',
    bottom: 10,
    position: 'absolute',
  },

  RectangleShapeView: {

    marginTop: 20,
    width: '100%',
    height: 30,
    backgroundColor: '#028A7E'
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },

})