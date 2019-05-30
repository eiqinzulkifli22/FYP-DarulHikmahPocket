import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { Header, SearchBar, Button, ThemeProvider } from 'react-native-elements';
import '@expo/vector-icons';


const theme = {

  colors: {
    primary: 'white',
  },
  Button: {
    titleStyle: {
      color: 'grey'
    }
  }

};

class OpacScreen extends React.Component {

  state = {
    search: '',
  }
  static navigationOptions = ({ navigation }) => ({
    header: null
  })


  render() {
    const { search } = this.state;

    return (
      <ImageBackground source={require('./main.jpg')} opacity={0.11} style={styles.backgroundImage}>

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
              text: 'OPAC', style: {
                color: '#fff',
                fontWeight: 'bold', fontSize: 15
              }
            }} backgroundColor="#028A7E"
          />

          <View style={styles.container}>
            {/* <Text>Opac Screen</Text> */}
            <Image source={require('./main.jpg')} opacity={0.10} style={styles.backgroundImage} />

            <View style={styles.search}
              onPress={() => this.props.navigation.navigate('OpacScreen2')}>

              <FontAwesome style={styles.iconmenu} name='search' size={35}
                onPress={() => this.props.navigation.navigate('OpacScreen2')} />


              <TouchableOpacity
                style={styles.menu}
                onPress={() => this.props.navigation.navigate('OpacScreen2')} >
                <Text style={{ color: "#FFFFFF", fontSize: 17, justifyContent: 'center' }}> SEARCH </Text>
              </TouchableOpacity>

            </View>

            <View style={styles.list}
              onPress={() => this.props.navigation.navigate('BarcodeScanner')}>

              <MaterialCommunityIcons style={styles.iconmenu} name='barcode-scan' size={35}
                onPress={() => this.props.navigation.navigate('BarcodeScanner')} />


              <TouchableOpacity
                style={styles.menu}
                onPress={() => this.props.navigation.navigate('BarcodeScanner')} >
                <Text style={{ color: "#FFFFFF", fontSize: 17, justifyContent: 'center' }}> SCAN ISBN </Text>
              </TouchableOpacity>

            </View>



          </View>
        </View>
      </ImageBackground>
    )
  }
}
export default OpacScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    flex: 1,
    paddingTop: 4,
    backgroundColor: '#ecf0f1',
  },
  SearchBar: {
    flex: 1,
    paddingTop: 20,
    //backgroundColor: '#ecf0f1',
  },
  Button: {
    flex: 1,
    paddingTop: 20,

  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    justifyContent: 'center'

  },

  iconmenu: {
    color: '#028A7E',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 10,
    //backgroundColor: '#028A7E',
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


  search: {
    marginTop: 10,
    marginBottom: 10,
    position: 'absolute',
    top: 150,
    left: 140,
    width: "35%",
    height: "50%",
    color: '#028A7E',

  },

  list: {
    marginTop: 10,
    marginBottom: 10,
    position: 'absolute',
    top: 300,
    left: 140,
    width: "35%",
    height: "50%",
    color: '#028A7E',

  },

})