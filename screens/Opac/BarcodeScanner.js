
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { BarCodeScanner, Permissions, SecureStore } from 'expo';

export default class BarcodeScanner extends React.Component {
/*   constructor(props) {
    //constructor to set default state
    super(props);
    this.state = {
      data: '',
      
      
    };
  } */
   state = {
    hasCameraPermission: null,
  } 

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
    }

  render() {
    const { hasCameraPermission } = this.state;
    const DURATION = 10000;
    const { navigate } = this.props.navigation;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    // <uses-permission android:name="android.permission.VIBRATE"/> 
    return (
      <View style={{ flex: 1 }}>
        <BarCodeScanner
          onBarCodeScanned={this.handleBarCodeScanned}
          style={StyleSheet.absoluteFill}
        />

        


        
      </View>
    );
  }

  handleBarCodeScanned = ( {type, data} ) => {
 
    SecureStore.getItemAsync('user_token')
      .then((token) => {
        const {title} = this.state;
        const {isbn} = this.state;
       
        fetch("http://192.168.1.8:8000/api/book/search", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
          },

         

          body: JSON.stringify({
            term : data,
            title : title,
            isbn : isbn,
          }),
        })
        .then(res => res.json())
        //Vibration.vibrate(DURATION)
        .then(
          (books) => {
            console.log(books);
            

            books.forEach(book => {
              return (
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('ViewBookDetails')} 
                                key={book.id}>  
                  <View>
                    <Text>{book.title}</Text>
                  </View>
                </TouchableOpacity>
              )
            });
          }
        );
      });
  }
}  
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#DBDBD6',
  },
});

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { BarCodeScanner, Permissions } from 'expo';

// export default class BarcodeScanner extends React.Component {
// /*   constructor(props) {
//     //constructor to set default state
//     super(props);
//     this.state = {
//       data: '',
      
      
//     };
//   } */
//    state = {
//     hasCameraPermission: null,
//   } 

//   async componentDidMount() {
//     const { status } = await Permissions.askAsync(Permissions.CAMERA);
//     this.setState({ hasCameraPermission: status === 'granted' });
//     }

//   render() {
//     const { hasCameraPermission } = this.state;
//     const { navigate } = this.props.navigation;

//     if (hasCameraPermission === null) {
//       return <Text>Requesting for camera permission</Text>;
//     }
//     if (hasCameraPermission === false) {
//       return <Text>No access to camera</Text>;
//     }
//     return (
//       <View style={{ flex: 1 }}>
//         <BarCodeScanner
//           onBarCodeScanned={this.handleBarCodeScanned}
//           style={StyleSheet.absoluteFill}
//         />

        


        
//       </View>
//     );
//   }

//   handleBarCodeScanned = ( {type, data} ) => {
//    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    
//    this.props.navigation.navigate('BarcodeScanner2', {
//      JSON_ListView_Clicked_Item: data,
//    })
//    //this.props.navigation.navigate('BarcodeScanner2', {data})
//     // Works on both iOS and Android
 
//   }
// }  
 

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     padding: 16,
//   },
//   input: {
//     width: 200,
//     height: 44,
//     padding: 10,
//     marginBottom: 10,
//     backgroundColor: '#DBDBD6',
//   },
// });





