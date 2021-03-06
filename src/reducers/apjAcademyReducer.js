import Actions from  '../actionConstants/apjAcademyActionConstants'

const initialState = {
  YoutubePlayList: [],
  playlistVideoes: [],
  isLoading: false,
  selectedPlaylist: {},
  selectedVideo: {},
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.PLAYLISTS_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
      case Actions.PLAYLISTS_RECEIVED:
        // console.log("inside received.................."+JSON.stringify(action.payload.YoutubePlayList[0].snippet.publishedAt))
      return {
        ...state,
        YoutubePlayList: action.payload.YoutubePlayList || [],
        selectedPlaylist: action.payload.YoutubePlayList[0] || {},
        isLoading: false,
      };
      case Actions.PLAYLISTS_ERROR:
      return {
        ...state,
        error: action.error || 'Something went wrong while fetching playlist list',
        isLoading: false,
      };





      case Actions.VIDEOS_REQUESTED:
      return {
        ...state,
        selectedPlaylist:action.payload.selectedPlaylist
        // isLoading: true,
      };
      case Actions.VIDEOS_RECEIVED:
      return {
        ...state,
        playlistVideoes: action.payload.playlistVideoes || [],
        selectedVideo: action.payload.playlistVideoes[0] || {},
        // isLoading: false,
      };
      case Actions.VIDEOS_ERROR:
      return {
        ...state,
        error: action.error || 'Something went wrong while fetching video list',
        // isLoading: false,
      };


      case Actions.VIDEO_REQUESTED:
        return {
          ...state,
          isLoading: false,
        }
      case Actions.VIDEO_RECEIVED:
        return {
          ...state,
          selectedVideo: action.payload.abc
        }
      case Actions.VIDEO_ERROR:
        return {
          ...state,
          error: action.error || 'Something went wrong while fetching video ',
          isLoading: false,
        };
    default:
      return state;
  }
};