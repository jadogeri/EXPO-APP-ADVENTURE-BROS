{/* imports */ }

import HomeScreen from './src/screens/Home/HomeScreen';
import RosterScreen from './src/screens/Roster/RosterScreen';
import DetailScreen from './src/screens/Detail/DetailScreen';
import AdventureScreen from './src/screens/Adventure/AdventureScreen';
import RuleScreen from './src/screens/Rule/RuleScreen';
import ModeScreen from './src/screens/Mode/ModeScreen';
import { Provider as PlayerProvider } from "./src/context/PlayerContext";
import {Provider as GameProvider } from "./src/context/GameContext";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import VerdictScreen from './src/screens/Verdict/VerdictScreen';

{/* main function : navigator */ }
// const navigator = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Roster: RosterScreen,
//     Adventure :AdventureScreen,
//     Rule : RuleScreen,
//     Detail : DetailScreen

//   },
//   {
//     initialRouteName: "Roster",
//     defaultNavigationOptions: {
//       title: "Home",
//     }
//   }
// );
//const App = createAppContainer(navigator);

// export default () => {

//   return <GameProvider>
//     <PlayerProvider>
//     <App2 />
//   </PlayerProvider>
//   </GameProvider>

// };


//     Home: HomeScreen,
//     Roster: RosterScreen,
//     Adventure :AdventureScreen,
//     Rule : RuleScreen,
//     Detail : DetailScreen

const Stack = createStackNavigator();
const StackContainer = () => {
  return (
 
    <Stack.Navigator headerMode='none' initialRouteName='Roster' // screenOptions={screenOptionStyle} 
    >
       <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Roster" component={RosterScreen} />
      <Stack.Screen name="Adventure" component={AdventureScreen} />
      <Stack.Screen name="Rule" component={RuleScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Verdict" component={VerdictScreen} />
      <Stack.Screen name="Mode" component={ModeScreen} />

    </Stack.Navigator>
  );
};

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }


const App = () =>{
  return (
    
    <GameProvider>
    <PlayerProvider>
    <NavigationContainer >
      <StackContainer />

    </NavigationContainer>
    </PlayerProvider>
    </GameProvider>
  )
}

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });





