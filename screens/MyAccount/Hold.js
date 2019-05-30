import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, FlatList, TouchableOpacity, Alert, Image } from 'react-native';
import { env } from 'config/env.js';
import { SecureStore } from 'expo';
import { HeaderBackButton } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';

let userToken = "";

export default class Hold extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'HOLD',
    headerLeft: (
      <HeaderBackButton
        onPress={() => { navigation.navigate('MyAccountScreen') }} />
    ),
    headerRight: (
      <MaterialCommunityIcons style={{paddingRight: 5}} name='barcode-scan' size={25}
      onPress={() => { navigation.navigate('OpacScreen')}} />
        )

  })
  constructor() {
    super()
    this.state = {
      dataSource: [],
      searchTerm: ""
    }
  }

  search = (term) => {
    fetch(env('LARAVEL_HOST') + '/api/holds/holdDetails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + userToken,
      },
      body: JSON.stringify({
        term: term,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {

        if (responseJson.length == 0) {
          //  Alert.alert("Result not found");
        }

        this.setState({
          dataSource: responseJson
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  renderItem = (item) => {
    // console.log("Render item:", item.item)
    let currentItem = item.item;

    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('HoldCancel', { 'currentItem': currentItem })} >
          <Image source={{ uri: currentItem.book.cover_page_url }} style={styles.bookImage} />
          <View style={{ flex: 1, justifyContent: 'center' }} style={styles.bookdetails}>
            <Text >
              {currentItem.book.title}
            </Text>
            <Text >
              {currentItem.book.author}
            </Text>
            <Text>
              {currentItem.desc}
            </Text>

          </View>
        </TouchableOpacity>
      </View>
    )
  }

  keyExtractor = (item, index) => {
    return index.toString();
  };

  componentDidMount() {
    SecureStore.getItemAsync('user_token')
      .then((token) => {
        userToken = token;
        this.search('');
      })
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }
  render() {
    const { searchTerm } = this.state;
    return (
      <View style={styles.MainContainer}>


        <FlatList
          icon style={styles.liststyle}
          data={this.state.dataSource}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          height={20}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({

  MainContainer: {

    // Setting up View inside content in Vertically center.
    justifyContent: 'center',
    flex: 1,
    padding: 5,
  },

  textViewContainer: {
    textAlignVertical: 'center',
    padding: 10,
    fontSize: 20,
    color: '#fff',
  },

  TextInputStyleClass: {
    textAlign: 'center',
    alignItems: 'center',
    marginBottom: 15,
    height: 35,
    width: 300,
    borderRadius: 10,
    borderWidth: 1,
    color: '#028a7e',
  },

  liststyle: {
    backgroundColor: "white",
    color: "black",
    fontSize: 18,
    marginTop: 20,
  },

  bookdetails: {
    left: 75,
    marginBottom: 50,
    marginTop: 10,
  },

  bookImage: {
    position: 'absolute',
    left: 5,
    height: 75,
    width: 60,
    marginTop: 10,
  }

});

