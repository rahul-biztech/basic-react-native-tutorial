import { DELETE_PLACE, SET_PLACES } from "./actionTypes";
import { uiStartLoading, uiStopLoading } from './index'

export const addPlace = (placeName, location, image) => {

    return dispatch => {
        dispatch(uiStartLoading());
        fetch("https://us-central1-reactnative-app-321ae.cloudfunctions.net/storeImage", {
            method: 'POST',
            body: JSON.stringify({
                image: image.base64
            })
        }).catch(err => {
            console.log("Error: " + err);
            alert('Something went wrong, please try again!');
            dispatch(uiStopLoading());

        }).then(res => {
            return res.json();

        }).then(parsedRes => {
            console.log("Response: " + parsedRes);
            let imgUrl = "https://i.pinimg.com/originals/b2/2b/1e/b22b1e4488efcc69342e698afc89096d.webp";
            if (parsedRes !== undefined) {
                imgUrl = parsedRes.imageUrl;
            }
            const placeData = {
                name: placeName,
                location, location,
                image: imgUrl
            };

            return fetch("https://reactnative-app-321ae.firebaseio.com/places.json", {
                method: 'POST',
                body: JSON.stringify(placeData)

            }).catch(err => {
                console.log("Error: " + err);
                alert('Something went wrong, please try again!');
                dispatch(uiStopLoading());

            }).then(res => {
                return res.json();

            }).then(parsedRes => {
                console.log("Final Response: " + JSON.stringify(parsedRes));
                dispatch(uiStopLoading());
            });
        });
    }
};

export const getPlaces = () => {
    return dispatch => {
        fetch("https://reactnative-app-321ae.firebaseio.com/places.json")
            .catch(err => {
                alert('Somthing wend wrong, try again!');
                console.log("Error: " + err);
            })
            .then(res => res.json())
            .then(parsedRes => {
                const places = [];
                for (const key in parsedRes) {
                    places.push({
                        ...parsedRes[key],
                        image: { uri: parsedRes[key].image },
                        id: key
                    })
                }
                console.log("Response: " + JSON.stringify(parsedRes));
                console.log("Places: " + JSON.stringify(places));
                dispatch(setPlaces(places));
            })
    };
};

export const setPlaces = places => {
    return {
        type: SET_PLACES,
        places: places
    }
}

export const deletePlace = (key) => {
    return {
        type: DELETE_PLACE,
        placeKey: key
    };
};