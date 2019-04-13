import React , {Component} from 'react';
//import {View, Text,StyleSheet, Button} from 'react-native';
import { Header} from 'react-native-elements';
import '@expo/vector-icons';
import { Platform, LayoutAnimation, StyleSheet, View, Text, ScrollView, UIManager, TouchableOpacity, Button } from 'react-native';

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


class Facilities extends Component{
  static navigationOptions = ({navigation}) => ({
    // title: 'MY ACCOUNT'
    header: null
})
  constructor() {
    super();

    if (Platform.OS === 'android') {

      UIManager.setLayoutAnimationEnabledExperimental(true)

    }

    const array = [
      //Counters
      { expanded: false, title: "Counters", body: "Circulation Counter\n\nMultimedia & Special Collection Counter\n\nReader Advisor/Information Desks\n\nLaw Counter\n " },

      //Study Rooms
      { expanded: false, title: "Study Rooms", body: "Carrel Room\n\nResearch Room\n\nDiscussion Room" },

      //Reading Areas
      { expanded: false, title: "Reading Areas", body: "General Reading Areas\n\nPost Graduate Lounge\n\nNewspaper Reading and News Watching Area\n\nLeisure Reading Room" },

      //Computing Facilities
      //{ expanded: false, title: "Computing Facilities", body: "" },

      //Self-Service Machines
      { expanded: false, title: "Self-Service Machines", body: "Self-Check Machines\n\nManual Bookdrop (for special need users)\n\nSmart Bookdrop Machine"},

      //Other Facilities
      { expanded: false, title: "Other Facilities", body: "Viewing Rooms\n\nAuditorium & Multipurpose Room\n\nPhotocopying/Printing" },

      //User With Disabilities
      { expanded: false, title: "User with Special Disabilities", body: "Acces to and within the Library\n\nRoom for User with Special Disabilities" },

      //Learning Common Areas
      { expanded: false, title: "Learning Common Areas", body: "" },
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

  static navigationOptions = ({navigation}) => ({
    // title: 'Facilities'
    header:null
  })
  
    render(){
        return(


            <View style={styles.header}>
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
              
              centerComponent={{ text:'FACILITIES', style: { color: '#fff', 
                                  fontWeight: 'bold', fontSize: 15 } }}
            backgroundColor="#028A7E"
          />

<View style={styles.MainContainer}>

{/* <Text style={styles.PageTitle}>FACILITIES</Text> */}

  <ScrollView contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 5 }}>
    {
      this.state.AccordionData.map((item, key) =>
        (
          <Accordion_Panel key={key} onClickFunction={this.update_Layout.bind(this, key)} item={item} />
        ))
    }
    
  </ScrollView>

            <View style={styles.container}>  
            
                    

                    <Button title='Facility Reservation'
                      onPress={
                        ()=>this.props.navigation.navigate('FacilityReservationScreen')}
                      />

            </View>
          </View>
        </View> 
        </View>
      
     
        )
    }
}
export default Facilities;

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
    textAlign:'center'
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

});
/*     borderColor: '#ecf0f1',
    marginVertical: 5
  },

  Btn: {
    padding: 10,
    backgroundColor: '#028A7E'
  }
}) */