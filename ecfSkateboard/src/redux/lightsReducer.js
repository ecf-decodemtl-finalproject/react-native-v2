//TYPES
const TOGGLE_LIGHTS = 'toggle_lights';

//ACTIONS
export const toggleLights = (toggle) => {
    return {
        type: TOGGLE_LIGHTS,
        payload: toggle
    };
    // return (dispatch) => {
    //     //call to PARTICLE
    //     .then((res) => {
    //         dispatch({
    //             type: TOGGLE_LIGHTS,
    //             payload: res
    //         })
    //     })
    // }
};

//REDUCER
const INITIAL_STATE = { lightsToggle: false };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_LIGHTS:
            return { ...state, lightsToggle: !action.payload };
    }
    return state;
};
