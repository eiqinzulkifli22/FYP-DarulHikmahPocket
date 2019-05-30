import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, FlatList, TouchableOpacity, Alert, Image } from 'react-native';
import { Item } from 'native-base';
import { env } from 'config/env.js';
import { SecureStore } from 'expo';
import { SearchBar, Button } from 'react-native-elements';
import { HeaderBackButton } from 'react-navigation';


let userToken = "";

export default class OpacScreen2 extends Component {
  static navigationOptions = ({navigation}) => ({
    title:'OPAC',
    headerLeft:(
      <HeaderBackButton 
        onPress={()=>{navigation.navigate('OpacScreen')}}/>
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
    // console.log("Searching term: ", term)

    fetch(env('LARAVEL_HOST') + '/api/book/search', {
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
        // console.log("Retrieve:", responseJson);

        if (responseJson.length == 0) {
          Alert.alert("Result not found");
        }

        this.setState({
          dataSource: responseJson
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  updateSearch = searchTerm => {
    // console.log("Typing:", searchTerm)
    this.setState({ searchTerm });
    this.search(searchTerm);
  };

  renderItem = (item, index) => {
    // console.log("Render item:", item.item)
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('ViewBookDetails2', item)} >
        <Image source={{uri: item.item.cover_page_url}} style={styles.bookImage}/>
        <View style={{ flex: 1, justifyContent: 'center' }} style={styles.bookdetails}>
            <Text >
              {item.item.title}
            </Text>
            <Text>
              {item.item.author}
            </Text>
            <Text>
              {item.item.publication_year}
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

        <SearchBar
        lightTheme
        // showLoading={true}
          containerStyle={{ }}
          inputStyle={{}}
          // style={styles.TextInputStyleClass}
          placeholder="Search"
          onChangeText={this.updateSearch}
          value={searchTerm}
          color='#028A7E'
          placeholderTextColor='#028A7E'
          inputStyle={{}}
          inputContainerStylesearchIcon={{}}
          rightIconContainerStyle={{}}
          leftIconContainerStyle={{}}
          searchIcon={{ color: '#028A7E'}}
          clearIcon={{ color: '#028A7E'}}
          platform="ios"
          cancelButtonProps={{ color: '#028A7E' }}

        />
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
