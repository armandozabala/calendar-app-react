import moment from "moment";
import { types } from "../types/types";


const initialState = {
    events: [
        {
        title: 'Cumpleaños',
        start: moment().toDate(),
        end: moment().add(2, 'hours').toDate(),
        bgcolor: '#fafafa',
        notes: 'Notas',
        user: {
        _id: '12',
        name: 'Armando'
        }
    }
    ],
    activeEvent: null
}


export const calendarReducer = ( state = initialState, action) => {

    switch (action.type) {

        case types.eventAddNew:
            return{}

        case types.eventSetActive:
            return {
                ...state,
                activeEvent: action.payload
            }
        default:
            return state;
    }

}