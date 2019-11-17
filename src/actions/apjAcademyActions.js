import Actions from '../actionConstants/apjAcademyActionConstants';
import axios from 'axios';

export const getVideosList = () => {
  return async (dispatch) => {
    dispatch({type: Actions.VIDEOS_REQUESTED});

    try {
      // let response = await axios.get('http://localhost:3001');
    //   let response = await axios.get('https://datagrokr-employee-server.herokuapp.com');
      let response = await axios.get('Youtube_API_LInk');
      dispatch({
        type: Actions.VIDEOS_RECEIVED,
        payload: {videoList: response.data.VIDEOS},
      });
    } catch (e) {
      dispatch({
        type: Actions.VIDEOS_ERROR,
        error: "API to get videos list is failed with error : "+e,
      });
    }
  };
};