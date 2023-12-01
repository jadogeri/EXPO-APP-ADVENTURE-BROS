import createDataContext from "./createDataContext";
import {playerReducer} from "../reducers/playerReducer";
import playerActions from "../actions/playerActions";


const [deleteDeadPlayers,deleteAllPlayers,addPlayer,editPlayer,deletePlayer,getPlayer,updateIsActivePlayer
      ,editPlayerRoundWin,editPlayerRoundLose] = playerActions

export const { Context, Provider } = createDataContext(playerReducer,
    {deleteDeadPlayers: deleteDeadPlayers, addPlayer: addPlayer, deletePlayer: deletePlayer, editPlayer: editPlayer, getPlayer: getPlayer,
     updateIsActivePlayer:updateIsActivePlayer,deleteAllPlayers : deleteAllPlayers ,editPlayerRoundLose : editPlayerRoundLose,
    editPlayerRoundWin : editPlayerRoundWin },
    [] 
);

