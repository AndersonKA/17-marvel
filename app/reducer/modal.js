export default function modal(state = null, action) {
  switch (action.type) {
    case 'MODAL@SET':
      return action.data;
    default:
      return state;
  }
}
