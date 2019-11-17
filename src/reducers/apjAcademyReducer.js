import Actions from  '../actionConstants/apjAcademyActionConstants'

const initialState = {
  VideoList: [],
  isLoading: false,
  selectedVideo: {},
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.VIDEOS_REQUESTED:
      return {
        ...state,
        error: '',
        VideoList: [],
        isLoading: true,
      };
      case Actions.VIDEOS_RECEIVED:
      return {
        ...state,
        error: '',
        VideoList: action.payload.videoList || [],
        selectedVideo: action.payload.VideoList[0] || {},
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
        selectedVideo:   {},
        isLoading: false,
      };
      case Actions.VIDEO_RECEIVED:
      return {
        ...state,
        error:  '',
        selectedVideo: action.payload.videoDetails || {},
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