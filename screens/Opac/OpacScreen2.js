import React from 'react';
import {View, Text,StyleSheet, FlatList} from 'react-native';
import { Container, Content, Button } from 'native-base'
import { Header, SearchBar } from 'react-native-elements';
import '@expo/vector-icons';
import { SecureStore } from 'expo';



class OpacScreen2 extends React.Component{

  state = {
    data: []
  }

  componentWillMount() {
    //function
    this.fetchData();
  }

  fetchData = async () => {
    //SecureStore.setItemAsync('user_token', result.token)
    const response = await fetch("http://192.168.1.8:8000/api/book/search");
    const json = await response.json();
    this.setState({data: json.Book})
  }

    render(){
        return(
            <View style={styles.header}>
        <Header
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
        />
            
            <View style={styles.container}>
                <FlatList data={this.state.data}
                keyExtractor={(x,i) => i}
                renderItem={({item}) => 
                  <Text>
                  {/* { `${item.title} ${item.author}`} */}
                  hello
                  </Text>}/>
            </View>
        </View>

        )
    }
}
export default OpacScreen2;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        flex: 1,
        paddingTop: 4,
        backgroundColor: '#ecf0f1',
      }
})

// import React, { Component } from 'react';
// import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
// import SearchInput, { createFilter } from 'react-native-search-filter';
// import emails from '../mails';
// const KEYS_TO_FILTERS = ['user.name', 'subject'];
 
// export default class App extends Component {
//  constructor(props) {
//     super(props);
//     this.state = {
//       searchTerm: ''
//     }
//   }
//   searchUpdated(term) {
//     this.setState({ searchTerm: term })
//   }
//   render() {
//     const filteredEmails = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
//     return (
//       <View style={styles.container}>
//         <SearchInput 
//           onChangeText={(term) => { this.searchUpdated(term) }} 
//           style={styles.searchInput}
//           placeholder="Type a message to search"
//           />
//         <ScrollView>
//           {filteredEmails.map(email => {
//             return (
//               <TouchableOpacity onPress={()=>alert(email.user.name)} key={email.id} style={styles.emailItem}>
//                 <View>
//                   <Text>{email.user.name}</Text>
//                   <Text style={styles.emailSubject}>{email.subject}</Text>
//                 </View>
//               </TouchableOpacity>
//             )
//           })}
//         </ScrollView>
//       </View>
//     );
//   }
// }
 
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'flex-start'
//   },
//   emailItem:{
//     borderBottomWidth: 0.5,
//     borderColor: 'rgba(0,0,0,0.3)',
//     padding: 10
//   },
//   emailSubject: {
//     color: 'rgba(0,0,0,0.5)'
//   },
//   searchInput:{
//     padding: 10,
//     borderColor: '#CCC',
//     borderWidth: 1
//   }
// });




// import React, { Component } from 'react';
// import { StyleSheet, Text, View, ScrollView, ListView, TouchableOpacity } from 'react-native';
// import SearchInput, { createFilter } from 'react-native-search-filter';
// import emails from '../mails';
// //import emails from './mails';

// import BarcodeScanner from './BarcodeScanner';
// import { NavigationEvents } from 'react-navigation';
// const KEYS_TO_FILTERS = ['books.title', 'books.author'];


// export default class OpacScreen2 extends Component {
//  constructor(props) {
//     super(props);
//     var dataSource = new ListView.DataSource({rowHasChanged:
//        (r1, r2) => r1 != r2})
//     this.state = {
//       searchTerm: '',
//       title: '',
//       author:'',
//       call_no:'',
//       isbn:'',
//       results: dataSource.cloneWithRows(props.data.books)
//     }
//   }

  

//   searchUpdated(term) {
//     this.setState({ searchTerm: term })
//     const { title }  = this.state ;
//     const { author }  = this.state ;
//     const { call_no }  = this.state ;
//     const { isbn }  = this.state ;
//     let data = JSON.stringify({
//       author:author,
//       title : title,
//       author : author,
//       call_no : call_no,
//       isbn : isbn,
//     });
//     var nav = this.props.navigator
// fetch("http://192.168.1.8:8000/api/book/search", {
// 		method: 'GET',

//   })
//   .then(function(response){
//     return response.json()
//   })
//   .then(function(data){
//     nav.push({
//       ident: 'Results',
//       data: data
//     })
//   })
//   .catch(function(error){
 
//     console.log("Error:", error)

//   })

    
//   }
  
//  render(){
//   const filteredEmails = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

