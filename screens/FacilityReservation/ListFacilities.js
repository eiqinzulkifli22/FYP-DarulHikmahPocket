import React, { Component } from 'react';
import { Platform, LayoutAnimation, StyleSheet, View, Text, ScrollView, UIManager, TouchableOpacity } from 'react-native';
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

export default class ListFacilities extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'ROOMS',
    headerLeft: (
      <HeaderBackButton
        onPress={() => { navigation.navigate('FacilityReservationScreen') }} />
    )
  })
  constructor() {
    super();

    if (Platform.OS === 'android') {

      UIManager.setLayoutAnimationEnabledExperimental(true)

    }

    const array = [
      //Audiotrium
      { expanded: false, title: "Auditorium", body: "Auditorium with seating capacity of 146" },

      //Computer Lab
      { expanded: false, title: "Computer Lab", body: "Computer Labs are available at Level 2 and 3. These labs are especially for user education classes conducted by the Library. When there are no classes held, users are allowed to use the PCs for academic purposes." },

      //Multipurpose Room
      { expanded: false, title: "Multipurpose Room", body: "Multipurpose Room able to accommodate 50 person at one go" },

      //Viewing Room
      { expanded: false, title: "Viewing Room", body: "Viewing rooms available at the Multimedia & Special Collections area at Level 3 " },


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
        <ScrollView contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 5 }} top={100}>
          {
            this.state.AccordionData.map((item, key) =>
              (
                <Accordion_Panel key={key} onClickFunction={this.update_Layout.bind(this, key)} item={item} />
              ))
          }
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  PageTitle: {
    textAlign: 'center',
    color: '#028A7E',
    fontWeight: 'bold',
    marginBottom: 25,
    position: 'absolute',
    top: 50,

  },

  Panel_text: {
    color: '#000',
    padding: 10,
    textAlign: 'center',
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

});
