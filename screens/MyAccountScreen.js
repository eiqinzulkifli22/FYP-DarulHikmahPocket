
import React from 'react';
import { View, Text, StyleSheet, Button, Alert, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Header, SearchBar } from 'react-native-elements';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import DrawerHeader from '../components/DrawerHeader';
import Foundation from '@expo/vector-icons/Foundation';

class MyAccountScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    // title: 'MY ACCOUNT'
    header: null
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
            onPress: () => this.props.navigation.navigate('MyAccountScreen')}}

          centerComponent={{
            text: 'MY ACCOUNT', style: {
              color: '#fff',
              fontWeight: 'bold', fontSize: 15
            }
          }}
          backgroundColor="#028A7E"
        />


        <View style={styles.container}>

        <Image source={require('./main.jpg')} opacity={0.10} style={styles.backgroundImage} />

          <View style={styles.profile}
            onPress={() => this.props.navigation.navigate('Profile')}>

            <MaterialCommunityIcons style={styles.iconmenu} name='account' size={35}
              onPress={() => this.props.navigation.navigate('Profile')} />

            <TouchableOpacity
              style={styles.menu}
              onPress={() => this.props.navigation.navigate('Profile')}>
              <Text style={{ color: "#FFFFFF", fontSize: 17, justifyContent: 'center' }}> PROFILE </Text>
            </TouchableOpacity>

          </View>


          <View style={styles.list}
            onPress={() => this.props.navigation.navigate('BarcodeScannerLoan')}>

            <MaterialCommunityIcons style={styles.iconmenu} name='barcode-scan' size={35}
              onPress={() => this.props.navigation.navigate('BarcodeScannerLoan')} />

            <TouchableOpacity
              style={styles.menu}
              onPress={() => this.props.navigation.navigate('BarcodeScannerLoan')}>
              <Text style={{ color: "#FFFFFF", fontSize: 17, justifyContent: 'center' }}> LOAN </Text>
            </TouchableOpacity>

          </View>

          <View style={styles.hold}
            onPress={() => this.props.navigation.navigate('Hold')}>

            <MaterialCommunityIcons style={styles.iconmenu} name='book-plus' size={35}
              onPress={() => this.props.navigation.navigate('Hold')} />

            <TouchableOpacity
              style={styles.menu}
              onPress={() => this.props.navigation.navigate('Hold')} >
              <Text style={{ color: "#FFFFFF", fontSize: 17, justifyContent: 'center' }}> HOLD </Text>
            </TouchableOpacity>

          </View>


          <View style={styles.checkouts}
            onPress={() => this.props.navigation.navigate('Checkouts')}>

            <MaterialCommunityIcons style={styles.iconmenu} name='book-open-variant' size={35}
              onPress={() => this.props.navigation.navigate('Checkouts')} />

            <TouchableOpacity
              style={styles.menu}
              onPress={() => this.props.navigation.navigate('Checkouts')}>
              <Text style={{ color: "#FFFFFF", fontSize: 17, justifyContent: 'center' }}> RENEW </Text>
            </TouchableOpacity>

          </View>

          <View style={styles.fines}
            onPress={() => this.props.navigation.navigate('Fines')}>
            <FontAwesome style={styles.iconmenu} name='money' size={35}
              onPress={() => this.props.navigation.navigate('Fines')} />

            <TouchableOpacity
              style={styles.menu}
              onPress={() => this.props.navigation.navigate('Fines')}>
              <Text style={{ color: "#FFFFFF", fontSize: 17, justifyContent: 'center' }}> FINES </Text>
            </TouchableOpacity>
           
          </View>

          <View style={styles.logout}
            onPress={() => this.props.navigation.navigate('LoginScreen')}>
            <FontAwesome style={styles.iconmenu} name='power-off' size={35}
              onPress={() => this.props.navigation.navigate('LoginScreen')} />

            <TouchableOpacity
              style={styles.menu}
              onPress={() => this.props.navigation.navigate('LoginScreen')}>
              <Text style={{ color: "#FFFFFF", fontSize: 17, justifyContent: 'center' }}> LOG OUT </Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    )
  }
}
export default MyAccountScreen;

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

  iconmenu: {
    color: '#028A7E',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 10,
  },

  profile: {
    marginTop: 10,
    marginBottom: 10,
    position: 'absolute',
    top: 100,
    left: 25,
    width: "35%",
    height: "50%",
    color: '#028A7E',


  },

  list: {
    marginTop: 10,
    marginBottom: 10,
    position: 'absolute',
    top: 100,
    right: 25,
    width: "35%",
    height: "50%",
    color: '#028A7E',

  },

  hold: {
    marginTop: 10,
    marginBottom: 10,
    position: 'absolute',
    top: 215,
    left: 25,
    width: "35%",
    height: "50%",
    color: '#028A7E',

  },

  checkouts: {
    marginTop: 10,
    marginBottom: 10,
    position: 'absolute',
    top: 215,
    right: 25,
    width: "35%",
    height: "50%",
    color: '#028A7E',

  },

  fines: {
    marginTop: 10,
    marginBottom: 10,
    position: 'absolute',
    top: 330,
    left: 25,
    width: "35%",
    height: "50%",
    color: '#028A7E',

  },


  logout: {
    marginTop: 10,
    marginBottom: 10,
    position: 'absolute',
    top: 330,
    right: 25,
    width: "35%",
    height: "50%",
    color: '#028A7E',

  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'

  },

})  