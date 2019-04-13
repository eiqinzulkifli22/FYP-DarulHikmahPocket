import React from 'react';
import {View, Text,StyleSheet, TouchableOpacity} from 'react-native';
//import { Container, Content, Button } from 'native-base'
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

class OpacScreen extends React.Component{
  
  state = {
    search:'',
  }
  static navigationOptions = ({navigation}) => ({
    header: null
  })
  

    render(){
        const{search} = this.state;

        return(

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
            centerComponent={{ text:'SEARCH', style: { color: '#fff', 
            fontWeight: 'bold', fontSize: 15 } }}          backgroundColor="#028A7E"
        />
           {/*   <View style={styles.SearchBar}>
        { <SearchBar
          placeholder="Author, Title.."
          onChangeText={this.updateSearch}
          value={search}
          //backgroundColor = ""
          />   }  
        </View> */}

        
             
            <View style={styles.container}>
                {/* <Text>Opac Screen</Text> */}
               
               

                <ThemeProvider theme={theme}>
             <Button 
                    raised
                    icon={{name: 'search'}}
                    onPress={() => this.props.navigation.navigate('OpacScreen2')}
                    title='Search Books' 
                    
                    />

              <Button 
                    raised
                    icon={{name: 'camera'}}
                    onPress={() => this.props.navigation.navigate('BarcodeScanner')}
                    title='Scan barcode' 
                    
                    
                    />
        </ThemeProvider>    
            </View>
        </View>
        )
    }
}
export default OpacScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:60,
        
        //alignItems: 'center',
        //justifyContent: 'center'
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

      } 
     /*  Button: {
        backgroundColor: 'pink',
        borderWidth: 1,
        borderColor: '#336633',
        paddingTop: 4,
        paddingBottom: 4,
        paddingRight: 25,
        paddingLeft: 25,
        marginTop: 10,
        width: 300
      } */
})