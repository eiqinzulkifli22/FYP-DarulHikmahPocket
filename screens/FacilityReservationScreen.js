import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, Linking, TouchableOpacity } from 'react-native';
import { Icon, Container, Content, Left } from 'native-base'
import { Header, SearchBar } from 'react-native-elements';
import { createStackNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator, createNavigationContainer } from 'react-navigation';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';



class FacilityReservationScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  })

  render() {
    return (
      //<Ionicons name="keyboard_arrow_left" size={32} color="green" />
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
            text: 'FACILITIY', style: {
              color: '#fff',
              fontWeight: 'bold', fontSize: 15
            }
          }}
          backgroundColor="#028A7E"
        />


        <View style={styles.container}>
          <Image source={require('./main.jpg')} opacity={0.10} style={styles.backgroundImage} />


          {/* <Text style={styles.PageTitle}>FACILITIES RESERVATION</Text> */}
          <Text style={styles.PageTitle2}>(FOR STAFF ONLY)</Text>

          <View style={styles.facilities}
            onPress={() => this.props.navigation.navigate('ListFacilities')}>

            <MaterialCommunityIcons style={styles.iconmenu} name='chair-school' size={35}
              onPress={() => this.props.navigation.navigate('ListFacilities')} />

            <TouchableOpacity
              style={styles.menu}
              onPress={() => this.props.navigation.navigate('ListFacilities')}  >
              <Text style={{ color: "#FFFFFF", fontSize: 17, justifyContent: 'center' }}> ROOMS </Text>
            </TouchableOpacity>


          </View>


          <View style={styles.schedule}
            //link http://apps.lib.iium.edu.my/WebCalendar/month.php
            onPress={() => Linking.openURL('http://apps.lib.iium.edu.my/WebCalendar/month.php')}>

            <MaterialCommunityIcons style={styles.iconmenu} name='calendar-range' size={35}
              ////link http://apps.lib.iium.edu.my/WebCalendar/month.php
              onPress={() => Linking.openURL('http://apps.lib.iium.edu.my/WebCalendar/month.php')} />

            <TouchableOpacity
              style={styles.menu}
              onPress={() => Linking.openURL('http://apps.lib.iium.edu.my/WebCalendar/month.php')}  >
              <Text style={{ color: "#FFFFFF", fontSize: 17, justifyContent: 'center' }}> SCHEDULE </Text>
            </TouchableOpacity>

          </View>


          <View style={styles.policy}
            onPress={() => Linking.openURL('https://lib.iium.edu.my/resources/Multimedia%20Facilities%20and%20Equipment.pdf')}>

            <MaterialCommunityIcons style={styles.iconmenu} name='clipboard-alert' size={35}
              onPress={() => Linking.openURL('https://lib.iium.edu.my/resources/Multimedia%20Facilities%20and%20Equipment.pdf')} />

            <TouchableOpacity
              style={styles.menu}
              onPress={() => Linking.openURL('https://lib.iium.edu.my/resources/Multimedia%20Facilities%20and%20Equipment.pdf')} >
              <Text style={{ color: "#FFFFFF", fontSize: 17, justifyContent: 'center' }}> POLICY </Text>
            </TouchableOpacity>

          </View>

          <View style={styles.form}
            onPress={() => Linking.openURL('https://lib.iium.edu.my/index.jsp?module=ROOT&action=room_book1.jsp')}>

            <FontAwesome style={styles.iconmenu} name='pencil-square-o' size={35}
              onPress={() => Linking.openURL('https://lib.iium.edu.my/index.jsp?module=ROOT&action=room_book1.jsp')} />

            <TouchableOpacity
              style={styles.menu}
              onPress={() => Linking.openURL('https://lib.iium.edu.my/index.jsp?module=ROOT&action=room_book1.jsp')} >
              <Text style={{ color: "#FFFFFF", fontSize: 17, justifyContent: 'center' }}> ONLINE FORM </Text>
            </TouchableOpacity>

          </View>



        </View>
      </View>
    )
  }
}
export default FacilityReservationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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

  PageTitle: {
    textAlign: 'center',
    //fontsize: 100,
    color: '#028A7E',
    fontWeight: 'bold',
    //marginBottom: 25,
    position: 'absolute',
    top: 50,

  },

  PageTitle2: {
    textAlign: 'center',
    //fontsize: 100,
    color: '#028A7E',
    fontWeight: 'bold',
    marginBottom: 25,
    position: 'absolute',
    top: 10,

  },

  iconmenu: {
    color: '#028A7E',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 10,
  },

  menu: {
    width: "100%",
    height: 40,
    backgroundColor: "#028A7E",
    alignItems: "center",
    //textAlign: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff'

  },

  facilities: {
    marginTop: 10,
    marginBottom: 10,
    position: 'absolute',
    top: 100,
    left: 25,
    width: "35%",
    height: "50%",
    color: '#028A7E',


  },

  schedule: {
    marginTop: 10,
    marginBottom: 10,
    position: 'absolute',
    top: 100,
    right: 25,
    width: "35%",
    height: "50%",
    color: '#028A7E',

  },

  policy: {
    marginTop: 10,
    marginBottom: 10,
    position: 'absolute',
    top: 215,
    left: 25,
    width: "35%",
    height: "50%",
    color: '#028A7E',

  },


  form: {
    marginTop: 10,
    marginBottom: 10,
    position: 'absolute',
    top: 215,
    right: 25,
    width: "35%",
    height: "50%",
    color: '#028A7E',

  },
})