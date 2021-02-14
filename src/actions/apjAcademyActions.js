import Actions from '../actionConstants/apjAcademyActionConstants';
import axios from 'axios';
const {REACT_APP_YOUTUBE_API_KEY,REACT_APP_CHANNEL_ID} = process.env;


//this method will return all the playlists of a youtube channel by taing api-key and channelID as arguments
//after getting the lists of playlists we are setting the returned data in redux store.
//Those components which are connected to the part of store, will get rerender again once data is changed.
export const getPlayLists = () => {
  return async (dispatch) => {
    dispatch({type: Actions.PLAYLISTS_REQUESTED});

    try {
      // console.log("Actions of getPlayLists is being called...............................................");
      // const playListIds = 'PLfjlOytYZqaoswoC2v4G_Y5aWn9RZW57Y';
      const API_KEY =   REACT_APP_YOUTUBE_API_KEY;
      const channelId = REACT_APP_CHANNEL_ID;
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
      // console.log("error........................"+e)
      dispatch({
        type: Actions.PLAYLISTS_ERROR,
        error: "API to get videos list is failed with error : "+e,
      });
    }
  };
};

//this method will return all the videos of a playlist  by taking playlistid as one of the argument.
//after getting the lists of videos, we are setting the returned data in redux store.
//The second argument "selectedPlaylist" is for memorising the playlist whose videoes are requested, this will help 
//us to set the playlist highlighted once the component gets rerendered after receiving the videoes of the playlist. 
//Those components which are connected to the part of store, will get rerender again once data is changed.
export const getVideosList = (playlistId, selectedPlaylist) => {
  return async (dispatch) => {
    dispatch({
      type: Actions.VIDEOS_REQUESTED,
      payload: {selectedPlaylist: selectedPlaylist}
    });

    try {
      // console.log("Actions of getVideosList is being called...............................................");
      // const playlistId = 'PLfjlOytYZqaoswoC2v4G_Y5aWn9RZW57Y';
      const API_KEY = REACT_APP_YOUTUBE_API_KEY;
      let response  = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
        params: {
          playlistId : playlistId,
          part: 'snippet',
          key  : API_KEY,
          maxResults: 50
        }
      })
      // console.log("response of  getVideosList..........: ...",response)
      dispatch({
        type: Actions.VIDEOS_RECEIVED,
        payload: {playlistVideoes: response.data.items},
      });
    } catch (e) {
      // console.log("error........................"+e)
      dispatch({
        type: Actions.VIDEOS_ERROR,
        error: "API to get videos list is failed with error : "+e,
      });
    }
  };
};


//
export const setVideo = (videoToSet) => {

    return (dispatch) => {
    dispatch({type: Actions.VIDEO_REQUESTED});

    try {
      dispatch({
        type: Actions.VIDEO_RECEIVED,
        payload: {abc: videoToSet},
      });
    } catch (e) {
      // console.log("error........................"+e)
      dispatch({
        type: Actions.VIDEO_ERROR,
        error: "while  setting video failed with error : "+e,
      });
    }
  }
}

