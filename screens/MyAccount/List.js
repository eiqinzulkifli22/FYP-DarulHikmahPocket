import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import '@expo/vector-icons';

class List extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'List'
  })

  render() {
    return (
      <View style={styles.header}>
        <View style={styles.container}>

          <Text>List</Text>

        </View>
      </View>
    )
  }
}
export default List;

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