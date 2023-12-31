{/* imports */ }
import React, { useContext } from 'react';
import { FlatList, View, Button, TouchableOpacity, Text, ImageBackground, StyleSheet, Image, Dimensions } from 'react-native';
import NavigationButton1 from '../../components/NavigationButton1';
import styles from "./AdventureStyle";
import { Context as PlayerContext } from '../../context/PlayerContext';
import { Context as GameContext } from '../../context/GameContext';
import getRandomStage from '../../utils/getRandomStage';
import { useRoute } from "@react-navigation/native";
import BigIcon from '../../components/BigIcon';
import getBattleStage from '../../utils/getBattleStage';
import getRandomLevel from '../../utils/getRandomLevel'

const windowHeight = Dimensions.get('window').height;

let challengeLevel = 0;
let stageName = ''
let stageKey=''
let stageList = [
    "DARKNESS",
    "DESERT",
    "FOREST",
    "LAB",
    "NEWYORK",
    "SNOW",
    "VOLCANO"  
  ];
  
  const getRandomStageKey = (arr) => {
    let name
        
  try{
    if (arr.length > 0) {
        const random = Math.floor(Math.random() * arr.length);
        console.log('random',random);
        name =arr[random]
        console.log('line 75 name',name);
       arr.splice(random, 1)[0];
        
    }
  }catch(e){console.log('line 78 roster',e);}
    return name;
  };
  
  
const AdventureScreen = (props) => {
  const route = useRoute()
    //const team = props.navigation.getParam('team');
    const team = route.params?.team
    const {state}  = useContext(GameContext);   
    const {state : editPlayerRoundWin, editPlayerRoundLose} = useContext(PlayerContext);
   

    stageKey = getRandomStageKey(stageList);
    stageName = getRandomStage(stageKey)

    let totalLevel = team.reduce((accum,item) => accum + item.level, 0)

    console.log(JSON.stringify(totalLevel))
    console.log(state[0].mode)
    console.log( challengeLevel = getRandomLevel(state[0].mode))
    console.log('challengeLevel', challengeLevel )


    return (
        <View>
            
            <ImageBackground source={getBattleStage(stageKey)} style={{height : windowHeight}}>
            <View style={{alignItems:'center', backgroundColor:'blue'}}>
            <Text style={{color:'yellow'}}>{stageName}</Text>
            <Text style={{color:'yellow'}}>ROUND {state[0].current_round}</Text>
            <Text style={{color:'yellow'}}>CHALLENGE LEVEL ?</Text>   
            <Text>{JSON.stringify(team)}</Text>  
            <Text>{JSON.stringify(totalLevel)}</Text>  



            </View>
            <Text>{JSON.stringify(stageKey)}</Text>
                <Text>{JSON.stringify(stageName)}</Text>
                
                <Text>p1 {JSON.stringify(team)}</Text>
                <Text>{JSON.stringify(state)}</Text>
                <View style={{flexDirection:'column'}}>
            <FlatList 
                data={team}
                keyExtractor={(key)=>{ return key.id}}
                renderItem={({item})=>{

                    return  <BigIcon heroName={item.name}/>               
                    
                }}
            />
            </View>
            <NavigationButton1 
              name='GO TO BATTLE'
              navigate={()=>{ totalLevel - challengeLevel > 0 ?
                editPlayerRoundWin(challengeLevel) :
                editPlayerRoundLose(challengeLevel) ;
                props.navigation.navigate('Verdict',{stageName : stageName, stageKey : stageKey, team : team,
                  challengeLevel:challengeLevel,totalLevel : totalLevel})
              }}
            />

            </ImageBackground>
        </View>
    )
}
export default AdventureScreen;

