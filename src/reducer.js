export default function reducer(state, { type, payload }) {
  switch (type) {
    case "GET_ACTIONS":
      return { ...state, actions: [...state.actions, ...payload] };
    case "ADD_ACTION":
      return { ...state, actions: [...state.actions, payload] };
    case "UPDATE_ACTION":
      const actionsToUpdate = state.actions.map(action => {
        if (action.id === payload.id) {
          return {
            ...action,
            ...payload
          };
        }
        return action;
      });
      return {
        actions: actionsToUpdate,
        currentAction: payload
      };
    case "DELETE_ACTION":
      const newAcionsToKeep = state.actions.filter(action => {
        return action.id !== payload.id;
      });
      return { ...state, actions: newAcionsToKeep };
    case "COMPLETE_ACTION":
      const newActions = state.actions.map(action => {
        if (action.id === payload.id) {
          return {
            ...action,
            imgUrl: payload.imgUrl,
            completed: payload.completed
          };
        }
        return action;
      });
      return { ...state, actions: newActions };
    default:
      return state;
  }
}
