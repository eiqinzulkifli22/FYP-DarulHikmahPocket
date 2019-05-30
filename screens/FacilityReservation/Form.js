import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import '@expo/vector-icons';

class Form extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Form'
  })

  render() {
    return (
      <View style={styles.header}>
        <View style={styles.container}>
          <Text>Form</Text>
        </View>
      </View>
    )
  }
}


export default Form;

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
