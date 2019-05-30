import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Alert, Image } from 'react-native';
import { Container, Content } from 'native-base'
import { Header, SearchBar } from 'react-native-elements';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { SecureStore } from 'expo';
import { env } from 'config/env.js';
import '@expo/vector-icons';

class ViewBookDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      book_id: '',
      book_status_id: '',
      isbn: ''

      // spinner: false,
    }
  }


  BookHold = (bookId) => {
    const that = this

    SecureStore.getItemAsync('user_token')
      .then((token) => {
        fetch(env('LARAVEL_HOST') + "/api/holds/" + bookId + "/reserve", {
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
              Alert.alert('Hold succeeded! ' + result.message);
              this.props.navigation.navigate('OpacScreen')
            }
            else {
              Alert.alert('Hold failed! ' + result.message);
              this.props.navigation.navigate('OpacScreen')
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


  static navigationOptions = ({ navigation }) => ({
    title: 'BOOK DETAILS '
    // header: null
  })
  render() {
    const { book } = this.props.navigation.state.params;
    console.log(book)

    return (
      <View style={styles.header}>

        <Image source={{ uri: book.cover_page_url }} style={styles.bookImage} />

        <View style={{ flex: 1, alignItems: 'center', }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('ViewBookDetails')}
            key={88}>
            <View style={styles.container}>
              <View style={styles.leftColumn}>
                <Text style={{ fontWeight: 'bold' }}>Title</Text>
                <Text style={{ fontWeight: 'bold' }}>Author</Text>
                <Text style={{ fontWeight: 'bold' }}>Year</Text>
                <Text style={{ fontWeight: 'bold' }}>Publisher</Text>
                <Text style={{ fontWeight: 'bold' }}>Edition</Text>
                <Text style={{ fontWeight: 'bold' }}>ISBN</Text>
                <Text style={{ fontWeight: 'bold' }}></Text>
                <Text style={{ fontWeight: 'bold' }}>Call No</Text>
                <Text style={{ fontWeight: 'bold' }}>Library</Text>
                <Text style={{ fontWeight: 'bold' }}>Level</Text>
                <Text style={{ fontWeight: 'bold' }}>Shelf</Text>
              </View>

              <View style={styles.rightColumn}>
                <Text>: {book.title}</Text>
                <Text>: {book.author}</Text>
                <Text>: {book.publication_year}</Text>
                <Text>: {book.publisher}</Text>
                <Text>: {book.edition}</Text>
                <Text>: {book.isbn}</Text>
                <Text></Text>
                <Text>: {book.call_no}</Text>
                <Text>: {book.library_location}</Text>
                <Text>: {book.book_level}</Text>
                <Text>: {book.book_shelf}</Text>
              </View>
            </View>
          </TouchableOpacity>

        </View>

        <View style={[{ width: "45%", height: 70, position: 'absolute', top: 550, left: 125 }]}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => { this.BookHold(book.id) }}
          >
            <Text style={{ color: "#FFFFFF", fontSize: 15 }}> HOLD </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
export default ViewBookDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    paddingTop: 4,
    backgroundColor: '#ecf0f1',
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