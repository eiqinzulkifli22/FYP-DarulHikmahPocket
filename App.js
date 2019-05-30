import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Image,
  ScrollView, TouchableOpacity
} from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator, TabNavigator, gestureEnabled, createNavigationContainer, createSwitchNavigator, DrawerActions } from 'react-navigation';
import { Container, Content, Header, Body, Icon } from 'native-base';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

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
import AddHoldScanner from './screens/MyAccount/AddHoldScanner';
import HoldCancel from './screens/MyAccount/HoldCancel';
import Checkouts from './screens/MyAccount/Checkouts';
import Fines from './screens/MyAccount/Fines';
import RenewBook from './screens/MyAccount/RenewBook';
//import Logout from './screens/MyAccount/Logout';

import OpacScreen from './screens/OpacScreen';
import OpacScreen2 from './screens/Opac/OpacScreen2';
import ViewBookDetails from './screens/Opac/ViewBookDetails';
import ViewBookDetails2 from './screens/Opac/ViewBookDetails2';
import ViewBookLoan from './screens/Opac/ViewBookLoan';


import BarcodeScanner from './screens/Opac/BarcodeScanner';
import BarcodeScanner2 from './screens/Opac/BarcodeScanner2';
import BarcodeScannerLoan from './screens/BarcodeScannerLoan';


import FacilityReservationScreen from './screens/FacilityReservationScreen';
import ListFacilities from './screens/FacilityReservation/ListFacilities';
import Schedule from './screens/FacilityReservation/Schedule';
import Form from './screens/FacilityReservation/Form';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ResetPinScreen from './screens/ResetPinScreen';

export default class App extends React.Component {


  render() {
    return (
      <AppContainer />

    )
  }
}

const AppStackNavigator = createStackNavigator({

  LoginScreen: { screen: LoginScreen, },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      gesturesEnabled: false
    }
  },
  IIUMLibScreen: {
    screen: IIUMLibScreen,
    navigationOptions: {
      gesturesEnabled: false
    }
  },

  OpacScreen: {
    screen: OpacScreen,
    navigationOptions: {
      gesturesEnabled: false
    }
  },
  Facilities: { screen: Facilities },
  FacilityReservationScreen: {
    screen: FacilityReservationScreen,
    navigationOptions: {
      gesturesEnabled: false
    }
  },
  ListFacilities: { screen: ListFacilities },

  OpeningHours: { screen: OpeningHours },
  Contacts: { screen: Contacts },
  News: { screen: News },
  Events: { screen: Events },
  Services: { screen: Services },
  Collections: { screen: Collections },

  MyAccountScreen: {
    screen: MyAccountScreen,
    navigationOptions: {
      gesturesEnabled: false
    }
  },
  Profile: { screen: Profile },
  List: { screen: List },
  Hold: { screen: Hold },
  AddHoldScanner: { screen: AddHoldScanner },
  HoldCancel: { screen: HoldCancel },
  Checkouts: { screen: Checkouts },
  RenewBook: { screen: RenewBook },
  Fines: { screen: Fines },

  OpacScreen2: { screen: OpacScreen2 },
  ViewBookDetails: { screen: ViewBookDetails },
  ViewBookDetails2: { screen: ViewBookDetails2 },
  ViewBookLoan: { screen: ViewBookLoan },
  BarcodeScanner: { screen: BarcodeScanner },
  BarcodeScanner2: { screen: BarcodeScanner2 },
  BarcodeScannerLoan: { screen: BarcodeScannerLoan },

  Schedule: { screen: Schedule },
  Form: { screen: Form },

  RegisterScreen: { screen: RegisterScreen },
  ResetPinScreen: { screen: ResetPinScreen },

},
  {
    activeTintColor: 'red',

    initialRouteName: 'LoginScreen',
    navigationOptions: {
      gesturesEnabled: false,
      drawerLockMode: 'locked-closed'
    },
  }
)

const AppDrawerNavigator = createDrawerNavigator({
  LoginScreen: {
    screen: AppStackNavigator,
    navigationOptions: { drawerLabel: () => null }
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: { drawerIcon: (<FontAwesome name='home' size={25} />) }
  },
  'IIUM Library': {
    screen: IIUMLibScreen,
    navigationOptions: { drawerIcon: (<FontAwesome name='university' size={20} />) }
  },
  'Online Public Access Catalog': {
    screen: OpacScreen,
    navigationOptions: { drawerIcon: (<FontAwesome name='search' size={20} />) }
  },
  'Facility Reservation': {
    screen: FacilityReservationScreen,
    navigationOptions: { drawerIcon: (<MaterialCommunityIcons name='chair-school' size={25} />) }
  },

},
  {
    activeTintColor: 'orange',
  }
)

const AppContainer = createAppContainer(AppDrawerNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    flex: 1,
    paddingTop: 7,
    backgroundColor: '#ecf0f1',
  },
})
