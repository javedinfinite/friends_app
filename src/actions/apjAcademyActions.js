import Actions from '../actionConstants/apjAcademyActionConstants';
import axios from 'axios';

export const getPlayLists = () => {
  return async (dispatch) => {
    dispatch({type: Actions.PLAYLISTS_REQUESTED});

    try {
      console.log("Actions of getPlayLists is being called...............................................");
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
      dispatch({
        type: Actions.PLAYLISTS_RECEIVED,
        payload: {YoutubePlayList: response.data.items},
      });
    } catch (e) {
      console.log("error........................"+e)
      dispatch({
        type: Actions.PLAYLISTS_ERROR,
        error: "API to get videos list is failed with error : "+e,
      });
    }
  };
};

export const getVideosList = (playlistId, selectedPlaylist) => {
  return async (dispatch) => {
    dispatch({
      type: Actions.VIDEOS_REQUESTED,
      payload: {selectedPlaylist: selectedPlaylist}
    });

    try {
      console.log("Actions of getVideosList is being called...............................................");
      // const playlistId = 'PLfjlOytYZqaoswoC2v4G_Y5aWn9RZW57Y';
      const API_KEY = 'AIzaSyAiM8qRZPqL9LQ_othyTNlAaCy2VyIWX4Q';
      let response  = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
        params: {
          playlistId : playlistId,
          part: 'snippet',
          key  : API_KEY,
          maxResults: 50
        }
      })
      console.log("response of  getVideosList..........: ...",response)
      dispatch({
        type: Actions.VIDEOS_RECEIVED,
        payload: {playlistVideoes: response.data.items},
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

export const setVideo = (videoToSet) => {

    return (dispatch) => {
    dispatch({type: Actions.VIDEO_REQUESTED});

    try {
      dispatch({
        type: Actions.VIDEO_RECEIVED,
        payload: {abc: videoToSet},
      });
    } catch (e) {
      console.log("error........................"+e)
      dispatch({
        type: Actions.VIDEO_ERROR,
        error: "while  setting video failed with error : "+e,
      });
    }
  }
}

