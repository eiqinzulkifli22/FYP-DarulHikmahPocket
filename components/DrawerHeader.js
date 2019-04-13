import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Container,  Left, Right, Button} from "native-base";
import {  SearchBar, Header } from 'react-native-elements';
import '@expo/vector-icons';

export default class DrawerHeader extends Component {

  render() {
    return (
        <View>
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
            centerComponent={{  style: { color: '#fff' } }}
            backgroundColor="#028A7E"

                
            />
        </View>
        </View>
    );
}
}

   /*  render() {
        return (
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
          centerComponent={{  style: { color: '#fff' } }}
          backgroundColor="#028A7E"
        />
            </View>
        );
    }
}*/
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        flex: 1,
        paddingTop: 4,
        backgroundColor: '#ecf0f1',
      }
}) 