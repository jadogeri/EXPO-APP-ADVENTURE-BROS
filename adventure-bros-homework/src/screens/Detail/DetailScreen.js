{/* imports */ }
import React, {useContext, useReducer, useState} from 'react';
import { View, Button, TouchableOpacity, Text, ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import Detail from '../../components/Detail';
import styles from './DetailStyle'
import {Context as PlayerContext} from '../../context/PlayerContext'
import { Context as GameContext } from '../../context/GameContext';
import PlayerDetailCard from '../../components/PlayerDetailCard';
import { useRoute } from '@react-navigation/native';
import GuageButtons from '../../components/GuageButtons';
import statsReducer from '../../reducers/statsReducer';
import { hasGold } from '../../utils/hasGold';
import LevelButton from '../../components/LevelButton';



{/* main component: CharacterScreen */ }
const DetailScreen = (props, { navigation }) => {

    const route = useRoute('id')
    const playerID = route.params?.id

    const {state, editPlayer} = useContext(PlayerContext)
    const  {state : gameState, editTotalGold} = useContext(GameContext)
    // const [globalGold, setGlobalGold] = (gameState[0].total_gold)
    //const playerID = props.navigation.getParam('id')
    const [goldCost, setGoldCost] = useState(10)

    console.log('playerID',playerID)


    const player = state.find((character) => {
        return playerID === character.id
    })
    console.log('player ')

    JSON.stringify(player)
   
    
    const [statsState,dispatch] = useReducer(statsReducer,
        {total_gold: gameState[0].total_gold ,
            player_gold: player.gold,
            player_level:player.level,
            id : playerID,
            player_power: player.power,
            player_currentHealth:player.currentHealth
            ,player_maxHealth:player.maxHealth})

    return (
        <View style={styles.container}>
            <PlayerDetailCard name={player.name} currentHealth={statsState.player_currentHealth}
            maxHealth={statsState.player_maxHealth} power={statsState.player_power} player_gold={statsState.player_gold} total_gold={statsState.total_gold}
            level={statsState.player_level} max_rounds={gameState[0].max_rounds} current_round={gameState[0].current_round}
            />

          {/* <Detail /> */}
           <View>
                <TouchableOpacity style={styles.touchContainer}>
                    <View style={styles.t_container}>                     

                        <Text style={styles.text1}>USE TOTAL BAG💰 </Text>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchContainer}>
                    <View style={styles.t_container}>                     

                        <Text style={styles.text1}>MY BAG💰 </Text>
                        <Text>{statsState.player_gold}</Text>

                    </View>
                </TouchableOpacity>
                <GuageButtons 
                increase={() =>{dispatch({type : "bag",amount:10});}}
                decrease={() =>{dispatch({type : "bag",amount:-1*10});}}
                />
                <LevelButton title='Level Up!'
            goldAmount={statsState.player_level * 10}

            handler={hasGold(statsState.player_gold, statsState.player_level * 10) ? () => {

                dispatch({ type: "gold", amount: goldCost })

                //  editHero(newHero.id, newHero.name, newHero.level, newHero.power, newHero.maxHealth, newHero.currentHealth, newHero.gold)

                setGoldCost(goldCost + 10)
            } : () => { console.log(player.name + "is out of gold") }} />

                <TouchableOpacity 
                onPress={() => { 
                    statsState.id,statsState.player_gold,
                    //              statsState.player_level,statsState.player_power,
                    //                statsState.player_currentHealth,statsState.player_maxHealth
                    editPlayer(player.id,player.name,statsState.player_level,statsState.player_power,
                              statsState.player_maxHealth,statsState.player_currentHealth,statsState.player_gold,
                              player.isActive
                              );

                
            editTotalGold(statsState.total_gold);
                    props.navigation.navigate("Roster") }}>
                    <View style={styles.t1_container}>
                        <Text style={styles.text2}>ROASTER</Text>

                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

{ /* component to be displayed on screen */ }
export default DetailScreen;