/* import React from 'react';
import { StyleSheet, Text, View, Modal, Button, TouchableOpacity, Alert,Platform } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';

export default class BarcodeScanner extends React.Component {
  constructor(props) {
 
    super(props);
 
    this.state = { 
        
        Alert_Visibility: false, 
        hasCameraPermission: null
        
    };  
  }

  Show_Custom_Alert(visible) {
 
    this.setState({Alert_Visibility: visible});
    
  }
 
  ok_Button=()=>{
 
    Alert.alert("OK Button Clicked.");
 
  }
  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
    }

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={styles.MainContainer}>
      
        <BarCodeScanner
          onBarCodeScanned={this.handleBarCodeScanned}
          style={StyleSheet.absoluteFill}
        />
      
 
      <Modal

        visible={this.state.Alert_Visibility}

        transparent={false}

        animationType={"fade"}

        onRequestClose={ () => { this.Show_Custom_Alert(!this.state.Alert_Visibility)} } >


          <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>


              <View style={styles.Alert_Main_View}>


                  <Text style={styles.Alert_Title}>Custom Alert Dialog Title.</Text>


                  <View style={{ width: '100%', height: 2, backgroundColor: '#fff'}} />


                  <Text style={styles.Alert_Message}> Are You Sure(Alert Dialog Message). </Text>


                  <View style={{ width: '100%', height: 1, backgroundColor: '#fff'}} />


                  <View style={{flexDirection: 'row', height: '30%'}}>

                      <TouchableOpacity 
                          style={styles.buttonStyle}
                          onPress={this.ok_Button} 
                          activeOpacity={0.7} 
                           >
  
                          <Text style={styles.TextStyle}> OK </Text>
              
                      </TouchableOpacity>

                      <View style={{ width: 1, height: '100%', backgroundColor: '#fff'}} />

                      <TouchableOpacity 
                          style={styles.buttonStyle} 
                          onPress={() => { this.Show_Custom_Alert(!this.state.Alert_Visibility)} } 
                          activeOpacity={0.7} 
                          >
  
                          <Text style={styles.TextStyle}> CANCEL </Text>
              
                      </TouchableOpacity>

                  </View>
                
              </View>

          </View>


      </Modal>

      <Button onPress={() => { this.Show_Custom_Alert(true) }} title="Click Here To Show Custom Alert Dialog" />
       
      
    );
  }
    </View>

         
 );
}

handleBarCodeScanned = ({ type, data }) => {
  // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
   
  
  this.props.navigation.navigate('BarcodeScanner2', {data})
   // Works on both iOS and Android

 }
}



const styles = StyleSheet.create({

MainContainer :{
  
flex:1,
justifyContent: 'center',
alignItems: 'center',
marginTop: (Platform.OS == 'ios') ? 20 : 0

},

Alert_Main_View:{

alignItems: 'center',
justifyContent: 'center',
backgroundColor : "#009688", 
height: 200 ,
width: '90%',
borderWidth: 1,
borderColor: '#fff',
borderRadius:7,

},

Alert_Title:{

fontSize: 25, 
color: "#fff",
textAlign: 'center',
padding: 10,
height: '28%'

},

Alert_Message:{

  fontSize: 22, 
  color: "#fff",
  textAlign: 'center',
  padding: 10,
  height: '42%'
 
},

buttonStyle: {
  
  width: '50%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center'

},
 
TextStyle:{
  color:'#fff',
  textAlign:'center',
  fontSize: 22,
  marginTop: -5
}

}); */

     
/* import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Modal, Button, TouchableOpacity, Alert } from 'react-native';
import { BarCodeScanner,Permissions} from 'expo';


export default class BarcodeScanner extends Component {
 
  constructor(props) {
 
    super(props);
 
    this.state = { 
        data: '',
        Alert_Visibility:  false,
        hasCameraPermission: null
    };
 
  }
 
  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
    }


  Show_Custom_Alert(visible) {
 
    this.setState({Alert_Visibility: visible});
    
  }
 
  ok_Button=()=>{
 //onPress= ()=> this.props.navigation.navigate('HomeScreen');
 Alert.alert("OK Button Clicked.");
   //onPress={this.props.navigation.navigate('HomeScreen')} 
 
  }
 
 render() {
  const { hasCameraPermission } = this.state;

  if (hasCameraPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }
     
    return (
      <View style={styles.MainContainer}>
      <BarCodeScanner
        onBarCodeScanned={this.handleBarCodeScanned}
        style={StyleSheet.absoluteFill}

      />



      <Modal

        visible={this.state.Alert_Visibility}

        transparent={false}

        animationType={"slide"}

        onRequestClose={ () => { this.Show_Custom_Alert(!this.state.Alert_Visibility)} } >


          <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>


             <View style={styles.Alert_Main_View}>


                  <Text style={styles.Alert_Title}>Custom Alert Dialog Title.</Text>


                  <View style={{ width: '100%', height: 2, backgroundColor: '#fff'}} />


                  <Text style={styles.Alert_Message}> Bar code with data ${data} has been scanned!. </Text>


                  <View style={{ width: '100%', height: 1, backgroundColor: '#fff'}} />


                  <View style={{flexDirection: 'row', height: '30%'}}>
                 
                  <TouchableOpacity 
                    style={styles.buttonStyle}
                    onPress={()=>this.props.navigation.navigate('HomeScreen')}
                    activeOpacity={0.7}>

                    <Text style={styles.TextStyle}> OK </Text>

                  </TouchableOpacity>
                      
  
                          
              

                      <View style={{ width: 1, height: '100%', backgroundColor: '#fff'}} />

                      <TouchableOpacity 
                          style={styles.buttonStyle} 
                          onPress={() => { this.Show_Custom_Alert(!this.state.Alert_Visibility)} } 
                          activeOpacity={0.7} 
                          >
  
                          <Text style={styles.TextStyle}> CANCEL </Text>
              
                      </TouchableOpacity>

                  </View>
                
              </View> 

          </View>


      </Modal>

      

    </View>

     
           
   ); 
 }

 handleBarCodeScanned = ({ type, data }) => {
  // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  


   // Works on both iOS and Android

 }

}
 
const styles = StyleSheet.create({
 
MainContainer :{
    
 flex:1,
 justifyContent: 'center',
 alignItems: 'center',
 marginTop: (Platform.OS == 'ios') ? 20 : 0
 
},
 
Alert_Main_View:{
 
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor : "#009688", 
  height: 200 ,
  width: '90%',
  borderWidth: 1,
  borderColor: '#fff',
  borderRadius:7,
 
},
 
Alert_Title:{
 
  fontSize: 25, 
  color: "#fff",
  textAlign: 'center',
  padding: 10,
  height: '28%'
 
},
 
Alert_Message:{
 
    fontSize: 22, 
    color: "#fff",
    textAlign: 'center',
    padding: 10,
    height: '42%'
   
  },
 
buttonStyle: {
    
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
 
},
   
TextStyle:{
    color:'#fff',
    textAlign:'center',
    fontSize: 22,
    marginTop: -5
}
 
});
 */
  

