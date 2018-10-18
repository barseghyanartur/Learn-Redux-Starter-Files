// reducer takes in two things
// 1. the action (what happened)

// 2. copy of the current state

const comments = (state=[], action) => {
    console.log(state, action);
    return state;
};

export default comments;