//       return (
//         <View style={styles.container}>
//           <SearchInput 
//             onChangeText={(term) => { this.searchUpdated(term) }} 
//             style={styles.searchInput}
//             placeholder="Type a message to search"
//             />

//             <ListView style = {{marginTop: 100}} initialListSize={10}
//             dataSource = {this.state.results}
//             renderRow = {(result) => {return this.renderResult(result)}}/>


//          {/*  <ScrollView>
//             {filteredEmails.map(email => {
//               return (
//                 <TouchableOpacity onPress={()=>alert(email.user.name)} key={email.id} style={styles.emailItem}>
//                   <View>
//                     <Text>{email.user.name}</Text>
//                     <Text style={styles.emailSubject}>{email.subject}</Text>
//                   </View>
//                 </TouchableOpacity>
//               )
//             })}
//           </ScrollView> */}
//         </View>
//       );
//     }

//     renderResult(result){
//       return (
//         <TouchableOpacity style={styles.resultRow} onPress={() => Linking.openURL(result.url)}>
 
//         {/* <Image source={{uri: result.image_url}}
 
//        style={{width: 80, height: 80, justifyContent: 'flex-start'}} /> */}
 
//        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
 
//          <Text style={{fontWeight: 'bold'}}>{`{result.title}`}</Text>
 
//          <Text>Rating: {`${result.author}`}</Text>
 
//          <Text>Phone: {`${result.call_no}`}</Text>
 
//        </View>
 
//       </TouchableOpacity>
//       )
//     }
//   }
   
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       justifyContent: 'flex-start'
//     },
//     emailItem:{
//       borderBottomWidth: 0.5,
//       borderColor: 'rgba(0,0,0,0.3)',
//       padding: 10
//     },
//     emailSubject: {
//       color: 'rgba(0,0,0,0.5)'
//     },
//     searchInput:{
//       padding: 10,
//       borderColor: '#CCC',
//       borderWidth: 1
//     }
//   });


/*  import React, { Component } from 'react';
 
import { Text, StyleSheet, View, ListView, TextInput, ActivityIndicator, Alert, TouchableOpacity } from 'react-native';
import {Header,SearchBar} from 'react-native-elements';

export default class OpacScreen extends Component {
 
  constructor(props) {
 
    super(props);
 
    this.state = {
 
      isLoading: true,
      text: '',
    
    }
 
    this.arrayholder = [] ;
  }
 
  componentDidMount() {
 
    return fetch('http://172.20.10.3/Fruits_Site/FruitsList.php')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function() {
 
          // In this block you can do something with new state.
          this.arrayholder = responseJson ;
 
        });
      })
      .catch((error) => {
        console.error(error);
      });
      
  }
 
  GetListViewItem (fruit_name) {
    
   Alert.alert(fruit_name);
  
  }
  
   SearchFilterFunction(text){
     
     const newData = this.arrayholder.filter(function(item){
         const itemData = item.fruit_name.toUpperCase()
         const textData = text.toUpperCase()
         return itemData.indexOf(textData) > -1
     })
     this.setState({
         dataSource: this.state.dataSource.cloneWithRows(newData),
         text: text
     })
 }
 
  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: .5,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }
 
 
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
 
    return (
 
      <View style={styles.MainContainer}>
 
      <TextInput 
       style={styles.TextInputStyleClass}
       onChangeText={(text) => this.SearchFilterFunction(text)}
       value={this.state.text}
       underlineColorAndroid='transparent'
       placeholder="Author, Title.."
        />
 
        <ListView
 
          dataSource={this.state.dataSource}
 
          renderSeparator= {this.ListViewItemSeparator}
 
          renderRow={(rowData) => <Text style={styles.rowViewContainer} 
 
          onPress={this.GetListViewItem.bind(this, rowData.fruit_name)} >{rowData.fruit_name}</Text>}
 
          enableEmptySections={true}
 
          style={{marginTop: 10}}
 
        />
 
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
 
 MainContainer :{
 
  justifyContent: 'center',
  flex:1,
  margin: 7,
 
  },
 
 rowViewContainer: {
   fontSize: 17,
   padding: 10
  },
 
  TextInputStyleClass:{
        
   textAlign: 'center',
   height: 40,
   borderWidth: 1,
   borderColor: '#009688',
   borderRadius: 7 ,
   backgroundColor : "#FFFFFF"
        
   }
 
}); 
 */

/* import React from 'react';
import {View, Text,StyleSheet} from 'react-native';
import { Container, Content, Button } from 'native-base'
import { Header, SearchBar } from 'react-native-elements';
import '@expo/vector-icons';

*/