export default function seriesData(state = null, action) {
  switch (action.type) {
    case 'SERIES_INFO@LOAD_COMPLETE':
      return action.data;
    default:
      return state;
  }
}
