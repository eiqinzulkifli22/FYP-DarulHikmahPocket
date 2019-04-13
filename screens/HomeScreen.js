import React from 'react';
import { View, Text, StyleSheet, Button, Alert, Image } from 'react-native';
import { Icon, Container, Content, Left } from 'native-base'
import { Header, SearchBar } from 'react-native-elements';
import { createStackNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator, createNavigationContainer } from 'react-navigation';
//import OpeningHoursSreen from './screens/OpeningHoursSreen';
//import '@expo/vector-icons';
import {FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import DrawerHeader from '../components/DrawerHeader';


class HomeScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    header: null,

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
            onPress: () => this.props.navigation.navigate('My Account')
          }}
          centerComponent={{ text:'DARUL HIKMAH POCKET', style: { color: '#fff', 
                              fontWeight: 'bold', fontSize: 15 } }}
          backgroundColor="#028A7E"
        />

        <View style={styles.container}>

        <Image source={require('./library-gombak.jpg')} opacity = {0.10} width= {10} height='10%'/>  
          {/* <Text style={styles.PageTitle}>DARUL HIKMAH POCKET</Text> */}

          <View style={styles.information}
          onPress={()=>this.props.navigation.navigate('IIUMLibScreen')}>

          <FontAwesome style={styles.iconmenu} name = 'institution' size = {35}
          onPress={()=>this.props.navigation.navigate('IIUMLibScreen')} />
              
              <Button 
                      style={styles.menu}
                      color = "#028A7E"
                      title='IIUM LIBRARY'
                      onPress={()=>this.props.navigation.navigate('IIUMLibScreen')}
                      />
          </View>

          <View style={styles.account}
                     onPress={()=>this.props.navigation.navigate('MyAccountScreen')}>
                
                <MaterialCommunityIcons style={styles.iconmenu} name = 'account' size = {35}
                      onPress={()=>this.props.navigation.navigate('MyAccountScreen')} />        

              <Button 
                      style={styles.menu}
                      color = "#028A7E"
                      title='MY ACCOUNT'
                      onPress={()=>this.props.navigation.navigate('MyAccountScreen')} />

                      </View>

                      <View style={styles.search}
                    onPress={()=>this.props.navigation.navigate('OpacScreen')}>

              <FontAwesome style={styles.iconmenu} name = 'search' size = {35}
              onPress={()=>this.props.navigation.navigate('OpacScreen')} />

              <Button 
                      style={styles.menu}
                      color = "#028A7E"                     
                      title='OPAC'
                      onPress={()=>this.props.navigation.navigate('OpacScreen')}
                      />
              </View>

              <View style={styles.facilities}
              onPress={()=>this.props.navigation.navigate('FacilityReservationScreen')}>

              <MaterialCommunityIcons style={styles.iconmenu} name = 'chair-school' size = {35}
              onPress={()=>this.props.navigation.navigate('FacilityReservationScreen')} />
           
                  
              <Button 
                      style={styles.menu}
                      color = "#028A7E"      
                      title='RESERVATION'
                      onPress={()=>this.props.navigation.navigate('FacilityReservationScreen')} />

              </View>
      </View>
      </View>
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
    flex: 1,
    paddingTop: 4,
    backgroundColor: '#ecf0f1',
  },

  // PageTitle: {
  //   textAlign: 'center',
  //   //fontsize: 100,
  //   color: '#028A7E',
  //   fontWeight: 'bold',
  //   marginBottom: 25,
  //   position: 'absolute',
  //   top: 50,
    
  // },

  menu : {
    width: "50%",
    height: "50%",
    color: '#028A7E',

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
    top: 200,
    left: 25,
    width: "35%",
    height: "50%",
    color: '#028A7E',
    

  },

  account: {
    marginTop: 10,
    marginBottom: 10,
    position: 'absolute',
    top: 200,
    right: 25,
    width: "35%",
    height: "50%",
    color: '#028A7E',

  },

  search: {
    marginTop: 10,
    marginBottom: 10,
    position: 'absolute',
    top: 350,
    left: 25,
    width: "35%",
    height: "50%",
    color: '#028A7E',

  },

  facilities: {
    marginTop: 10,
    marginBottom: 10,
    position: 'absolute',
    top: 350,
    right: 25,
    width: "35%",
    height: "50%",
    color: '#028A7E',

  }

})  


{/* 
//DATE PICKER

// //This is an example code to get DatePicker//
// import React, { Component } from 'react';
// //import react in our code.
// import { View, StyleSheet } from 'react-native';
// //import all the components we are going to use.
// import DatePicker from 'react-native-datepicker';
// //import DatePicker from the package we installed

// export default class MyDatePicker extends Component {
//   constructor(props) {
//     super(props);
//     //set value in state for initial date
//     this.state = { date: '15-05-2018' };
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <DatePicker
//           style={{ width: 200 }}
//           date={this.state.date} //initial date from state
//           mode="date" //The enum of date, datetime and time
//           placeholder="select date"
//           format="DD-MM-YYYY"
//           minDate="01-01-2016"
//           maxDate="01-01-2019"
//           confirmBtnText="Confirm"
//           cancelBtnText="Cancel"
//           customStyles={{
//             dateIcon: {
//               position: 'absolute',
//               left: 0,
//               top: 4,
//               marginLeft: 0,
//             },
//             dateInput: {
//               marginLeft: 36,
//             },
//           }}
//           onDateChange={date => {
//             this.setState({ date: date });
//           }}
//         />
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 50,
//     padding: 16,
//   },
// }); */}
