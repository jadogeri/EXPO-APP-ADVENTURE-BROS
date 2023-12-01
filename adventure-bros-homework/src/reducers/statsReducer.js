 const statsReducer = (statsState,action ) => {

    switch(action.type){

        case "bag":    
            if(statsState.total_gold - action.amount < 0){
                return statsState
            }else{

                return (statsState.player_gold + action.amount < 0 ) ?
                 statsState :   {...statsState,player_gold : statsState.player_gold + action.amount,total_gold:statsState.total_gold - action.amount}        
            }

  
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
        
    }
}

export default statsReducer 