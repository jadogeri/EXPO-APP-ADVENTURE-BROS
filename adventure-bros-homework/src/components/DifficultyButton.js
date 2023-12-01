import React from "react";
import {View , Text , StyleSheet, Image,TouchableOpacity } from "react-native";

const  DifficultyButton= (props)=>  {
  
    return  <View style={{flex:2,flexDirection:"row", alignItems:'center'}}>
            <TouchableOpacity onPress={props.modeHandler}>                 

                <Image style={{width:150,height:150}} source={props.imageSource} />
                               
            </TouchableOpacity> 

            <Text style={{backgroundColor:'black',color: 'green'}}> {props.points} points</Text>


            </View>  
}


export default DifficultyButton


const style = StyleSheet.create({

    text: {
        fontSize: 30,
        fontStyle:"italic",
        fontWeight :"bold",
        textAlign: 'center',
        textShadowColor : 'white'
        
    }
});

