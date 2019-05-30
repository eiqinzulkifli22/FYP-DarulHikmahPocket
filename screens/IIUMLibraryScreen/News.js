import React from 'react';
import { View, Text, StyleSheet, Linking, ScrollView } from 'react-native';
import { Header, ListItem } from 'react-native-elements';
import '@expo/vector-icons';
import { HeaderBackButton } from 'react-navigation';


const list = [
  {
    news: 'TRIAL: Online Database - Clinical Pharmacology Drug Reference Solution',
    image: 'http://www.iium.edu.my/imagecache/large/38307/ClinikalKeyTrial.jpg',
    url: 'http://www.iium.edu.my/news/trial-online-database-clinical-pharmacology-drug-reference-solution',
  },

  {
    news: 'Event: Book Drive "Donate a Book, Change a Life" | April - August 2019',
    image: 'http://www.iium.edu.my/imagecache/medium/36235/iium-library-book-drive-kuantan.jpg',
    url: 'http://www.iium.edu.my/news/event-book-drive-donate-a-book-change-a-life-april-august-2019'
  },

  {
    news: 'Event: Book Review #5PAGES1DAY. 8th March, 18th April & 22nd April 2019',
    image: 'http://www.iium.edu.my/imagecache/medium/35843/book-review.jpg',
    url: 'http://www.iium.edu.my/news/event-book-review-5pages1day-8th-march-18th-april-22nd-april-2019'
  },
  {
    news: 'DATABASE ON TRIAL: CLINICAL PHARMACOLOGY | 11TH MARCH - 10TH APRIL 2019',
    image: 'http://www.iium.edu.my/imagecache/medium/35279/onlinedb-trial.jpg',
    url: 'http://www.iium.edu.my/news/database-on-trial-clinical-pharmacology-11th-march-10th-april-2019'
  },
  {
    news: 'Mohd Kamal Hassan Library (MKH Library) @ Level 4 Rectory Building IIUM (Gombak)',
    image: 'http://www.iium.edu.my/imagecache/medium/35735/iium-mkh-library01.jpg',
    url: 'http://www.iium.edu.my/news/mohd-kamal-hassan-library-mkh-library-at-level-4-rectory-building-iium-gombak'
  }


]

class News extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'NEWS',
    headerLeft: (
      <HeaderBackButton
        onPress={() => { navigation.navigate('IIUMLibScreen') }} />
    )
  })

  render() {
    return (
      <View style={styles.header} makescrollable>
        <View>

          {
            list.map((l, i) => (
              <ListItem
                key={i}
                leftAvatar={{ source: { uri: l.image } }}
                title={l.news}
                button onPress={() => Linking.openURL(l.url)}
                bottomDivider={true}
              />
            ))
          }
        </View>
        <View style={styles.container}>
        </View>
      </View>
    )
  }
}
export default News;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 1,
    paddingTop: 4,
    backgroundColor: '#ecf0f1',
  }
})
