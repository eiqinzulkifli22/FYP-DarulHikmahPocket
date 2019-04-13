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

class Contacts extends React.Component{
    
  static navigationOptions = ({navigation}) => ({
    title: 'Contacts'
  })

  constructor() {
    super();

    if (Platform.OS === 'android') {

      UIManager.setLayoutAnimationEnabledExperimental(true)

    }

    const array = [
      //IIUM Library
      { expanded: false, title: "IIUM Library", body: "Dar al-Hikmah Library \nInternational Islamic University Malaysia \nP.O Box 10, 50738 \n Kuala Lumpur, Malaysia \n\nPhone: \n+603 - 6196 4815 \n\nFax: \n+603 - 6196 4855" },

      //Syed Muhammad Naquib al-Attas Library
      { expanded: false, title: "Syed Muhammad Naquib al-Attas Library", body: "The International Institute of Islamic Thought and Civilisation (ISTAC) \nNo.24 Jalan Tuanku Syed Sirajuddin \nTaman Duta, 50480 \nKuala Lumpur, Malaysia \n\nPhone: \n+603 - 6207 3430 \n\nFax: \n+603 - 6207 3478"},
      
      //Kuantan Library & CFS Gambang Library
      { expanded: false, title: "Kuantan Library & CFS Gambang Library", body: "IIUM Library Kuantan & CFS Gambang \nInternational Islamic University Malaysia \nJalan Sultan Ahmad Shah \nBandar Indera Mahkota \n25200 Kuantan \nPahang Darul Makmur, Malaysia \n\nCustomer Service Librarians: \n+609 - 570 4187/4188 \n\nPhone: \n+609 - 570 4000 (ext. 3456/4180) \\nnFax: \n+609 - 570 4382" },
      
      //Pagoh Edu Hub Library
      { expanded: false, title: "Pagoh Edu Hub Library", body: "International Islamic University Malaysia \nPagoh Edu Hub KM \n1, Jalan Panchor\n84600 Pagoh. Muar \nJohor Darul Takzim, Malaysia" },
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
   /*  static navigationOptions = ({navigation}) => ({
        header: null
      }) */
      
  /*   constructor(props) {
        super(props)
    }
 */
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

              <View style={styles.MainContainer}>

                  {/*  <Text style={styles.PageTitle}>CONTACTS</Text> */}

                      <ScrollView contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 5 }}>
                            {
                              this.state.AccordionData.map((item, key) =>
                                (
                                  <Accordion_Panel key={key} onClickFunction={this.update_Layout.bind(this, key)} item={item} />
                                ))
                            }
                        </ScrollView>

               </View>

        </View> 
      
     
        )
    }
}
export default Contacts;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
  },


  Panel_text: {
    textAlign: 'center',
    fontSize: 18,
    color: '#000',
    padding: 10
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
    header: {
        flex: 1,
        paddingTop: 4,
        backgroundColor: '#ecf0f1',
      }
})