import React from 'react';
import { StyleSheet,Text, View, ImageBackground, TextInput, Image, TouchableOpacity, } from 'react-native';

export default class Main extends React.Component {
  constructor() {
    super()
  }
  signupfunc = () =>
  {
     this.props.navigation.navigate('Second');
     
  }

  static navigationOptions = {
      title: 'Login',
      headerTintColor: 'white',
      headerStyle: { backgroundColor: 'black' },
      headerTitleStyle :{alignSelf:'center', color:'white', marginLeft: 155, textAlign: 'center'},
      //titleStyle: {alignSelf: 'center', textAlign: 'center', color:'white'}
  };

  validate(text, type)
  {
    alph=/^[a-zA-z0-9]+$/
    if(type=='username')
    {
      if(alph.test(text))
      { }
      else
      {
        alert("Username is rquired");
      }
    }

    if(type=='password')
    {
      if(alph.test(text))
      { }
      else
      {
        alert("Password is rquired");
      }
    }
  }
  render() {
    return (
      
      <ImageBackground style = {styles.container} source={require('../pattern.png')}>
        <Image style = {styles.logo} source={require('../Transparent.png')}></Image>
        <TextInput 
        style = {styles.userinput}
        placeholderTextColor='white'
        placeholder='Username'
        onChangeText={(text)=> this.validate(text, 'username')}
        ></TextInput>
        
        <TextInput 
        style = {styles.passinput}
        placeholderTextColor='white'
        placeholder='Password'
        onChangeText={(text)=> this.validate(text, 'password')}
        ></TextInput>
         <TouchableOpacity style={styles.logbutton}
        onPress = { this.signupfunc }>
        <Text style={styles.buttontext}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sigbutton}
        onPress = { this.signupfunc }
       >
        <Text style={styles.buttontext}>Sign Up</Text>
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
   },
  
  userinput: {
    alignSelf: 'center',
    backgroundColor: '#252525',
    padding: 10,
    color:'white',
    borderTopWidth: 2,
    width: '92%',
    marginTop: 160,
    position: 'absolute',
    elevation: 5,
    borderRadius: 5,
  },
  passinput: {
    alignSelf: 'center',
    backgroundColor: '#252525',
    padding: 10,
    color:'white',
    borderTopWidth: 2,
    width: '92%',
    marginBottom: 10,
    marginTop: 220,
    position: 'absolute',
    elevation: 5,
    borderRadius: 5,
  },
  logo: {
    alignSelf: 'center',
    marginTop: 50,
    position: 'absolute',
    width: 100,
    height: 100,
    marginBottom: 30,
    //opacity: 50,
    // shadowOpacity: 20,
    // shadowColor: 'white',
  },
  buttontext: {
    color: 'white',
  },
  logbutton: {
    alignSelf: 'center',
    //padding: 20,
    marginTop: 300,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    height: 55,
    width: 150,
    elevation: 10,
    borderRadius: 8,
    //marginBottom: 10,
  },
  sigbutton: {
    alignSelf: 'center',
    //padding: 20,
    marginTop: 365,
    position: 'absolute',
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
