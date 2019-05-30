import React, {Component} from 'react';
import { View, Text, StyleSheet, Platform, Button, Alert, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Icon, Container, Content, Left } from 'native-base'
import { Header, SearchBar } from 'react-native-elements';
import Slideshow from 'react-native-slideshow';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { SecureStore } from 'expo';


class HomeScreen extends Component  {

  static navigationOptions = {
    header: null,
    //draewerIcon: (<Icon name="ios-menu"/>)
    tabBarIcon: ({ tintColor }) => {
      return (<Icon name='person-add' size={30} color={tintColor} />)
    },
    activeTintColor: 'orange',
  }

  constructor() {

    super();

    this.state = {
      position: 1,
      interval: null,
      dataSource: [
        {
          title: 'EVENT',
          caption: 'Book Drive "Donate a Book, Change a Life" | April - August 2019',
          url: 'http://www.iium.edu.my/imagecache/medium/36235/iium-library-book-drive-kuantan.jpg',
        }, {
          title: 'TRIAL',
          caption: 'Online Database - Clinical Pharmacology Drug Reference Solution',
          url: 'http://www.iium.edu.my/imagecache/medium/38307/ClinikalKeyTrial.jpg',
        }, {
          title: 'EVENT',
          caption: 'Book Launch - “Pertelingkahan Politik dalam Kalangan Para Sahabat”',
          url: 'http://www.iium.edu.my/imagecache/medium/38309/book-launch.jpg',
        },
      ],
    };

  }

  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        });
      }, 5000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  render() {
    return (

      <ImageBackground source={require('./main.jpg')} opacity={0.11} style={styles.backgroundImage}>
        <View style={styles.header}>
          <Header
            centerComponent={{
              text: 'DARUL HIKMAH POCKET', style: {
                color: '#fff',
                fontWeight: 'bold', fontSize: 15
              }
            }}
            backgroundColor="#028A7E"
          />
        </View>
        <View style={styles.container}>
          <View style={styles.slider}>
            <Slideshow
              dataSource={this.state.dataSource}
              position={this.state.position}
              onPositionChanged={position => this.setState({ position })}
            />
          </View>

          <View style={styles.information}
            onPress={() => this.props.navigation.navigate('IIUMLibScreen')}>

            <FontAwesome style={styles.iconmenu} name='institution' size={35}
              onPress={() => this.props.navigation.navigate('IIUMLibScreen')} />

            <TouchableOpacity
              style={styles.menu}
              onPress={() => this.props.navigation.navigate('IIUMLibScreen')}  >
              <Text style={{ color: "#FFFFFF", fontSize: 17, justifyContent: 'center' }}> IIUM LIBRARY </Text>

            </TouchableOpacity>

          </View>

          <View style={styles.account}
            onPress={() => this.props.navigation.navigate('MyAccountScreen')}>

            <MaterialCommunityIcons style={styles.iconmenu} name='account' size={38}
              onPress={() => this.props.navigation.navigate('MyAccountScreen')} />

            <TouchableOpacity
              style={styles.menu}
              onPress={() => this.props.navigation.navigate('MyAccountScreen')}            >
              <Text style={{ color: "#FFFFFF", fontSize: 17, justifyContent: 'center' }}> MY ACCOUNT </Text>
            </TouchableOpacity>

          </View>

          <View style={styles.search}
            onPress={() => this.props.navigation.navigate('OpacScreen')}>

            <FontAwesome style={styles.iconmenu} name='search' size={35}
              onPress={() => this.props.navigation.navigate('OpacScreen')} />


            <TouchableOpacity
              style={styles.menu}
              onPress={() => this.props.navigation.navigate('OpacScreen')} >
              <Text style={{ color: "#FFFFFF", fontSize: 17, justifyContent: 'center' }}> OPAC </Text>
            </TouchableOpacity>

          </View>

          <View style={styles.facilities}
            onPress={() => this.props.navigation.navigate('FacilityReservationScreen')}>

            <MaterialCommunityIcons style={styles.iconmenu} name='chair-school' size={38}
              onPress={() => this.props.navigation.navigate('FacilityReservationScreen')} />

            <TouchableOpacity
              style={styles.menu}
              onPress={() => this.props.navigation.navigate('FacilityReservationScreen')}  >
              <Text style={{ color: "#FFFFFF", fontSize: 17, justifyContent: 'center' }}> RESERVATION </Text>
            </TouchableOpacity>

          </View>
        </View>

      </ImageBackground>
    )
  }
}


export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  header: {
    backgroundColor: '#ecf0f1',
  },

  logo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 170,
    width: 170,
    opacity: 0.8,
    resizeMode: 'contain',
    marginLeft: 20,
    top: -183,
  },

  container2: {
    padding: 10,
    marginVertical: 10,
    paddingBottom: 200

  },

  slider: {
    flex: 1,
    alignItems: 'center',
    //paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight:15,
   // backgroundColor: '#FFF8E1'
 
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
    //backgroundColor: '#028A7E',
  },

  information: {
    marginTop: 10,
    marginBottom: 10,
    position: 'absolute',
    top: 300,
    left: 25,
    width: "35%",
    height: "50%",
    color: '#028A7E',


  },

  account: {
    marginTop: 10,
    marginBottom: 10,
    position: 'absolute',
    top: 295,
    right: 25,
    width: "35%",
    height: "50%",
    color: '#028A7E',

  },

  search: {
    marginTop: 10,
    marginBottom: 10,
    position: 'absolute',
    top: 450,
    left: 25,
    width: "35%",
    height: "50%",
    color: '#028A7E',

  },

  facilities: {
    marginTop: 10,
    marginBottom: 10,
    position: 'absolute',
    top: 445,
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

