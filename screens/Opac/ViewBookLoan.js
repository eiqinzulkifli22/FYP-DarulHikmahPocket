import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Alert, Image } from 'react-native';
import { SecureStore } from 'expo';
import { env } from 'config/env.js';
import '@expo/vector-icons';

class ViewBookLoan extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'LOAN BOOK'
    // header: null
  })

  //Call Borrow Function at Laravel
  Loan = (bookCopyId) => {
    const that = this

    SecureStore.getItemAsync('user_token')
      .then((token) => {
        fetch(env('LARAVEL_HOST') + "/api/loans/" + bookCopyId + "/borrow", {
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
              Alert.alert('Loan succeeded! ' + result.message);
              this.props.navigation.navigate('MyAccountScreen')
            }
            else {
              Alert.alert('Loan failed! ' + result.message);
              this.props.navigation.navigate('MyAccountScreen')
            }
          },
            (error) => {
              // Alert.alert(error);
              Alert.alert("An error just occurred.");
            }
          )
      }
      )
  }

  render() {
    const { bookCopy } = this.props.navigation.state.params;

    return (
      // header style
      <View style={styles.header}>

        <Image source={{ uri: bookCopy.book.cover_page_url }} style={styles.bookImage} />

        <View style={{ flex: 1, alignItems: 'center', }}>
          <View style={styles.leftColumn}>
            <Text style={{ fontWeight: 'bold' }}>Title</Text>
            <Text style={{ fontWeight: 'bold' }}>Author</Text>
            <Text style={{ fontWeight: 'bold' }}>Year</Text>
            <Text style={{ fontWeight: 'bold' }}>Publisher</Text>
            <Text style={{ fontWeight: 'bold' }}>Edition</Text>
            <Text style={{ fontWeight: 'bold' }}>ISBN</Text>
            <Text style={{ fontWeight: 'bold' }}></Text>
            <Text style={{ fontWeight: 'bold' }}>Call No</Text>
            <Text style={{ fontWeight: 'bold' }}>Copy No</Text>
            <Text style={{ fontWeight: 'bold' }}>Availability</Text>
          </View>

          <View style={styles.rightColumn}>
            <Text>: {bookCopy.book.title}</Text>
            <Text>: {bookCopy.book.author}</Text>
            <Text>: {bookCopy.book.publication_year}</Text>
            <Text>: {bookCopy.book.publisher}</Text>
            <Text>: {bookCopy.book.edition}</Text>
            <Text>: {bookCopy.book.isbn}</Text>
            <Text></Text>
            <Text>: {bookCopy.book.call_no}</Text>
            <Text>: {bookCopy.copy_no}</Text>
            <Text>: {bookCopy.status.desc}</Text>
          </View>

          <View style={[{ width: "45%", height: 70, position: 'absolute', top: 550, left: 10 }]}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => { this.Loan(bookCopy.id) }}
            >
              <Text style={{ color: "#FFFFFF", fontSize: 15 }}> CONFIRM </Text>
            </TouchableOpacity>
          </View>

          <View style={[{ width: "45%", height: 70, position: 'absolute', top: 550, right: 10 }]}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('MyAccountScreen')}
            >
              <Text style={{ color: "#FFFFFF", fontSize: 15 }}> CANCEL </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
export default ViewBookLoan;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
    left: 10,
    //right: 10,
    paddingLeft: 1,

  },

  rightColumn: {
    position: 'absolute',
    top: 300,
    left: 100,
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