export const ADD_PLACE = 'ADD_PLACE';
export const SET_PLACES = 'SET_PLACES';
import {fetchPlaces, insertPlace} from '../helpers/db';
export const addPlace = (title) => {
  return async (dispatch) => {
    try {
      const dbResult = await insertPlace(
        title,
        'newPath',
        'Dummy address',
        15.6,
        12.3,
      );
      dispatch({
        type: ADD_PLACE,
        placeData: {id: dbResult.insertId, title: title, image: 'newPath'},
      });
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  };
};

export const loadFromDB = () => {
  return async (dispatch) => {
    try {
      const res = await fetchPlaces();
      let array = []
      var len = res.rows.length;
      for (let i = 0; i < len; i++) {
        let row = res.rows.item(i);
        array.push(row)
      }
      dispatch({type: SET_PLACES, places: array})
    } catch (err) {
      console.log(err);
    }
  };
};
