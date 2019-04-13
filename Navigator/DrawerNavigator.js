import React , {Component} from 'react';
import {createStackNavigator, createAppContainer, createDrawerNavigator,DrawerItems} from 'react-navigation';


import HomeScreen from '../screens/HomeScreen';

import IIUMLibScreen from '../screens/IIUMLibScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import OpacScreen from '../screens/OpacScreen';
import FacilityReservationScreen from '../screens/FacilityReservationScreen';
import NotificationScreen from '../screens/NotificationScreen';
import SettingScreen from '../screens/SettingScreen';

//import DrawerNavigator from './DrawerNavigator';


//const AppContainer = createAppContainer(AppDrawerNavigator);

export default createDrawerNavigator({
        Home: { 
          screen: HomeScreen,
        },
        'IIUM Library': {
          screen: IIUMLibScreen,
        },
        'My Account': MyAccountScreen,
        'Online Public Access Catalog': OpacScreen,
        'Facility Reservation': FacilityReservationScreen,
        Notification: NotificationScreen,
        Setting: SettingScreen
      },
      
      )

   
