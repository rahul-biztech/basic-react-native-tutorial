import { ADD_PLACE, DELETE_PLACE } from "../actions/actionTypes";

const initialState = {
    places: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
        console.log(JSON.stringify(action.placeName) + " and " + JSON.stringify(action.location));
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random() + '',
                    name: action.placeName,
                    image: {
                        uri: 'https://media-cdn.tripadvisor.com/media/photo-s/11/33/b5/8c/place-aux-merveilles.jpg'
                    },
                    location: action.location
                })
            };

        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => {
                    return place.key !== action.placeKey;
                })
            };

        default:
            return state;
    }
};

export default reducer;