import React, {useContext, useState} from 'react';
import {View, StyleSheet, Button,Text} from 'react-native';
import DifficultyButton from '../../components/DifficultyButton';
import { Context as GameContext} from '../../context/GameContext';

const ModeScreen = (props) => {

    const EASY = 300;
    const MEDIUM = 200;
    const HARD = 100;

    const gameLevel = {
        easy: EASY,
        medium: MEDIUM,
        hard: HARD
    }
    
    const {updateGameStatus} = useContext(GameContext);
    const [difficulty, setDifficulty] = useState('')
    const [gold, setGold] = useState(0);
    return <View style={{ backgroundColor: 'yellow', flex: 1 }}>

        <View style={{ backgroundColor: 'black', flex: 1, alignItems: 'center' }} >

            <Text style={style.text}> GAME DIFFICULTY</Text>

            <DifficultyButton points={gameLevel.easy} imageSource={require('../../../assets/icons/easy.png')} modeHandler={() => { setGold(EASY); setDifficulty( 'EASY') }} />
            <DifficultyButton points={gameLevel.medium} imageSource={require('../../../assets/icons/medium.png')} modeHandler={() => {setGold(MEDIUM); setDifficulty('MEDIUM') }} />
            <DifficultyButton points={gameLevel.hard} imageSource={require('../../../assets/icons/hard.png')} modeHandler={() => {setGold(HARD); setDifficulty('HARD') }} />
            <Text style={{ backgroundColor: 'black' }}> {difficulty} </Text>


            <Button title={gold === 0 ? "CHOOSE DIFFICULTY" : "ENTER GAME"}
                onPress={gold > 0 ? () => {updateGameStatus(gold,difficulty,'GAME_STARTED'); props.navigation.navigate("Roster", difficulty) } : () => { }} />

        </View>
        <View style={{ flex: 0.10, backgroundColor: 'black' }}>

        </View>


    </View>
}


export default ModeScreen;


const style = StyleSheet.create({

    text: {


        fontSize: 70,
        fontStyle: "italic",
        fontWeight: "bold",
        textAlign: 'center',
        textShadowColor: 'green',
        textShadowRadius: 20,
    }
});

const image = StyleSheet.create({

    imageStyle: {

        fontStyle: 'italic'

    }

});
