import React, {Component} from 'react';
//import {View, Text,StyleSheet} from 'react-native';
import { Header} from 'react-native-elements';
import '@expo/vector-icons';

import { Platform, LayoutAnimation, StyleSheet, View, Text, ScrollView, UIManager, TouchableOpacity } from 'react-native';

class Accordion_Panel extends Component {

  constructor() {

    super();

    this.state = {

      updated_Height: 0

    }
  }

  componentWillReceiveProps(update_Props) {
    if (update_Props.item.expanded) {
      this.setState(() => {
        return {
          updated_Height: null
        }
      });
    }
    else {
      this.setState(() => {
        return {
          updated_Height: 0
        }
      });
    }
  }

  shouldComponentUpdate(update_Props, nextState) {

    if (update_Props.item.expanded !== this.props.item.expanded) {

      return true;

    }

    return false;

  }

  render() {

    return (

      <View style={styles.Panel_Holder}>

        <TouchableOpacity activeOpacity={0.7} onPress={this.props.onClickFunction} style={styles.Btn}>

          <Text style={styles.Panel_Button_Text}>{this.props.item.title} </Text>

        </TouchableOpacity>

        <View style={{ height: this.state.updated_Height, overflow: 'hidden' }}>

          <Text style={styles.Panel_text}>

            {this.props.item.body}

          </Text>

        </View>

      </View>

    );
  }
}

class Collections extends Component{
  
  static navigationOptions = ({navigation}) => ({
    title: 'Collections'
  })

  
  constructor() {
    super();

    if (Platform.OS === 'android') {

      UIManager.setLayoutAnimationEnabledExperimental(true)

    }

    const array = [
      //General Collection
      { expanded: false, title: "General Collection", body: "Hello Guys this is the Animated Accordion Panel." },

      //Reference Collection
      { expanded: false, title: "Reference Collection", body: "Hello Guys this is the Animated Accordion Panel." },

      //Controlled Access Collection
      { expanded: false, title: "Controlled Access Collection", body: "Hello Guys this is the Animated Accordion Panel." },
      
      //Serials Collection
      { expanded: false, title: "Serials Collection", body: "Hello Guys this is the Animated Accordion Panel." },

      //Special Collection
      { expanded: false, title: "Special Collection", body: "Hello Guys this is the Animated Accordion Panel." },

      //Law Collection
      { expanded: false, title: "Law Collection", body: "Hello Guys this is the Animated Accordion Panel." },

      //Electronic Collection
      { expanded: false, title: "Electronic Collection", body: "Hello Guys this is the Animated Accordion Panel." },

      //Light Reading Collection
      { expanded: false, title: "Light Reading Collection", body: "Hello Guys this is the Animated Accordion Panel." },

      //Muslim Scholars Collection
      { expanded: false, title: "Muslim Scholars Collection", body: "Hello Guys this is the Animated Accordion Panel." },

      //Brows-able Multimedia Collection
      { expanded: false, title: "Brows-able Multimedia Collection", body: "Hello Guys this is the Animated Accordion Panel." },

      //Brows-able Theses Collection
      { expanded: false, title: "Brows-able Theses Collection", body: "Hello Guys this is the Animated Accordion Panel." },

    ];

    this.state = { AccordionData: [...array] }
  }

  update_Layout = (index) => {

    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    const array = this.state.AccordionData.map((item) => {

      const newItem = Object.assign({}, item);

      newItem.expanded = false;

      return newItem;
    });

    array[index].expanded = true;

    this.setState(() => {
      return {
        AccordionData: array
      }
    });
  }
    render(){
        return(


            <View style={styles.header}>
     {/*   <Header
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

            <View style={styles.MainContainer}>
        {/*     <Text style={styles.PageTitle}>Collections</Text> */}
            <ScrollView contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 5 }}>
          {
            this.state.AccordionData.map((item, key) =>
              (
                <Accordion_Panel key={key} onClickFunction={this.update_Layout.bind(this, key)} item={item} />
              ))
          }
        </ScrollView>

            <View style={styles.container}>  
            
                    <Text>Collections</Text>

            </View>
</View>
        </View> 
      
     
        )
    }
}
export default Collections;

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
      },

      MainContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: (Platform.OS === 'ios') ? 20 : 0
      },
    
      PageTitle: {
        textAlign: 'center',
        //fontsize: 100,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 25
        
      },
    
      Panel_text: {
        fontSize: 18,
        color: '#000',
        padding: 10,
        textAlign: 'center',
      },
    
      Panel_Button_Text: {
        textAlign: 'center',
        color: '#fff',
       // fontSize: 21
      },
    
      Panel_Holder: {
        borderWidth: 1,
        borderColor: '#ecf0f1',
        marginVertical: 10
      },
    
      Btn: {
        padding: 10,
        backgroundColor: '#028A7E'
      }
})