//IPAH PUNYA

/* import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { Constants, BarCodeScanner, Permissions, } from 'expo';

export default class App extends Component {
  state = {
    hasCameraPermission: null
  };

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };


  _handleBarCodeRead = data => {
    //if (JSON.stringify(data) == "726165091065")    
      Alert.alert(
      JSON.stringify(data),
      //'Food Name: Desa Mineral Water, Food Calorie: 0kcal'      
      );
 
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Scan your book</Text>
        <Text></Text>
        <Text></Text>

        {this.state.hasCameraPermission === null ?
          <Text>Requesting for camera permission</Text> :
          this.state.hasCameraPermission === false ?
            <Text>Camera permission is not granted</Text> :
            <BarCodeScanner
              onBarCodeRead={this._handleBarCodeRead}
              style={{ height: 200, width: 200 }}
            />
        }

        <Text></Text>
        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  }
}); */

/* "use strict";

var React = require("react-native");
var Camera = require("react-native-camera");

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    AlertIOS,
} = React;

var ReactProject = React.createClass({

    getInitialState: function() {
        return {
            showCamera: true,
            cameraType: Camera.constants.Type.back
        }
    },

    renderCamera: function() {
        if(this.state.showCamera) {
            return (
                <Camera
                    ref="cam"
                    style={styles.container}
                    onBarCodeRead={this._onBarCodeRead}
                    type={this.state.cameraType}>
                </Camera>
            );
        } else {
            return (
                <View></View>
            );
        }
    },

    render: function() {
        return (
            this.renderCamera()
        );
    },

    _onBarCodeRead: function(e) {
        this.setState({showCamera: false});
        AlertIOS.alert(
            "Barcode Found!",
            "Type: " + e.type + "\nData: " + e.data
        );
    }

});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
    }
});

AppRegistry.registerComponent('ReactProject', () => ReactProject); */