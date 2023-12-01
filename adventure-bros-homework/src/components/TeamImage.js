import { Text, View, FlatList } from 'react-native'
import React from 'react'
import BigIcon from './BigIcon'
import DeadBigIcon from './DeadBigIcon'

export const TeamImage = (props) => {

    const getImage = (character, challengeLevel,totalLevel )=>{


        if( character.currentHealth +  Math.floor(character.power / 5) - (challengeLevel * 10 ) < 0 ){
            // return <DeadBigIcon heroName={character.name}/>
            <Text style={{ color:'red',fontSize:40}}>{JSON.stringify(character)}</Text>

        }else{
            // return <BigIcon heroName={character.name}/> 
            <Text style={{ color:'red',fontSize:40}}>{JSON.stringify(character)}</Text>
        }
    }
 
    return (
        <View style={{flexDirection:'column'}}>
        <FlatList 
            data={props.teamState}
            keyExtractor={(key)=>{ return key.id}}
            renderItem={({item})=>{
                 return <> getImage(item,props.challengeLevel,props.totalLevel)
                 <Text style={{fontSize:40,color:'green'}}>INSIDE OF TEAM IMAGE</Text>
                  </>

            //  {
            //   totalLevel >= challengeLevel ?
            //    <BigIcon heroName={item.name}/> :
            //    teamState.currentHealth +  Math.floor(teamState.power / 5) - (challengeLevel * 10 ) < 0 ?
            //    <DeadBigIcon heroName={item.name} /> :
            //    <BigIcon heroName={item.name} />
               
            //   }
             }              
                
            }
        />

            {/* <FlatList 
            data={team}
            keyExtractor={(key)=>{ return key.id}}
            renderItem={({item})=>{

                return  <BigIcon heroName={item.name}/>               
                
            }}
        /> */}
        </View>
    )

}

export default TeamImage