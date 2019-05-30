
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { BarCodeScanner, Permissions, SecureStore } from 'expo';

export default class BarcodeScanner extends React.Component {
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
 
    SecureStore.getItemAsync('user_token')
      .then((token) => {
        const {title} = this.state;
        const {isbn} = this.state;
       
        fetch("http://192.168.1.8:8000/api/book/search", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
          },

         

          body: JSON.stringify({
            term : data,
            title : title,
            isbn : isbn,
          }),
        })
        .then(res => res.json())
        //Vibration.vibrate(DURATION)
        .then(
          (books) => {
            console.log(books);
            

            books.forEach(book => {
              return (
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('ViewBookDetails')} 
                                key={book.id}>  
                  <View>
                    <Text>{book.title}</Text>
                  </View>
                </TouchableOpacity>
              )
            });
          }
        );
      });
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
