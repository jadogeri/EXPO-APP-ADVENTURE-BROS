
export const gameReducer = (state, action) => {
    switch (action.type) {
        case 'game_status':
            return action.payload;        
      
        case 'game_start':
            /**  [{game_status :"", mode:"", current_round : 0,total_gold:0, max_rounds :6, completed_rounds: 0,
 is_current_round : false, is_current_round_completed : false, stageKey : ''}] */
            state[0].mode = action.payload.mode
            state[0].total_gold = action.payload.total_gold
            state[0].game_status = action.payload.game_status
            state[0].current_round = action.payload.current_round
            return state

        case 'game_over':  
            state[0].game_status = 'GAME_OVER'

        case 'game_restart':

            state[0].game_staus = 'GAME_RESTART'
            state[0].mode = ''
            state[0].completed_rounds = 0
            state[0].is_current_round = false
            state[0].is_current_round_completed = false
            state[0].stageKey = ''  
            state[0].total_gold = 0

            return state

        case 'round_won':

            state[0].game_staus = 'ROUND_WON'
            state[0].completed_rounds = state[0].completed_rounds + 1;
            state[0].is_current_round = false
            state[0].is_current_round_completed = true
            state[0].stageKey = '' 

            return state
        
        case 'round_lost':

        state[0].game_staus = 'ROUND_LOST'
        state[0].is_current_round = false
        state[0].is_current_round_completed = false

        case 'edit_total_gold':
        state[0].total_gold = action.payload.total_gold        

        return state
        default:
            return state;
    }
}

/**
 * const updateGameStatus = (dispatch) => {
    return  (game_status) => {
        dispatch({ type: 'update_game_status', payload: {game_status : game_status} });
    
    }
}

const updateGameMode = (dispatch) => {
    return  (game_status) => {
        dispatch({ type: 'update_game_mode', payload: {game_mode : game_mode} });
    
    }
}

const editTotalGold = (dispatch) => {
    return  (total_gold) => {
        dispatch({ type: 'edit_total_gold', payload: {total_gold : total_gold} });    
    }
}

const editRounds = (dispatch) => {
    return  (rounds) => {
        dispatch({ type: 'edit_total_rounds', payload: {total_rounds : rounds} });    
    }
}
 */