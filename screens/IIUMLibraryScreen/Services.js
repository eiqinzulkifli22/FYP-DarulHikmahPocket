import React from 'react';
import {View, Text, StyleSheet, Platform, LayoutAnimation, ScrollView, UIManager, TouchableOpacity} from 'react-native';
import { Header} from 'react-native-elements';
import '@expo/vector-icons';



class Accordion_Panel extends React.Component {

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


export default class Services extends React.Component{
  static navigationOptions = ({navigation}) => ({
    title: 'Services'
  })

  constructor() {
    super();

    if (Platform.OS === 'android') {

      UIManager.setLayoutAnimationEnabledExperimental(true)

    }

    const array = [
      //Loans
      { expanded: false, title: "Loans", body: "Hello Guys this is the Animated Accordion Panel." },

      //Inter-Library Loan
      { expanded: false, title: "Inter-Library Loan", body: "Hello Guys this is the Animated Accordion Panel." },

      //Information Services
      { expanded: false, title: "Information Services", body: "Hello Guys this is the Animated Accordion Panel." },

      //Discover Our Muslim Scholars Profile
      { expanded: false, title: "Discover Our Muslim Scholars Profile", body: "Hello Guys this is the Animated Accordion Panel." },
     

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


            <View style={styles.MainContainer}>

                {/* <Text style={styles.PageTitle}>SERVICES</Text> */}

                  <ScrollView contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 5 }}>
                         {
                            this.state.AccordionData.map((item, key) =>
                              (
                                <Accordion_Panel key={key} onClickFunction={this.update_Layout.bind(this, key)} item={item} />
                              ))
                          }
  </ScrollView>

            </View>

        
      
     
        )
    }
}
//export default Services;

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
      Panel_text: {
        fontSize: 18,
        color: '#000',
        padding: 10,
        textAlign: 'center',
      },
    
      Panel_Button_Text: {
        textAlign: 'center',
        color: '#fff',
        //fontSize: 21
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