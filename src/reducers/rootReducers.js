import { combineReducers } from "redux";
import { calendarReducer } from "./calendarReducer";
import { uiReducer } from "./uiReducers";


export const rootReducers = combineReducers({
    ui: uiReducer,
    calendar: calendarReducer
    //TODO AuthReducer,
    //CalendarReducer
})