//TYPES
const SET_POWER = 'set_power';
//ACTIONS
export const handleSetPower = (value) => {
    return {
        type: SET_POWER,
        payload: value
    };

    // return (dispatch) => {
    //     //call to PARTICLE
    //     .then((res) => {
    //         dispatch({
    //             type: SET_POWER,
    //             payload: res
    //         })
    //     })
    // }
};

//REDUCERS
const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_POWER:
            return { ...state, powerlevel: action.payload };
    }
    return state;
};
