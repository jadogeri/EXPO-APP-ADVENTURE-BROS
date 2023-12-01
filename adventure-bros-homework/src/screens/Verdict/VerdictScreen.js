{/* imports */ }
import React, { useContext, useReducer } from 'react';
import { FlatList, View, Button, TouchableOpacity, Text, ImageBackground, StyleSheet, Image, Dimensions } from 'react-native';
import NavigationButton1 from '../../components/NavigationButton1';
import { Context as PlayerContext } from '../../context/PlayerContext';
import { Context as GameContext } from '../../context/GameContext';
import getRandomStage from '../../utils/getRandomStage';
import { useRoute } from "@react-navigation/native";
import BigIcon from '../../components/BigIcon';
import getBattleStage from '../../utils/getBattleStage';
import DeadBigIcon from '../../components/DeadBigIcon';
import TeamImage from '../../components/TeamImage';
import { playerReducer } from '../../reducers/playerReducer';


//stageName : stageName, stageKey : stageKey, team : team
const windowHeight = Dimensions.get('window').height;

const VerdictScreen = (props) => {
  const route = useRoute()
    //const team = props.navigation.getParam('team');
    const team = route.params?.team
    const stageKey = route.params?.stageKey
    const stageName = route.params?.stageName
    const challengeLevel = route.params?.challengeLevel
    const totalLevel = route.params?.totalLevel


    const {state, deleteAllPlayers,editRoundCount}  = useContext(GameContext); 
    const {state : playerState} = useContext(PlayerContext);  
    //const [teamState,roundDispatch] = useReducer(roundReducer,team);
    const [teamState,roundDispatch] = useReducer(playerReducer,team);

    return (
        <View>
            
            <ImageBackground source={getBattleStage(stageKey)} style={{height : windowHeight}}>
            <View style={{alignItems:'center', backgroundColor:'blue'}}>
            <Text style={{color:'yellow'}}>{stageName}</Text>
            <Text style={{color:'yellow'}}>ROUND {state[0].current_round}</Text>
            <Text style={{color:'yellow'}}>CHALLENGE LEVEL {challengeLevel}</Text>  
            <Text>{JSON.stringify(totalLevel)}</Text>    
            <Text></Text>       

            </View>
            <Text>{JSON.stringify(stageKey)}</Text>
                <Text>{JSON.stringify(stageName)}</Text>
                
                <Text>p1 {JSON.stringify(team)}</Text>
                <Text>{JSON.stringify(state)}</Text>
                <Text>p1 {JSON.stringify(teamState)}</Text>

                <View style={{flexDirection:'column'}}>
                

                <FlatList 
                data={team}
                keyExtractor={(key)=>{ return key.id}}
                renderItem={({item})=>{

                    item.currentHealth > 0?
                    <BigIcon heroName={item.name}/> :
                    <DeadBigIcon heroName={item.name} />

                    
                }}
            />
            </View>
            <Text>total level {totalLevel} , challenge level {challengeLevel}</Text>
            {totalLevel >= challengeLevel?<Text> You Won</Text>:<Text>You Lost</Text>}
            {totalLevel <= challengeLevel?
              <NavigationButton1 
              name={`REPLAY ROUND ${state[0].current_round}`}
              navigate={()=>{props.navigation.navigate('Roster')}}
            />:
            state[0].max_rounds === state[0].current_round?
            <NavigationButton1 
              name= {`YOU WON THE GAME`}
              navigate={()=>{deleteAllPlayers();props.navigation.navigate('Mode')}}
            />:
            <NavigationButton1 
              name= {`GO TO ROUND ${state[0].current_round + 1}`}
              navigate={()=>{editRoundCount(state[0].current_round + 1); props.navigation.navigate('Roster')}}
            />
            }

            </ImageBackground>
        </View>
    )
}
export default VerdictScreen;

