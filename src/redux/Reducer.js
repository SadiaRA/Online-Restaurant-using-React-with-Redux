import Dishes from '../data/Dishes';
import Comments from '../data/Comments';
import { combineReducers } from 'redux';
import * as actionTypes from './actionTypes'

const dishReducer = (dishState = Dishes, action) => {
    return dishState;
}

const commentReducer = (commentState = Comments, action) => {
    switch(action.type){
        case actionTypes.ADD_COMMENTg: 
            let comment = action.payload;
            comment.id = Comments.length;
            comment.date = new Date().toDateString();
            if (comment.rating>3){
    
            return commentState.concat(comment)
           
    
    
            }
            else {
                return commentState
            }
        
        default:
            return commentState;

    } 
}

export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer
});

