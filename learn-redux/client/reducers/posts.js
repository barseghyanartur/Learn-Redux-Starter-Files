// reducer takes in two things
// 1. the action (what happened)

// 2. copy of the current state

const posts = (state=[], action) => {
    console.log('The post will change');
    console.log(state, action);

    switch(action.type) {
        case 'INCREMENT_LIKES':
            const i = action.index;
            return [
                ...state.slice(0, i),
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i + 1),
            ]
            break;
        default:
            return state;
    }
};

export default posts;
