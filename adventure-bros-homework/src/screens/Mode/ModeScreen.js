import React, {useState} from 'react';
import {View, StyleSheet, Button,Text} from 'react-native';
import DifficultyButton from '../../components/DifficultyButton';

const ModeScreen = () => {

    const EASY = 300;
    const MEDIUM = 200;
    const HARD = 100;

    const gameLevel = {
        easy: EASY,
        medium: MEDIUM,
        hard: HARD
    }

    const [difficulty, setDifficulty] = useState({ value: 0 })
    return <View style={{ backgroundColor: 'yellow', flex: 1 }}>

        <View style={{ backgroundColor: 'black', flex: 1, alignItems: 'center' }} >

            <Text style={style.text}> GAME DIFFICULTY</Text>

            <DifficultyButton points={gameLevel.easy} imageSource={require('../../../assets/icons/easy.png')} modeHandler={() => { setDifficulty({ value: gameLevel.easy }) }} />
            <DifficultyButton points={gameLevel.medium} imageSource={require('../../../assets/icons/medium.png')} modeHandler={() => { setDifficulty({ value: gameLevel.medium }) }} />
            <DifficultyButton points={gameLevel.hard} imageSource={require('../../../assets/icons/hard.png')} modeHandler={() => { setDifficulty({ value: gameLevel.hard }) }} />
            <Text style={{ backgroundColor: 'black' }}> {difficulty.value} </Text>


            <Button title={difficulty.value === 0 ? "CHOOSE DIFFICULTY" : "ENTER GAME"}
                onPress={difficulty.value > 0 ? () => { props.navigation.navigate("Roster", difficulty) } : () => { }} />


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
