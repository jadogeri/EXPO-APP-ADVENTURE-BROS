{/* imports */ }
import React, { useContext } from 'react';
import { FlatList, View, Button, TouchableOpacity, Text, ImageBackground, StyleSheet, Image, Dimensions } from 'react-native';
import { useRoute } from "@react-navigation/native";


const VerdictScreen = (props) => {
 
    const route = useRoute()
    //const team = props.navigation.getParam('team');
    //  {stageName : stageName, stageKey : stageKey, team : team})}}

    const team = route.params?.team
    const stageKey = route.params?.stageKey
    const stageName = route.params?.stageName
    return (
        <View>
         
           <Text>Verdict Screen</Text>
           <Text>{JSON.stringify(team)}</Text>
           <Text>{JSON.stringify(stageKey)}</Text>
           <Text>{JSON.stringify(stageName)}</Text>

        </View>
    )
}
export default VerdictScreen;

