import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import DrawerNavigator from './DrawerNavigator';


import IIUMLibScreen from '../screens/IIUMLibScreen';
import OpeningHours from '../screens/IIUMLibraryScreen/OpeningHours';
import Contacts from '../screens/IIUMLibraryScreen/Contacts';
import News from '../screens/IIUMLibraryScreen/News';
import Events from '../screens/IIUMLibraryScreen/Events';
import Facilities from '../screens/IIUMLibraryScreen/Facilities';
import Services from '../screens/IIUMLibraryScreen/Services';
import Collections from '../screens/IIUMLibraryScreen/Collections';


import MyAccountScreen from '../screens/MyAccountScreen';
import OpacScreen from '../screens/OpacScreen';
import FacilityReservationScreen from '../screens/FacilityReservationScreen';
import NotificationScreen from '../screens/NotificationScreen';
import SettingScreen from '../screens/SettingScreen';
import HomeScreen from '../screens/HomeScreen';



class AppStackNavigator extends React.Component{

  
  render(){
    return(
      <AppNav/>
    )
  }
}
export default AppStackNavigator;

const AppNav = createStackNavigator({
    DrawerNavigator: DrawerNavigator,
    Home:HomeScreen,
    'IIUM Library': IIUMLibScreen,
    OpeningHours: OpeningHours,
    Contacts: Contacts,
    'My Account': MyAccountScreen,
  'Online Public Access Catalog': OpacScreen,
  'Facility Reservation': FacilityReservationScreen,
  'Notification': NotificationScreen,
  'Setting': SettingScreen,
   
    
},{
  headerMode:'none'
});

const AppContainer = createAppContainer(AppNav)

