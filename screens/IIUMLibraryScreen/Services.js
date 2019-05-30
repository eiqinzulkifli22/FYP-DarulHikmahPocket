import React from 'react';
import { View, Text, StyleSheet, Platform, LayoutAnimation, ScrollView, UIManager, TouchableOpacity } from 'react-native';
import '@expo/vector-icons';
import { HeaderBackButton } from 'react-navigation';



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


export default class Services extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'SERVICES',
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
      //Loans
      { expanded: false, title: "Loans", body: "Loans/Borrowing\n\nBorrowing Privileges\n\nReturn\n\nOverdue/Late Return fines/Penalty\n\nRenewal\n\nReservation/Hold\n\nBookdrop Service\n\nSelf-Check Machines\n\nBook Security Machines\n\nBook Security System" },

      //Inter-Library Loan
      { expanded: false, title: "Inter-Library Loan", body: "Guidelines\n\nCost of ILL/DDS" },

      //Information Services
      { expanded: false, title: "Information Services", body: "Reference Enquiry\nInformation Desks are available at level 1 & 2 of the library which are manned by trained staff to assist library customers. Liaison librarians also entertain walk-in enquiries at their offices.\n\nLiterature Search\nThe library subscribes to a number of online databases which carry indexes, abstracts or full text articles on various subjects to facilitate literature searching activities. These databases are accessible from the public workstations\n\nSearching Assistance\nCustomers can make a request for searching assistance at the Circulation counter if the books needed are not available on the shelves by completing the Request for Searching Assistance Form. Library staff will then search for the books and results of searches are displayed on the notice board.\n\nDigital Library Services\nCustomer can access a variety of digital resources through the Digital Library services - examination papers, thesis, Islamic Economics, Islamic Law, contents pages, videos, online databases and e-books. These resources which are accessible remotely significantly complements information available in print format.\n\nDigital Signage\nLibrary notices and announcements are displayed at the LCD TVs which are available outside the library entrance and at level 2 of the library. This service is in addition to announcements made through print notices and the library’s website.\n\nNew Titles\nThis service which is accessible via the Library’s catalogue alerts customers on new titles acquired by the Library. The new titles list is automatically updated daily where titles are maintained in the list for 30 days. You may borrow the books if available on the shelves or reserve them if the books are on loan.\n\nExhibitions\nTo update library users on specific information, IIUM Library organises regular exhibitions which focuses on specific themes and other current topics of interest." },

      //Discover Our Muslim Scholars Profile
      { expanded: false, title: "Discover Our Muslim Scholars Profile", body: "The Islamic Intellectual Heritage was set up to showcase the collection of biodata and profile of Muslim Scholars from the Malay Archipelago.\n\nFor its initial collection, the area was furnished with the work of Allahyarham Wan Muhammad Saghir Abdullah. This well known scholar, who passed away on 12 April 2007, was a respectable researcher and writer of well known Muslim Scholars of the Malay Archipelago. It was also his wish that the IIUM Library, being a library in an Islamic university, preserves his well researched   manuscript for the benefit of researchers in the same field.\n\nUpon request by the Library to Khazanah  Fataniah, the collection has been sent to the Malaysian National Institute of Translation to be translated into English. It was later framed and displayed creatively in the area now known as the Islamic Intellectual Heritage.\n\nYou can access our Muslim Scholars Profile flipping book on http://apps.lib.iium.edu.my/mscflipbook/main/" },


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


      <View style={styles.MainContainer}>
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
  Panel_text: {
    fontSize: 18,
    color: '#000',
    padding: 10,
    textAlign: 'justify',
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
