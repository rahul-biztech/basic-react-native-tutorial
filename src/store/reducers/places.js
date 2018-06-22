import { ADD_PLACE, DELETE_PLACE, SET_PLACES } from "../actions/actionTypes";

const initialState = {
    places: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_PLACES:
            return {
                ...state,
                places: action.places
            };

        // case ADD_PLACE:
        // console.log(JSON.stringify(action.placeName) + " and " + JSON.stringify(action.location));
        //     return {
        //         ...state,
        //         places: state.places.concat({
        //             key: Math.random() + '',
        //             name: action.placeName,
        //             image: action.image,
        //             location: action.location
        //         })
        //     };

        // case DELETE_PLACE:
        //     return {
        //         ...state,
        //         places: state.places.filter(place => {
        //             return place.key !== action.placeKey;
        //         })
        //     };

        default:
            return state;
    }
};

export default reducer;