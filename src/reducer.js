export const reducer = (state, action) => {
  if (action.type === "DISPLAY_MAP") {
    return {
      ...state,
      latlng: { lat: action.payload.lat, lng: action.payload.lng },
    };
  }
  if (action.type === "SHOW_FORM") {
    return {
      ...state,
      showForm: true,
      currentWorkout: { ...action.payload },
    };
  }
  if (action.type === "SUBMIT_FORM") {
    return {
      ...state,
      showForm: false,
      workouts: [
        ...state.workouts,
        { ...action.payload, ...state.currentWorkout },
      ],
    };
  }
  if (action.type === "MOVE_MAP") {
    return {
      ...state,
      latlng: action.payload,
    };
  }
  return state;
};
