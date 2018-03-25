import React from 'react';
import { StyleSheet,Text, View, ImageBackground, TextInput, Image, TouchableOpacity, } from 'react-native';



export default class Signup extends React.Component {

    loginfunc = () =>
    {
       this.props.navigation.navigate('First');
       
    }

   static navigationOptions = {
      title: 'Sign Up',
      headerTintColor: 'white',
      headerStyle: { backgroundColor: 'black' },
      headerTitleStyle :{alignSelf:'center', color:'white', marginLeft: 95, textAlign: 'center'},
      //titleStyle: {alignSelf: 'center', textAlign: 'center', color:'white'}
  };

  render() {
    return (
      
      <ImageBackground style = {styles.container} source={require('../pattern.png')}>
        <View style = {{marginTop: 80}}></View>
        <TextInput 
        style = {styles.input}
        placeholderTextColor='white'
        placeholder='First Name'></TextInput>
        
        <TextInput 
        style = {styles.input}
        placeholderTextColor='white'
        placeholder='Last Name'></TextInput>

        <TextInput 
        style = {styles.input}
        placeholderTextColor='white'
        placeholder='Username'></TextInput>

        <TextInput 
        style = {styles.input}
        placeholderTextColor='white'
        placeholder='Password'></TextInput> 

        <View style = {{marginTop: 40}}></View>
        <TouchableOpacity style={styles.regbutton}
        onPress = { this.loginfunc }
        >
        <Text style={styles.buttontext}>Register</Text>
        </TouchableOpacity>
       

      </ImageBackground>   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // alignSelf: 'flex-start',
   },
  
  input: {
    backgroundColor: '#252525',
    padding: 10,
    color:'white',
    borderTopWidth: 2,
    //width: '92%',
    height: 60,
    //marginTop: 160,
    alignSelf: 'stretch',
    position: 'relative',
    elevation: 5,
    //borderRadius: 5,
    marginBottom: 10,
    
  },
  
  buttontext: {
    color: 'white',
  },
  regbutton: {
    alignSelf: 'center',
    //padding: 20,
   // marginTop: 300,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    height: 55,
    width: 150,
    elevation: 10,
    borderRadius: 8,
    //marginBottom: 10,
  },

});
