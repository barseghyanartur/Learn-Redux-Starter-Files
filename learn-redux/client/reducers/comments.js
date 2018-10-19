// reducer takes in two things
// 1. the action (what happened)

// 2. copy of the current state
const postComments = (state=[], action) => {
    console.log('postComments');
    switch(action.type) {
        case 'ADD_COMMENT':
            console.log("Adding a comment");
            return [...state, {
                user: action.author,
                text: action.comment
            }];
            break;
        case 'REMOVE_COMMENT':
            console.log("Removing a comment");
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
            break;
        default:
            return state;
    }
    return state;
}


const comments = (state=[], action) => {
    console.log(state, action);
    if (typeof action.postId !== 'undefined') {
        return {
            ...state,
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
};

export default comments;
