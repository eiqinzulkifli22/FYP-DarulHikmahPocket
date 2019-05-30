import React from 'react';
import { View, Text, StyleSheet, Image, Button, ImageBackground } from 'react-native';
import '@expo/vector-icons';
import { HeaderBackButton } from 'react-navigation';


class OpeningHours extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'OPENING HOURS',
    headerLeft: (
      <HeaderBackButton
        onPress={() => { navigation.navigate('IIUMLibScreen') }} />
    )
  })

  render() {

    return (
      <View style={styles.header}>
        <View style={styles.container}>
          <Image source={require('./timetable.png')} style={styles.timetable} />

          <View style={styles.content} alignItems='center'>
            <Text color='black' style={styles.information}>Services at the Circulation Counter will be closed 30 minutes before the library closing time.</Text>

            <Text></Text>
            <Text></Text>

            <Text color='black' style={styles.information}>The library is straightly opened from 2.00 pm or 2.30 pm to 10.45 pm during the revision and examination week only.</Text>

            <Text></Text>
            <Text></Text>

            <Text color='black' style={styles.information}>The library is closed from 1.00 pm to 2.00 pm (Monday to Thursday) and 12.30 pm to 2.30 (Friday) as usual.</Text>

          </View>
        </View>
      </View>

    )
  }
}
export default OpeningHours;

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

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    width: '100%',
    height: '100%',

  },
  timetable: {
    width: 375,
    height: 155,
    position: 'absolute',
    top: 55,
  },
  content: {
    top: 100,
    marginLeft: 50,
    marginRight: 50,
    //position: 'absolute',
    alignItems: 'center',
    textAlign: 'center'
  },

  information: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold'

  },

})
