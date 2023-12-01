const statsReducer = (statsState,action ) => {

    switch(action.type){

        case "bag":    
            if(statsState.total_gold - action.amount < 0){
                return statsState
            }else{

                return (statsState.player_gold + action.amount < 0 ) ?
                 statsState :   {...statsState,player_gold : statsState.player_gold + action.amount,total_gold:statsState.total_gold - action.amount}        
            }

            /**
             *     {total_gold: gameState[0].total_gold ,player_gold: player.gold,player_level:player.level,
            player_power: player.power,player_currentHealth:player.currentHealth,player_maxHealth:player.maxHealth})

             */
        case"gold":
        return {
                ...statsState,
                player_currentHealth: statsState.player_currentHealth + 5,
                player_maxHealth: statsState.player_maxHealth + 5,
                player_level: statsState.player_level + 1,
                player_power: statsState.player_power + 5,
                player_gold: statsState.player_gold - action.amount
                
        }
       
        default:
            console.log('line 97',statsState);
            return statsState

    //     case "health":  
            
    //         if(state.totalPoints - action.amount < 0){
    //             return state

    //         }else{
    //             return (state.health + action.amount > 100 || state.health + action.amount < 0 ) ?
    //                 state : {...state,health : state.health + action.amount,totalPoints:state.totalPoints - action.amount}    

    //         }            

    // case "strength":  
    
    //         if(state.totalPoints - action.amount < 0){

    //             return state;
    //         }else{
    //             return (state.strength + action.amount > 100 ||state.strength + action.amount < 0 )?
    //                 state : {...state,strength : state.strength + action.amount,totalPoints:state.totalPoints - action.amount}        

    //         }
        
    }
}

export default statsReducer;