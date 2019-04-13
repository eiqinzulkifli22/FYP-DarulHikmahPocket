import React from 'react';
import {View, Text,StyleSheet, Button} from 'react-native';
import { Container, Content } from 'native-base'
import { Header, SearchBar } from 'react-native-elements';
import '@expo/vector-icons';
class ResetPasswordScreen extends React.Component{
  static navigationOptions = ({navigation}) => ({
    header: null
  })
  
    render(){
        return(
            <View style={styles.header}>
        {/* <Header
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
        /> */}

            <View style={styles.container}>
                <Text>Reset Password Screen</Text>

                <Button title='Reset '
                      onPress={
                        ()=>this.props.navigation.navigate('LoginScreen')}
                      />
            </View>
        </View>
        )
    }
}
export default ResetPasswordScreen;

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