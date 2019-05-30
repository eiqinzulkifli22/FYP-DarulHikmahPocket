import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Alert, Image } from 'react-native';
import { Container, Content } from 'native-base'
import { Header, SearchBar } from 'react-native-elements';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { SecureStore } from 'expo';
import { env } from 'config/env.js';

import '@expo/vector-icons';
//import IIUMLibScreen from './IIUMLibScreen';
//import OpeningHours from './OpeningHours';


class HoldCancel extends React.Component {
  constructor(props) {
    super(props);
  }

  CancelHold = (currentItem) => {
    const that = this

    SecureStore.getItemAsync('user_token')
      .then((token) => {
        fetch(env('LARAVEL_HOST') + "/api/holds/" + currentItem.id + "/release", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
          },
        })
          .then(res => res.json())
          .then((result) => {
            console.log(result);

            if (result.success) {
              Alert.alert(result.message);
              this.props.navigation.navigate('MyAccountScreen')
            }
            // else {
            //   Alert.alert('Renew failed! ' + result.message);
            //   this.props.navigation.navigate('OpacScreen2')
            // }
          },
            (error) => {
              // Alert.alert(error);
              Alert.alert("An error just occurred.");
            }
          )
      }
      )
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'HOLD'
    //header: null
  })

  render() {
    const { navigation } = this.props;
    const currentItem = navigation.getParam('currentItem');

    console.log(currentItem)

    return (
      // header style
      <View>
        <Image source={{ uri: currentItem.book.cover_page_url }} style={styles.bookImage} />

        <View style={{ flex: 1, alignItems: 'center', }}>
          {/* <Text>My Account Screen</Text> */}
          <TouchableOpacity onPress={() => this.props.navigation.navigate('ViewBookDetails')}
            key={88}>
            <View style={styles.container}>
              <View style={styles.leftColumn}>
                <Text style={{ fontWeight: 'bold' }}>Call No</Text>
                <Text style={{ fontWeight: 'bold' }}>Title</Text>
                <Text style={{ fontWeight: 'bold' }}>Author</Text>
                <Text style={{ fontWeight: 'bold' }}>Year</Text>
                <Text style={{ fontWeight: 'bold' }}>Publisher</Text>
                <Text style={{ fontWeight: 'bold' }}>Edition</Text>
                <Text style={{ fontWeight: 'bold' }}>ISBN</Text>
                <Text></Text>
                <Text style={{ fontWeight: 'bold' }}>Hold Status</Text>
              </View>

              <View style={styles.rightColumn}>
                <Text>: {currentItem.book.call_no}</Text>
                <Text>: {currentItem.book.title}</Text>
                <Text>: {currentItem.book.author}</Text>
                <Text>: {currentItem.book.publication_year}</Text>
                <Text>: {currentItem.book.publisher}</Text>
                <Text>: {currentItem.book.edition}</Text>
                <Text>: {currentItem.book.isbn}</Text>
                <Text></Text>
                <Text>: Requested for hold</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={[{ width: "45%", height: 70, position: 'absolute', top: 550, left: 125 }]}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => { this.CancelHold(currentItem) }}
          >
            <Text style={{ color: "#FFFFFF", fontSize: 15 }}> CANCEL HOLD</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
export default HoldCancel;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center'
  },
  header: {
    flex: 1,
    paddingTop: 4,
    //backgroundColor: '#ecf0f1',
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

  leftColumn: {
    position: 'absolute',
    top: 300,
    left: -185,
    //right: 10,
    paddingLeft: 1,

  },

  rightColumn: {
    position: 'absolute',
    top: 300,
    left: -100,
    // right: -200,
    // paddingRight: 7,

  },

  bookImage: {
    position: 'absolute',
    left: 160,
    height: 175,
    width: 120,
    top: 40,
  }
})