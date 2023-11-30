{/* imports */ }
import React, {useContext} from 'react';
import { View, Button, TouchableOpacity, Text, ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import Detail from '../../components/Detail';
import styles from './DetailStyle'
import {Context as PlayerContext} from '../../context/PlayerContext'
import { Context as GameContext } from '../../context/GameContext';
import PlayerDetailCard from '../../components/PlayerDetailCard';
import { useRoute } from '@react-navigation/native';



{/* main component: CharacterScreen */ }
const DetailScreen = (props, { navigation }) => {

    const route = useRoute('id')
    const playerID = route.params?.id

    const {state, getPlayer} = useContext(PlayerContext)
    const  {state : gameState} = useContext(GameContext)
    const stateObject = gameState[0]
    // const [globalGold, setGlobalGold] = (gameState[0].total_gold)
    //const playerID = props.navigation.getParam('id')

    console.log(playerID)

    const player = state.find((character) => {
        return playerID === character.id
    })
    
    console.log(JSON.stringify(player))

    return (
        <View style={styles.container}>
            <Text>TOTAL STATE {JSON.stringify(gameState)}</Text>
               <Text style={{color:'green',size:20}}>{JSON.stringify(gameState)}</Text>
            <PlayerDetailCard name={player.name} currentHeal={player.currentHealth}
            maxHealth={player.maxHealth} power={player.power} gold={player.gold}
            level={player.level}
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

                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touchContainer} onPress={() => { props.navigation.navigate("Roster") }}>
                    <View style={styles.t1_container}>
                        <Text style={styles.text2}>ROASTER</Text>
                        <Text>TOTAL STATE {JSON.stringify(gameState)}</Text>
                        <Text>TOTAL STATE OBJECT {JSON.stringify(stateObject)}</Text>


                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

{ /* component to be displayed on screen */ }
export default DetailScreen;
