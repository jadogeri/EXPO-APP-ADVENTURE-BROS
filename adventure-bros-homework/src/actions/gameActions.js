
const updateGameStatus = (dispatch) => {
    return  (total_gold, mode, game_status, current_round) => {
        dispatch({ type: 'game_start', payload: {mode : mode, total_gold : total_gold ,game_status :game_status, current_round : current_round} });
    
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

const editRoundVerdict = (dispatch) => {
    return  (rounds) => {
        dispatch({ type: 'edit_round_verdict', payload :{}});    
    }
}
export default [updateGameStatus,updateGameMode,editTotalGold,editRoundVerdict]