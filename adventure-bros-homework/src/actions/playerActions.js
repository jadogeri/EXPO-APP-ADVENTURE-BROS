const getPlayer = (dispatch) => {
    return (id) => {

        dispatch({
            type: 'get_player',
            payload: { id : id }
        })

    }
}

const addPlayer = (dispatch) => {
    return (name, level, power, maxHealth, currentHealth, gold, callback) => {
        dispatch({
            type: 'add_Player',
            payload: { name : name, level : level, power : power, maxHealth : maxHealth,
                       currentHealth : currentHealth, gold : gold, callback }
        })

        if (callback) {
            callback();
        }
    }
}


const deletePlayer = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_Player', payload: id })
    }
}

const deleteAllPlayers = (dispatch) => {
    return () => {
        dispatch({ type: 'delete_All_Players'})
    }
}

const deleteDeadPlayers = (dispatch) => {
    return () => {
        dispatch({ type: 'delete_Dead_Players'})
    }
}

const updateIsActivePlayer = (dispatch) => {
    return (id,isActive, callback) => {
        dispatch({
            type: 'update_isActive_Player', payload: {
                isActive: isActive, id : id
            }
        })
        if (callback)
            callback();
    }
}

const editPlayer = (dispatch) => {
    return (id, name, level, power, maxHealth, currentHealth, gold,isActive, callback) => {
        dispatch({
            type: 'edit_Player', payload: {
                id: id, name: name, level: level,
                power: power, maxHealth: maxHealth,
                currentHealth: currentHealth, gold: gold,
                isActive:isActive

            }
        })
        if (callback)
            callback();
    }
}

const editPlayerRoundWin = (dispatch) => {
    return (id, challengeLevel, callback) => {
        dispatch({
            type: 'round_win', payload: {
                id: id, challengeLevel : challengeLevel
            }
        })
        if (callback)
            callback();
    }
}

const editPlayerRoundLose = (dispatch) => {
    return (id, challengeLevel, callback) => {
        dispatch({
            type: 'round_lose', payload: {
                id: id, challengeLevel : challengeLevel
            }
        })
        if (callback)
            callback();
    }
}




export default [deleteDeadPlayers,deleteAllPlayers,addPlayer, editPlayer, deletePlayer, getPlayer, updateIsActivePlayer, editPlayerRoundWin,editPlayerRoundLose]