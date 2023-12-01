import React from "react";
import { Text, StyleSheet,View,Button,TouchableOpacity,Image } from "react-native";

const GuageButtons = (props) => {
// printing out props to the command line
  console.log(props);

  return <View  style ={styles.container}>                            
                            <TouchableOpacity onPress={props.decrease} style={styles.button} >
                                <Image style ={styles.imageStyle} source={require('../../assets/minusSign.png')}/>

                            </TouchableOpacity>
                            


                                            
                            <TouchableOpacity onPress={props.increase} style={styles.button} >
                                <Image style ={styles.imageStyle} source={require('../../assets/plusSign.png')}/>

                            </TouchableOpacity>

                                   
          </View>
  
};



const styles = StyleSheet.create({
  text: {
    fontSize: 70,
    fontStyle:"italic",
    fontWeight :"bold",
    textAlign: 'center',
    textShadowColor : 'green',
    textShadowRadius:20
   

  } , imageStyle:{

    height:40,
    width:40,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  textStyle:{

    fontSize: 20,
    fontStyle:"italic",
    fontWeight :"bold",
    textAlign: 'center',
    textShadowColor : 'white',
    textShadowRadius:20
   
  },
  container:{
    alignItems: 'center',
    flexDirection:'row',
    justifyContent: 'center'
  },
  button:{
    width:150,
    height:75,
    borderRadius:75,
    borderWidth:2,
    borderColor:'black',
    backgroundColor:'blue',
    margin:10
  }



});

export default GuageButtons;