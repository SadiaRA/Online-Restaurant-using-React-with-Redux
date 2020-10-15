import * as actionTypes from './actionTypes';

import axios from 'axios'

export const addComment = (dishId, rating, author, comment) => dispatch => {
    const newComment = {
        dishId: dishId,
        author: author,
        rating: rating,
        comment: comment
    }
    newComment.date = new Date().toISOString();

    axios.post("http://localhost:3001/" + 'comments', newComment)
        .then(response => response.data)
        .then(comment => dispatch(commentConcat(comment)))
}
export const commentConcat = (comment) => ({
    type: actionTypes.ADD_COMMENT,
    payload: comment
})

export const commentLoading = () => ({
    type: actionTypes.COMMENT_LOADING
})

export const loadComments = comments => ({
    type: actionTypes.LOAD_COMMENTS,
    payload: comments
})
export const fetchComments = () => dispatch => {
    dispatch(commentLoading());

    axios.get("http://localhost:3001/comments")
        .then(response => response.data)
        .then(comments => dispatch(loadComments(comments)))
}
export const loadDishes = dishes => ({
    type: actionTypes.LOAD_DISHES,
    payload: dishes
})

export const dishesLoading = () => ({
    type: actionTypes.DISHES_LOADING
})

export const fetchDishes = () => dispatch => {
    dispatch(dishesLoading());

    axios.get("http://localhost:3001/dishes")
    .then(response => response.data)
        .then(dishes => dispatch(loadDishes(dishes)))
}