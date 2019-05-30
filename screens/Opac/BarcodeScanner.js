import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { BarCodeScanner, Permissions, SecureStore } from 'expo';
import { env } from 'config/env.js';
import { HeaderBackButton } from 'react-navigation';

export default class BarcodeScanner extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title:'SCAN ISBN',
    headerLeft:(
      <HeaderBackButton 
        onPress={()=>{navigation.navigate('OpacScreen')}}/>
        )
  }) 

   state = {
    hasCameraPermission: null,
  } 

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
    }

  render() {
    const { hasCameraPermission } = this.state;
    const DURATION = 10000;
    const { navigate } = this.props.navigation;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    // <uses-permission android:name="android.permission.VIBRATE"/> 
    return (
      <View style={{ flex: 1 }}>
        <BarCodeScanner
          onBarCodeScanned={this.handleBarCodeScanned}
          style={StyleSheet.absoluteFill}
        />
      </View>
    );
  }

  handleBarCodeScanned = ( {type, data} ) => {
    const that = this
    SecureStore.getItemAsync('user_token')
      .then((token) => {
       fetch(env('LARAVEL_HOST') + "/api/book/search", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
          },

          body: JSON.stringify({
            term : data,
          }),
        })
        .then(res => res.json())
        //Vibration.vibrate(DURATION)
        .then(
          (books) => {
            // console.log(books);
            // save books in a central state

            if(books.length == 0) {
              Alert.alert("Record not found.");
            }
            else {
              that.props.navigation.navigate('ViewBookDetails', {
                book: books[0],
              })
            }
          }
        );
      })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#DBDBD6',
  },
});
