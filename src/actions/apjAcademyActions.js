import Actions from '../actionConstants/apjAcademyActionConstants';
import axios from 'axios';

export const getVideosList = () => {
  return async (dispatch) => {
    dispatch({type: Actions.VIDEOS_REQUESTED});

    try {
      console.log("Actions is being called...............................................");
      // const playListIds = 'PLfjlOytYZqaoswoC2v4G_Y5aWn9RZW57Y';
      const API_KEY = 'AIzaSyAiM8qRZPqL9LQ_othyTNlAaCy2VyIWX4Q';
      const channelId = 'UC4jf-dcbspJbSp6H-gBRdlw'
      let response  = await axios.get('https://www.googleapis.com/youtube/v3/playlists', {
        params: {
          // id : playListIds,
          channelId : channelId,
          part: 'snippet',
          key  : API_KEY
        }
      })
      // console.log("response : ..."+ JSON.stringify(response))
      dispatch({
        type: Actions.VIDEOS_RECEIVED,
        payload: {YoutubePlayList: response.data.items},
      });
    } catch (e) {
      console.log("error........................"+e)
      dispatch({
        type: Actions.VIDEOS_ERROR,
        error: "API to get videos list is failed with error : "+e,
      });
    }
  };
};
