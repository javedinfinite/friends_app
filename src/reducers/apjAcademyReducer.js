import Actions from  '../actionConstants/apjAcademyActionConstants'

const initialState = {
  YoutubePlayList: [],
  isLoading: false,
  selectedPlaylist: {},
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.VIDEOS_REQUESTED:
      return {
        ...state,
        error: '',
        YoutubePlayList: [],
        isLoading: true,
      };
      case Actions.VIDEOS_RECEIVED:
        // console.log("inside received.................."+JSON.stringify(action.payload.YoutubePlayList[0].snippet.publishedAt))
      return {
        ...state,
        error: '',
        YoutubePlayList: action.payload.YoutubePlayList || [],
        selectedPlaylist: action.payload.YoutubePlayList[0] || {},
        isLoading: false,
      };
      case Actions.VIDEOS_ERROR:
      return {
        ...state,
        error: action.error || 'Something went wrong while fetching video list',
        isLoading: false,
      };
      case Actions.VIDEO_REQUESTED:
      return {
        ...state,
        error: action.error || '',
        selectedPlaylist:   {},
        isLoading: false,
      };
      case Actions.VIDEO_RECEIVED:
      return {
        ...state,
        error:  '',
        selectedPlaylist: action.payload.videoDetails || {},
        isLoading: false,
      };
      case Actions.VIDEO_ERROR:
      return {
        ...state,
        error: action.error || 'Something went wrong while fetching video data',
        isLoading: false,
      };
    default:
      return state;
  }
};