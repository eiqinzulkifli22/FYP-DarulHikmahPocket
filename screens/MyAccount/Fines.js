import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import '@expo/vector-icons';
import { HeaderBackButton } from 'react-navigation';

class Fines extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'FINES',
    headerLeft: (
      <HeaderBackButton
        onPress={() => { navigation.navigate('MyAccountScreen') }} />
    )
  })

  render() {
    return (
      <View style={styles.header}>
        <View style={styles.container}>
          <Text>User has no fines.</Text>
        </View>
      </View>
    )
  }
}

export default Fines;

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