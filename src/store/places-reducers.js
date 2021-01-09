import { ADD_PLACE, SET_PLACES } from './places-actions';
import Place from '../models/place';

const initialState = {
  places: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PLACES:
      console.log(action.places)

      return {
        places: action.places.map(
          pl => new Place(pl.id.toString(), pl.title)
        )
      };
    case ADD_PLACE:
      const newPlace = new Place(Math.random().toString(16).slice(2), action.placeData.title);
      return {
        places: state.places.concat(newPlace)
      };
    default:
      return state;
  }
};
