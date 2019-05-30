import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { BarCodeScanner, Permissions, SecureStore } from 'expo';
import { env } from 'config/env.js';
import { HeaderBackButton } from 'react-navigation';

export default class BarcodeScannerLoan extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title:'SCAN COPY NUMBER',
    headerLeft:(
      <HeaderBackButton 
        onPress={()=>{navigation.navigate('MyAccountScreen')}}/>
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
    console.log("Copy number scanned: " + data);

    SecureStore.getItemAsync('user_token')
      .then((token) => {
        console.log("User Token: " + token)
        
        fetch(env('LARAVEL_HOST') + "/api/book/searchByCopyNo", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
          },

          body: JSON.stringify({
            copy_no : data,
          }),
        })
        .then(res => res.json())
        //Vibration.vibrate(DURATION)
        .then(
          (bookCopies) => {
            if(bookCopies.length == 0) {
              Alert.alert("Record not found.");
            }
            else {
              let book = bookCopies[0];
              console.log("Book found:", book);

              //Check book status
              if(book.status.id != 1) {
                Alert.alert("This book is not available for loan.");
              }
              else {
                // save bookCopies in a central state
                that.props.navigation.navigate('ViewBookLoan', { 
                  bookCopy: book,
                })
              }
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