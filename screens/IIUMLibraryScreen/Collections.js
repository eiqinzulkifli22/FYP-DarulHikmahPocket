import React, { Component } from 'react';
import '@expo/vector-icons';
import { HeaderBackButton } from 'react-navigation';
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

class Collections extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'COLLECTIONS',
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
      //General Collection
      { expanded: false, title: "General Collection", body: "Library materials from the General Collection make up the major portion of the library’s collection. \n\nThis collection comprises of monographic texts and additional reading covering all the disciplines of the University’s academic and research programmes. \n\nThis collection is distributed at all the 4 levels of the library according to subject." },

      //Reference Collection
      { expanded: false, title: "Reference Collection", body: "The Reference Collection comprises: dictionaries, encyclopedias, directories, directories, biographies, numerical data compilations, handbooks, manuals, bibliographies, yearbooks, gazetteers, atlases, indexes, and abstracts. \n\nThe collection is divided according to subject on all the four floors of the Library.  Except for Level 1, the Reference Collection is arranged on the wooden shelves which is noticeable from aftar.  As the name suggested, users can only refer to the collection within the library.  It is not a borrowable collection. " },

      //Controlled Access Collection
      { expanded: false, title: "Controlled Access Collection", body: "The Controlled Access Collection is made up of materials that are heavily used such as: red sopt books, theses, research reports, pictorial collections, examination questions, official publications, and small size publications. \n\nThe collection is scattered on all the four floors of the Library.  Users can know the exact location by using the Library Catalogue. \n\nSome collections are placed on open shelves for easy browsing and some are over the counter access and have limited borrowing period." },

      //Serials Collection
      { expanded: false, title: "Serials Collection", body: "IIUM Library Serials Collection is located at level 4. Our collections consist of titles in various subjects such as religion, language, architecture, environmental design, law, economy, management science, engineering, education, and information and communication technology. Items in the Serials Collection are available in variety of formats: loose-journals, bounded journals, online databases and electronic journals. \n\nThe library has over 1,500 titles of printed journals, reports, yearbooks, directories and etc." },

      //Special Collection
      { expanded: false, title: "Special Collection", body: "Materials placed in the Special Collection are those considered 'unique' to the university, on specific subjects of interest to the university and for specific reason considered important by the library. \n\nThese include: faculty pulications (duplicates of some titles are also available in the General Collection, Islamic economics, Islamic law, controversial materials, manuscripts, archives, and Ahmad Ibrahim Collection. \n\nAhmad Ibrahim and Islamic Law are special collections to Law which are situated on Level 1.  The other Special Collections can be obtained from the Multimedia and Special Counter on Level 3." },

      //Law Collection
      { expanded: false, title: "Law Collection", body: "Services include literature and case searching. The collection is managed by capable library staff who also offer services like literature and case searching. \n\nThe collection comprises: statuses, reports, journals, law books and seminar papers and etc." },

      //Electronic Collection
      { expanded: false, title: "Electronic Collection", body: "Electronic resources refer to any source of information that can only be accessed or used via a stand alone personal computer, the network or the internet. Materials in this category include: CD-ROMs, E-journals, websites, in-house databases, online databases, and digital library services. \n\nUsers can have full access to standalone CD-ROMs, In-House databases and digital library services via specified workstations in the library. On the other hand, those accessible through the internet can be accessed remotely from within and outside the University's campus." },

      //Light Reading Collection
      { expanded: false, title: "Light Reading Collection", body: "Materials in this section comprise of light reading materials covering: fiction, bestsellers, motivation, hobbies, crafts and be the like. \n\nThe loan privilege for these materials is the same as the general collection." },

      //Muslim Scholars Collection
      { expanded: false, title: "Muslim Scholars Collection", body: "The Muslim Scholars Collection was set up with the following objectives: \n\n- To be known as a research university through developing this exclusive section. \n\n- To lead Malaysian universities in the area of Islamic studies integrated with other discipline. \n\n- To provide an exclusive hub for Islamic Studies in the area of research which use English and Arabic as the medium unlike other universities which only use Arabic or Arabic and Malay for their Islamic Studies. " },

      //Brows-able Multimedia Collection
      { expanded: false, title: "Brows-able Multimedia Collection", body: "Browse-Able Multimedia Collection was introduced to the IIUM library users commencing 9th September 2013. \n\nThis new service ensures ease of access to the collection and also maximize usage of multimedia materials in the library. \n\nUsers may browse the multimedia materials on the shelves and borrow them out at the multimedia counter." },

      //Brows-able Theses Collection
      { expanded: false, title: "Brows-able Theses Collection", body: "Theses collection in the Library comprises of Master and PhD theses of IIUM, non-IIUM theses produced by the IIUM faculty members and Islamic theses. Theses must be deposited to the Library in digital and print format. Print copies are kept under controlled access and available upon request. Commencing Sept 2013, users are allowed to  enter the room and browse the theses on the shelves. Besides the print format, the first 24 pages of the online theses can be viewed from the Library homepage. The full text theses can be accessed from any of the six (6) dedicated PCs available on all the 4 floors of the main  Library." },

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

            <Text>Collections</Text>

          </View>
        </View>
      </View>


    )
  }
}
export default Collections;

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
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 25

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
