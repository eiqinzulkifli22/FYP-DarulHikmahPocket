
import React from 'react';
import { View, Text, StyleSheet, Button, Alert, Image } from 'react-native';
import { Icon, Container, Content, Left } from 'native-base'
import { Header, SearchBar } from 'react-native-elements';
import { createStackNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator, createNavigationContainer } from 'react-navigation';
//import OpeningHoursSreen from './screens/OpeningHoursSreen';
//import '@expo/vector-icons';
import {FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import DrawerHeader from '../components/DrawerHeader';
//import IIUMLibScreen from './IIUMLibScreen';
//import OpeningHours from './OpeningHours';

class MyAccountScreen extends React.Component{

   static navigationOptions = ({navigation}) => ({
      // title: 'MY ACCOUNT'
      header: null
  }) 
    render(){
        return(

          // header style
         <View style={styles.header}>
          <Header
            leftComponent={{
              icon: 'menu',
              color: '#fff',
              onPress: () => {this.props.navigation.openDrawer()},
            }}
            
            rightComponent={{ 
              icon: 'person', 
              color: '#fff',
              onPress: () => this.props.navigation.navigate('My Account')}}
              
              centerComponent={{ text:'MY ACCOUNT', style: { color: '#fff', 
                                  fontWeight: 'bold', fontSize: 15 } }}
               backgroundColor="#028A7E"
          />


<View style={styles.container}>  
          
            
          {/* <Text style={styles.PageTitle}>MY ACCOUNT</Text> */}
          
          <View style={styles.profile} 
          onPress={()=>this.props.navigation.navigate('Profile')}>

          <MaterialCommunityIcons style={styles.iconmenu} name = 'account' size = {35}
          onPress={()=>this.props.navigation.navigate('Profile')} />
              
              <Button 
                      style={styles.menu}
                      color = "#028A7E"
                      title='PROFILE'
                      onPress={()=>this.props.navigation.navigate('Profile')}/>
            </View>
                      

          <View style={styles.list}
          onPress={()=>this.props.navigation.navigate('LoanBarcodeScanner')}>

          <FontAwesome style={styles.iconmenu} name = 'list' size = {35}
          onPress={()=>this.props.navigation.navigate('LoanBarcodeScanner')} />
                      
         <Button 
                      style={styles.menu}
                      color = "#028A7E"
                      title='LOAN'
                      onPress={()=>this.props.navigation.navigate('LoanBarcodeScanner')}/>

          </View>

        <View style={styles.hold}
              onPress={()=>this.props.navigation.navigate('Hold')}>

              <MaterialCommunityIcons style={styles.iconmenu} name = 'inbox-arrow-down' size = {35}
              onPress={()=>this.props.navigation.navigate('Hold')} />

              <Button 
                      style={styles.menu}
                      color = "#028A7E"                 
                      title='HOLD'
                      onPress={()=>this.props.navigation.navigate('Hold')} />
              </View>
              
              
              <View style={styles.checkouts}
              onPress={()=>this.props.navigation.navigate('Checkouts')}>

              <MaterialCommunityIcons style={styles.iconmenu} name = 'inbox-arrow-up' size = {35}
              onPress={()=>this.props.navigation.navigate('Checkouts')} />
           
                  
              <Button 
                      style={styles.menu}
                      color = "#028A7E"              
                      title='CHECKOUTS'
                      onPress={()=>this.props.navigation.navigate('Checkouts')} />

              </View>  

              <View style={styles.fines}
              onPress={()=>this.props.navigation.navigate('Fines')}>
              <FontAwesome style={styles.iconmenu} name = 'money' size = {35}
              onPress={()=>this.props.navigation.navigate('Fines')} />
           
                  
              <Button 
                      style={styles.menu}
                      color = "#028A7E"               
                      title='FINES'
                      onPress={()=>this.props.navigation.navigate('Fines')}
                      />        
              </View> 

              <View style={styles.logout}
              onPress={()=>this.props.navigation.navigate('LoginScreen')}>
              <FontAwesome style={styles.iconmenu} name = 'power-off' size = {35}
              onPress={()=>this.props.navigation.navigate('LoginScreen')} />
           
                  
              <Button 
                      style={styles.menu}
                      color = "#028A7E"                                        
                      title='LOG OUT'
                      onPress={()=>this.props.navigation.navigate('LoginScreen')}/>

              </View> 
              </View>
          </View>     
        )
    }
}
export default MyAccountScreen;

/* const AppStackNavigator = createAppStackNavigator({
  IIUMLibScreen: {
    screen: IIUMLibScreen},

  OpeningHours: {
    screen: OpeningHours}
}) */

//export default createAppContainer(AppStackNavigator);

const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    // PageTitle: {
    //     textAlign: 'center',
    //     fontsize: 100,
    //     height: 50,
    //     color: '#028A7E',
    //     fontWeight: 'bold',
    //     marginBottom: 25,
    //     position: 'absolute',
    //     top: 50,
        
    //   },
      
      header: {
        flex: 1,
        paddingTop: 4,
        backgroundColor: '#ecf0f1',
      },

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

      }

})  