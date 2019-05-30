import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import { Icon, Container, Content, Left } from 'native-base'
import { createStackNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator, createNavigationContainer } from 'react-navigation';
import { Header, SearchBar } from 'react-native-elements';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

class IIUMLibScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    // title: 'IIUM Library'
    header: null,
    activeTintColor: 'orange',

  })
  render() {
    return (

      <View style={styles.header}>
        <Header

          leftComponent={{
            icon: 'menu',
            color: '#fff',
            onPress: () => { this.props.navigation.openDrawer() },
          }}

          rightComponent={{
            icon: 'person',
            color: '#fff',
            onPress: () => this.props.navigation.navigate('MyAccountScreen')
          }}
          centerComponent={{
            text: 'IIUM LIBRARY', style: {
              color: '#fff',
              fontWeight: 'bold', fontSize: 15
            }
          }}
          backgroundColor="#028A7E"
        />

        <View style={styles.container}>
          <Image source={require('./main.jpg')} opacity={0.10} style={styles.backgroundImage} />


          {/* <Text style={styles.PageTitle}>IIUM LIBRARY </Text> */}

          <View style={styles.openingHours}
            onPress={() => this.props.navigation.navigate('OpeningHours')}>

            <MaterialCommunityIcons style={styles.iconmenu} name='clock' size={35}
              onPress={() => this.props.navigation.navigate('OpeningHours')} />

            <TouchableOpacity
              style={styles.menu}
              onPress={() => this.props.navigation.navigate('OpeningHours')}>
              <Text style={{ color: "#FFFFFF", fontSize: 17, justifyContent: 'center' }}> OPENING HOURS </Text>
            </TouchableOpacity>

          </View>


          <View style={styles.contacts}
            onPress={() => this.props.navigation.navigate('Contacts')}>

            <MaterialCommunityIcons style={styles.iconmenu} name='contact-mail' size={35}
              onPress={() => this.props.navigation.navigate('Contacts')} />


            <TouchableOpacity
              style={styles.menu}
              onPress={() => this.props.navigation.navigate('Contacts')}>
              <Text style={{ color: "#FFFFFF", fontSize: 17, justifyContent: 'center' }}> CONTACTS </Text>
            </TouchableOpacity>

          </View>

          <View style={styles.news}
            onPress={() => this.props.navigation.navigate('News')}>

            <MaterialCommunityIcons style={styles.iconmenu} name='clipboard-outline' size={35}
              onPress={() => this.props.navigation.navigate('News')} />

            <TouchableOpacity
              style={styles.menu}
              onPress={() => this.props.navigation.navigate('News')}>
              <Text style={{ color: "#FFFFFF", fontSize: 17, justifyContent: 'center' }}> NEWS </Text>
            </TouchableOpacity>

          </View>


          <View style={styles.events}
            onPress={() => this.props.navigation.navigate('Events')}>

            <MaterialCommunityIcons style={styles.iconmenu} name='calendar-today' size={35}
              onPress={() => this.props.navigation.navigate('Events')} />

            <TouchableOpacity
              style={styles.menu}
              onPress={() => this.props.navigation.navigate('Events')}>
              <Text style={{ color: "#FFFFFF", fontSize: 17, justifyContent: 'center' }}> EVENTS </Text>
            </TouchableOpacity>

          </View>

           <View style={styles.facilities}
            onPress={() => this.props.navigation.navigate('Facilities')}>
            <MaterialCommunityIcons style={styles.iconmenu} name='chair-school' size={35}
              onPress={() => this.props.navigation.navigate('Facilities')} />


            <TouchableOpacity
              style={styles.menu}
              // color="#028A7E"
              title='FACILITIES'
              onPress={() => this.props.navigation.navigate('Facilities')}>
              <Text style={{ color: "#FFFFFF", fontSize: 17, justifyContent: 'center' }}> FACILITIES </Text>
              </TouchableOpacity>
          </View> 

          <View style={styles.services}
            onPress={() => this.props.navigation.navigate('Services')}>
            <MaterialCommunityIcons style={styles.iconmenu} name='room-service' size={35}
              onPress={() => this.props.navigation.navigate('Services')} />

            <TouchableOpacity
              style={styles.menu}
              onPress={() => this.props.navigation.navigate('Services')}>
              <Text style={{ color: "#FFFFFF", fontSize: 17, justifyContent: 'center' }}> SERVICES </Text>
            </TouchableOpacity>

          </View>

          <View style={styles.collections}
            onPress={() => this.props.navigation.navigate('Collections')}>
            <FontAwesome style={styles.iconmenu} name='book' size={35}
              onPress={() => this.props.navigation.navigate('Collections')} />

            <TouchableOpacity
              style={styles.menu}
              onPress={() => this.props.navigation.navigate('Collections')}>
              <Text style={{ color: "#FFFFFF", fontSize: 17, justifyContent: 'center' }}> COLLECTIONS </Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>

    )
  }
}
export default IIUMLibScreen;

/* const AppStackNavigator = createAppStackNavigator({
  IIUMLibScreen: {
    screen: IIUMLibScreen},

  OpeningHours: {
    screen: OpeningHours}
}) */

//export default createAppContainer(AppStackNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  PageTitle: {
    textAlign: 'center',
    //fontsize: 100,
    color: '#028A7E',
    fontWeight: 'bold',
    marginBottom: 25,
    position: 'absolute',
    top: 50,

  },

  menu: {
    width: "100%",
    height: 40,
    backgroundColor: '#028A7E',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',

  },

  iconmenu: {
    color: '#028A7E',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 10,
  },

  openingHours: {
    marginTop: 10,
    marginBottom: 10,
    position: 'absolute',
    top: 100,
    left: 25,
    width: "35%",
    height: "50%",
    color: '#028A7E',


  },

  contacts: {
    marginTop: 10,
    marginBottom: 10,
    position: 'absolute',
    top: 100,
    right: 25,
    width: "35%",
    height: "50%",
    color: '#028A7E',

  },

  news: {
    marginTop: 10,
    marginBottom: 10,
    position: 'absolute',
    top: 215,
    left: 25,
    width: "35%",
    height: "50%",
    color: '#028A7E',

  },

  events: {
    marginTop: 10,
    marginBottom: 10,
    position: 'absolute',
    top: 215,
    right: 25,
    width: "35%",
    height: "50%",
    color: '#028A7E',

  },

  facilities: {
    marginTop: 10,
    marginBottom: 10,
    position: 'absolute',
    top: 330,
    left: 25,
    width: "35%",
    height: "50%",
    color: '#028A7E',

  },


  services: {
    marginTop: 10,
    marginBottom: 10,
    position: 'absolute',
    top: 330,
    right: 25,
    width: "35%",
    height: "50%",
    color: '#028A7E',

  },

  collections: {
    marginTop: 10,
    marginBottom: 10,
    position: 'absolute',
    top: 445,
    left: 25,
    width: "35%",
    height: "50%",
    color: '#028A7E',

  },

  header: {
    flex: 1,
    paddingTop: 4,
    backgroundColor: '#ecf0f1',
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'

  },
})