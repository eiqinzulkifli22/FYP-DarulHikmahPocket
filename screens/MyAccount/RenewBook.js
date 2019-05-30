import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Alert, Image } from 'react-native';
import { SecureStore } from 'expo';
import { env } from 'config/env.js';
import '@expo/vector-icons';

class RenewBook extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  RenewLoan = (currentItem) => {
    const that = this

    SecureStore.getItemAsync('user_token')

      .then((token) => {
        fetch(env('LARAVEL_HOST') + "/api/loans/" + currentItem.id + "/renew/", {
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
              Alert.alert('Renew succeeded!');
              this.props.navigation.navigate('MyAccountScreen')
            }
            else {
              Alert.alert('Renew failed! ' + result.message);
            }
          },
            (error) => {
              Alert.alert("An error just occurred.");
            }
          )
      }
      )
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'RENEW'
    //header: null
  })
  render() {
    const { navigation } = this.props;
    const currentItem = navigation.getParam('currentItem');

    return (
      // header style
      <View>
        <Image source={{ uri: currentItem.book_copy.book.cover_page_url }} style={styles.bookImage} />

        <View style={{ flex: 1, alignItems: 'center', }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('ViewBookDetails')}
            key={88}>
            <View style={styles.container}>
              <View style={styles.leftColumn}>
                <Text style={{ fontWeight: 'bold' }}>Copy No</Text>
                <Text style={{ fontWeight: 'bold' }}>Call No</Text>
                <Text style={{ fontWeight: 'bold' }}>Title</Text>
                <Text style={{ fontWeight: 'bold' }}>Author</Text>
                <Text style={{ fontWeight: 'bold' }}>Year</Text>
                <Text style={{ fontWeight: 'bold' }}>Publisher</Text>
                <Text style={{ fontWeight: 'bold' }}>Edition</Text>
                <Text style={{ fontWeight: 'bold' }}>ISBN</Text>
                <Text></Text>
                <Text style={{ fontWeight: 'bold', color: 'red' }}>Due Date</Text>
              </View>

              <View style={styles.rightColumn}>
                <Text>: {currentItem.book_copy.copy_no}</Text>
                <Text>: {currentItem.book_copy.book.call_no}</Text>
                <Text>: {currentItem.book_copy.book.title}</Text>
                <Text>: {currentItem.book_copy.book.author}</Text>
                <Text>: {currentItem.book_copy.book.publication_year}</Text>
                <Text>: {currentItem.book_copy.book.publisher}</Text>
                <Text>: {currentItem.book_copy.book.edition}</Text>
                <Text>: {currentItem.book_copy.book.isbn}</Text>
                <Text></Text>
                <Text style={{color: 'red' }}>: {currentItem.formatted_due_date}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={[{ width: "45%", height: 70, position: 'absolute', top: 550, left: 125 }]}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => { this.RenewLoan(currentItem) }}
          >
            <Text style={{ color: "#FFFFFF", fontSize: 15 }}> RENEW </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
export default RenewBook;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    paddingTop: 4,
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
  },

  bookImage: {
    position: 'absolute',
    left: 160,
    height: 175,
    width: 120,
    top: 40,
  }
})