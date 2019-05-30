import React, { Component } from 'react';
import '@expo/vector-icons';
import { Platform, LayoutAnimation, StyleSheet, View, Text, ScrollView, UIManager, TouchableOpacity, Button, ImageBackground } from 'react-native';
import { HeaderBackButton } from 'react-navigation';

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


class Facilities extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'FACILITES',
    headerLeft: (
      <HeaderBackButton
        onPress={() => { navigation.navigate('IIUMLibScreen') }} />
    )
  })
  constructor() {
    super();

    if (Platform.OS === 'android') {

      UIManager.setLayoutAnimationEnabledExperimental(true)

    }

    const array = [
      //Counters
      { expanded: false, title: "Counters", body: "Circulation Counter\nMain circulation counter is available at Level 2. Here is where you can register for membership. Registration entitles you borrower barcode and password for register membership that will entitles your an access for Barrier/Security gate, library materials/facility loan system, PC use and reservation and Digital Library Services, borrowing/returning, pay bills and clearance, and access to Red-Spot Collections.\n\nMultimedia & Special Collection Counter\nMultimedia counter isMultimedia counter is located at level 3. If you wish for any multimedia and special collection materials, please proceed to this counter. Booking of multimedia equipments and mutimedia rooms such as Auditorium and Multipurpose can be done here.\n\nReader Advisor/Information Desks\nReader advisory Information Desks is available at level 1 & 2 of the library. Manned by trained staff to assist library customer. Liaison librarians also entertain walk-in enquiries at their offices.\n\nLaw Counter\nLaw Counter is located at Level 1 of the second entrance library. " },

      //Study Rooms
      { expanded: false, title: "Study Rooms", body: "Carrel Room\nWe have single-occupant carrel rooms at all level. These rooms are available for postgraduate students only. There are 2 types of carrel room: Monthly and Three Hourly. Loans can only be extended if the room is not reserved by others. In order to maintain fair distributions of carrel room services, any late returns of keys will be fined RM5.00 per day. Not all carrel rooms are equipped with PCs.\nWe even have carrel rooms for the disabled persons or person with special needs. All you need to do is to approach the Circulation Counter for the room key.\n\nResearch Room\nThese rooms are available for academic staff only. Booking is limited to the reasearch period and can be extended if it is not reserved by others.\n\nDiscussion Room\nThese rooms can only be used by a group of not less than three (3) users and not more than six(6), eight(8) or sixteen(16) depending on the size of the room. Prior booking is necessary as the number of rooms is limited and can be borrowed for three hours only and will be extended if it is not reserved by others." },

      //Reading Areas
      { expanded: false, title: "Reading Areas", body: "General Reading Areas\nGeneral reading areas with ample seats are available on all level/floor of the library.\n\nPost Graduate Lounge\nPost Graduate Lounge basically meant for post graduate students to enjoy reading or having a mild discussion. Located at level 3, its ambiance offers customers to feel relax while studying.\n\nNewspaper Reading and News Watching Area\nWe have separate newspaper-reading and news-watching areas for the ladies and gentlemen at Level 2. Customers can enjoy reading daily newpapers while watching selectec channels of television program.\n\nLeisure Reading Room\nLeisure Reading Room at Level 2 houses books meant for light or leisure reading." },

      //Computing Facilities
      { expanded: false, title: "Computing Facilities", body: "Computer Labs\nComputer Labs are available at Level 2 and 3. These labs are especially for user education classes conducted by the Library. When there are no classes held, users are allowed to use the PCs for academic purposes.\n\nInternet Workstations\nInternet enabled computers are also available at level 1, 3 and 4. Users are required to login to use these computers and usage are restricted to 2 hours per day for academic use only.\n\nOPAC\nTo find books or information resources, customers use the Online Public Access Catalogue (OPAC) stations which are available on all levels.\n\nFull Text Terminal\nA full text terminal is available at Level 2 and Level 1. This terminal is dedicated for searching and viewing full text digitize contents from our Digital Library such as Manuscripts, Theses and etc.\n\nWireless Facility\nPersonal laptop/notebook use in the library is facilitated by wireless network. To utilize this facility, you are to register your laptop at Information Technology Division (ITD). The library provide power charging points for your personal laptops/notebook. look out for areas identified for this purpose." },

      //Self-Service Machines
      { expanded: false, title: "Self-Service Machines", body: "Self-Check Machines\nProvided to enable customers to borrow and renew books on their own. We highly encourage customers to do their self-service borrowing of books at the Self-check machines near the Circulation Counter at Level 2 .\n\nManual Bookdrop (for special need users)\nLocated outside the library building and operated 24 hours a day to cater for after-hours return.\n\nSmart Bookdrop Machine\nSelf-service ‘smart’ book return for customers to return books borrowed without the hassle of the counter staff, is available at Level 2 near the Circulation Counter. This machine will automatically updated the borrower record when user returns a book." },

      //Other Facilities
      { expanded: false, title: "Other Facilities", body: "Viewing Rooms\nViewing rooms are also available at the Multimedia & Special Collections area at Level 3. \n\nAuditorium & Multipurpose Room\nThe Library has an auditorium with seating capacity of 146 and a Multipurpose Room (MPR) that is able to accommodate 50 person at one go.\n\nPhotocopying/Printing\nSelf-services photocopy printing machines available on every floors of the library. Operator operated photocopying services is available on Level 1." },

      //User With Disabilities
      { expanded: false, title: "User with Special Disabilities", body: "Acces to and within the Library\nTwo external ramps access to entrance and handrail on steps.\nAutomatic opening IN and OUT door entrance and a swing gate to bypass Pedestratian Gate.\nLift with voice indicator providing access to all floors.\n\nRoom for User with Special Disabilities\nThe Library has provided a room for Users with Special Disabilities at entrance level, Level 2. The room is open for users with special disabilities daily (Refer to Library's Opening Hours). It is located near other library facilities such as Circulation Counter, Readers Advisory Desk, Photocopying & Printing Service, Full Text PCs and others for easy access by users with special disabilities." },

      //Learning Common Areas
      { expanded: false, title: "Learning Common Areas", body: "The library has established an area called Learning Common for students to meet and discuss. The areas chosen were formerly not highly used by the customers. The areas are now equipped with a raised floor and furnished with “Japanese tables” and mounted glass boards for scribbling of discussion notes. So far, Learning Common is available on level 1, 2 and 3 of the Library. These study areas are rapidly becoming a hit with the Library customers. \n\nThe IIUM Library continues to strive to fulfill the expectations of its customers in line with the rapid change of the learning and study styles of its customers." },
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

  render() {
    return (
      <ImageBackground source={require('./main.jpg')} opacity={0.11} style={styles.backgroundImage}>
        <View style={styles.header}>
          <View style={styles.header}>

            <View style={styles.MainContainer}>

              <ScrollView contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 5 }}>
                {
                  this.state.AccordionData.map((item, key) =>
                    (
                      <Accordion_Panel key={key} onClickFunction={this.update_Layout.bind(this, key)} item={item} />
                    ))
                }

              </ScrollView>

              <View style={styles.container}>

              </View>
            </View>
          </View>
        </View>
      </ImageBackground>


    )
  }
}
export default Facilities;

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
    textAlign: 'justify'
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
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'

  },

});
/*     borderColor: '#ecf0f1',
    marginVertical: 5
  },

  Btn: {
    padding: 10,
    backgroundColor: '#028A7E'
  }
}) */
