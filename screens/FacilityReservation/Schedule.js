import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import '@expo/vector-icons';

class Schedule extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Schedule'
  })
  render() {
    return (
      <View style={styles.header}>

        <View style={styles.container}>
          <Text>Schedule</Text>
        </View>
      </View>
    )
  }
}


export default Schedule;

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
