import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,
      ScrollView, TouchableOpacity} from 'react-native';
import {createStackNavigator, createAppContainer, createDrawerNavigator, gestureEnabled, createNavigationContainer, createSwitchNavigator, DrawerActions} from 'react-navigation';
import {Container, Content, Header, Body, Icon} from 'native-base';

//import AppStackNavigator from './Navigator/AppStackNavigator';
import HomeScreen from './screens/HomeScreen';

import IIUMLibScreen from './screens/IIUMLibScreen';
import OpeningHours from './screens/IIUMLibraryScreen/OpeningHours';
import Contacts from './screens/IIUMLibraryScreen/Contacts';
import News from './screens/IIUMLibraryScreen/News';
import Events from './screens/IIUMLibraryScreen/Events';
import Facilities from './screens/IIUMLibraryScreen/Facilities';
import Services from './screens/IIUMLibraryScreen/Services';
import Collections from './screens/IIUMLibraryScreen/Collections';

import MyAccountScreen from './screens/MyAccountScreen';
import Profile from './screens/MyAccount/Profile';
import List from './screens/MyAccount/List';
import Hold from './screens/MyAccount/Hold';
import Checkouts from './screens/MyAccount/Checkouts';
import Fines from './screens/MyAccount/Fines';
import Logout from './screens/MyAccount/Logout';

import OpacScreen from './screens/OpacScreen';
import OpacScreen2 from './screens/Opac/OpacScreen2';
import ViewBookDetails from './screens/Opac/ViewBookDetails';
import OpacScreen3 from './screens/Opac/OpacScreen3';

import BarcodeScanner from './screens/Opac/BarcodeScanner';
import BarcodeScanner2 from './screens/Opac/BarcodeScanner2';
import LoanBarcodeScanner from './screens/LoanBarcodeScanner';


import FacilityReservationScreen from './screens/FacilityReservationScreen';
import ListFacilities from './screens/FacilityReservation/ListFacilities';
import Schedule from './screens/FacilityReservation/Schedule';
import Form from './screens/FacilityReservation/Form';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen'
import ResetPasswordScreen from './screens/ResetPasswordScreen'

// var config = {
//   apiKey: "AIzaSyA62phh4l2jYHUaKD9DERTU8WLFO3zWziI",
//   authDomain: "react-native-bb86a.firebaseapp.com",
//   databaseURL: "https://react-native-bb86a.firebaseio.com",
//   projectId: "react-native-bb86a",
//   storageBucket: "react-native-bb86a.appspot.com",
//   messagingSenderId: "606697324561"
// };
// firebase.initializeApp(config);



export default class App extends React.Component{ 

  
    render(){
        return(
            <AppContainer/>
           //<AppStackNavigator/>
          // <HomeScreen/>
          
        )
    }
}

/* export default createStackNavigator({
  HomeScreen: {
    screen: HomeScreen
  },
  IIUMLibScreen: {
    screen: IIUMLibScreen
  },

}) */

const AppStackNavigator = createStackNavigator({
 
  LoginScreen: {screen: LoginScreen,              },
  HomeScreen:  {screen: HomeScreen,
                navigationOptions: {
                    gesturesEnabled: false
    }},
  IIUMLibScreen: {screen: IIUMLibScreen},
 
  OpacScreen: {screen: OpacScreen},
  Facilities: {screen: Facilities}, 
  FacilityReservationScreen: {screen: FacilityReservationScreen},
  ListFacilities: {screen: ListFacilities},

  OpeningHours: {screen: OpeningHours},
  Contacts: {screen: Contacts},
  News: {screen: News},
  Events: {screen: Events},
  Services: {screen: Services},
  Collections: {screen: Collections},

  MyAccountScreen: {screen: MyAccountScreen},
  Profile: {screen: Profile},
  List: {screen: List},
  Hold: {screen: Hold},
  Checkouts: {screen: Checkouts},
  Fines: {screen: Fines},
  Logout: {screen: Logout},
  
  OpacScreen2: {screen: OpacScreen2},
  ViewBookDetails: {screen: ViewBookDetails},
  OpacScreen3: {screen: OpacScreen3},
  BarcodeScanner: {screen: BarcodeScanner},
  BarcodeScanner2: {screen: BarcodeScanner2},
  LoanBarcodeScanner: {screen: LoanBarcodeScanner},

  Schedule: {screen: Schedule},
  Form: {screen: Form},

  RegisterScreen: {screen: RegisterScreen},
  ResetPasswordScreen: {screen: ResetPasswordScreen},

  
},
{
  initialRouteName: 'LoginScreen',
  navigationOptions: {
    gesturesEnabled: false,
    drawerLockMode: 'locked-closed'
  },

  HomeScreen: {
    navigationOptions: {
      gesturesEnabled: false
    }
  }
  

}

)  
 

/* export default createDrawerNavigator({
  HomeScreen: {
    screen: HomeScreen
  },
  IIUMLibScreen: {
    screen: IIUMLibScreen
  }
}) */

 const AppDrawerNavigator = createDrawerNavigator({
  LoginScreen: {screen: AppStackNavigator, navigationOptions: {drawerLabel: () => null}},
  Home: {screen: HomeScreen}, 
  'IIUM Library': {screen: IIUMLibScreen, navigationOptions: {title:'IIUM Library'}},
  'My Account': {screen: MyAccountScreen, navigationOptions: {title:'My Account'}},
  'Online Public Access Catalog': {screen: OpacScreen},
  'Facility Reservation': {screen: FacilityReservationScreen, ListFacilities},
  
})


    
      
    
    

   // nak samakan nama header bila buka each page
    /* navigationOptions:({navigation}) => {
      const {routeName} = navigation.state.routes[navigation.state.index];
      return{
        headerTitle: routeName
      }
    } */
   
  
/* const AppSwitchNavigator = createSwitchNavigator({
  HomeScreen : {screen: HomeScreen},
  IIUMLibScreen: {screen: IIUMLibScreen},

}) */



const AppContainer = createAppContainer(AppDrawerNavigator);

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
      flex: 1,
      paddingTop: 7,
      backgroundColor: '#ecf0f1',
    },
   /*  drawerImage: {
      height: 150,
      width: 150,
      boarderRadius: 75

    } */
})




/* import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import {createStackNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

class Home extends React.Component {
  render() {
    return (

      
      <View style={styles.container}>
        <Text>Home...</Text>
      </View>
    );
  }
}

class Dashboard extends React.Component {
  render() {
    return (

      <ScrollView>
      <View style={{height: 1000}}>
        <Text>Dashboard</Text>
      </View>
      </ScrollView>
    );
  }
}


class Feed extends React.Component {
  render() {
    return (

      
      <View style={styles.container}>
        <Button title='Goto Detail Screen' onPress={()=>this.props.navigation.navigate('Detail')}/>
      </View>
    );
  }
}

class IIUMLibrary extends React.Component {
  render() {
    return (

      
      <View style={styles.container}>
        <Text>IIUM Library...</Text>
      </View>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Home: Home
},
{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#028A7E'
    }
  },
}
)

const AppDrawerNavigator = createDrawerNavigator({
  
    Home: Home,
    Dashboard: Dashboard,
    IIUMLibrary: IIUMLibrary
  },
  {
    //dia pergi ke atas balik (refresh)
    unmountInactiveRoutes: true,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#028A7E'
      }
    }
  }
)

const AppContainer = createAppContainer(AppDrawerNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 */