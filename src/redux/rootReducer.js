import { combineReducers } from "redux";
import detailsReducer from "./reducers/detailReducer";
import templateReducer from "./reducers/templateReducers";
import userReducer from "./reducers/userReducer";



let rootReducer = combineReducers({
    template :templateReducer,
    user : userReducer,
    details :detailsReducer,
})

export default rootReducer;