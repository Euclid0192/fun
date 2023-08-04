import { combineReducers } from "redux";


export const songReducer = (state : any[] = [], action: any) => {
    let newList = [...state]
    switch(action.type){
        case 'ADD SONG':
            if (action.payload)
                newList.push(action.payload);
            return newList;
        case 'REMOVE SONG':
            if (action.payload)
                newList = newList.filter((item: any) => item !== action.payload)
            return newList 
        default:
            return state   
    }
}

export const albumReducer = (state : any[] = [], action: any) => {
    let newList = [...state]
    switch(action.type){
        case 'ADD ALBUM':
            if (action.payload)
                newList.push(action.payload);
            return newList;
        case 'REMOVE ALBUM':
            if (action.payload)
                newList = newList.filter((item: any) => item !== action.payload)
            return newList 
        default:
            return state   
    }
}

const rootReducer = combineReducers({song: songReducer, album: albumReducer})
export default rootReducer

