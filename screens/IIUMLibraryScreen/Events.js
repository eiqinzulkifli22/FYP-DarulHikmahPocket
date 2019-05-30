import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import '@expo/vector-icons';
import { HeaderBackButton } from 'react-navigation';


class Events extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'EVENTS',
    headerLeft: (
      <HeaderBackButton
        onPress={() => { navigation.navigate('IIUMLibScreen') }} />
    )
  })

  render() {
    return (

      <View style={styles.header}>
        <View style={styles.container}>

          <Text>No recent events.</Text>

        </View>
      </View>
    )
  }
}
export default Events;

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
  }
})
