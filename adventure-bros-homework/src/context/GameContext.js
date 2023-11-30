import createDataContext from "./createDataContext";
import { gameReducer } from "../reducers/gameReducer";
import gameActions from "../actions/gameActions";

const [updateGameStatus,updateGameMode,editTotalGold,editVerdictRound] = gameActions

export const { Context, Provider } = createDataContext(gameReducer,
    { updateGameStatus : updateGameStatus, updateGameMode : updateGameMode,
        editTotalGold : editTotalGold, editVerdictRound: editVerdictRound},
    [{game_status :"", mode:"", current_round : 0,total_gold:0, max_rounds :6, completed_rounds: 0,
     is_current_round : false, is_current_round_completed : false, stageKey : ''}]
);