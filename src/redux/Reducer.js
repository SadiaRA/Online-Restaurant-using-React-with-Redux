import Dishes from '../data/Dishes';
import Comments from '../data/Comments'


const initialState = {
    dishes: Dishes,
    comments: Comments,
}

export const Reducer = (state = initialState, action) => {
    if (action.type === 'ADD_COMMENT') {
        let comment = action.payload;
        comment.id = state.comments.length;
        comment.date = new Date().toDateString();
        if (comment.rating>3){

        return {
            ...state,
            comments: state.comments.concat(comment)
        }


        }
        else {
            return state;
        }
    
    }
    return state;
}
