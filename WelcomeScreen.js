import * as React from 'react';

import { View,Text,StyleSheet,TouchableOpacity,TextInput,Image, KeyboardAvoidingView,Alert,ToastAndroid} from 'react-native';

import db from '../config'
import firebase from 'firebase'
export default class WelcomeScreen extends React.Component{
  constructor(){
      super()
      this.state = {
         emailID: '',
         password: '',
         }
  }
    
//  login = async(email,password)=>{
//      if(email&&password){
//          try {
//             const response = await firebase.auth().signInWithEmailAndPassword(email,password) 
//             if(response){
//                 this.props.navigation.navigate('Transaction')


//             }
//          } catch (error) {
//             switch(error.code){
//                 case 'auth/user-not-found': Alert.alert('User Doesnt Exists')
//                 break
//                 case 'auth/invalid-email': Alert.alert('Incorrect Email Or Password')
//             }
//          }
//      }else{
//          Alert.alert('Enter EmailId Or Password')
//      }
//   }
   
    render(){
       return(
           
            
               <KeyboardAvoidingView
                style = {{
                    alignItems:'center',
                    marginTop:20,
                }}>
                   <View>
                       
                       <Text
                         style = {styles.TitleText}>
                          Santa's Book App
                       </Text>
                   </View>
                   <View>
                       <TextInput 
                         style = {styles.loginBox}
                         placeholder = "abc@example.com"
                         keyboardType = 'email-address'
                         onChangeText = {(text)=>{
                             this.setState({
                              emailID:text
                            })
                        }}/>
                       <TextInput 
                         style = {styles.loginBox}
                         placeholder = "Enter Your Password"
                         secureTextEntry = {true}
                         onChangeText = {(text)=>{
                             this.setState({
                              password:text
                            })
                        }}/> 
                   </View>
                   <View>
                       <TouchableOpacity
                        onPress = {()=>{
                            this.login(this.state.emailID,this.state.password)
                        }}
                        style = {styles.loginButton}>
                           <Text>
                               Login
                           </Text>
                       </TouchableOpacity>
                       
                   </View>
               </KeyboardAvoidingView>
           
       )

   }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20,
       },
     searchBar:{
      flexDirection:'row',
      height:40,
      width:'auto',
      borderWidth:0.5,
      alignItems:'center',
      backgroundColor:"#add8e6",
     },
     loginBox:{
      height:40,
      width:200,
      marginTop:10,
      borderWidth:2,
      paddingLeft:10,
     },
     loginButton:{
      height:40,
      width:200,
      borderRadius:10,
      borderWidth:1,
      marginTop:10,
      alignItems:'center',
      justifyContent:"center",
      backgroundColor:"lime",
     },
     TitleText:{
       fontSize:30,
       textAlign:'center',
     }, 
 })