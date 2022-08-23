import React from "react";
import { GlobalStyles } from "./GlobalStyles";

import Sidebar from "./components/Sidebar";
import Map from "./components/Map";
import { reducer } from "./reducer";
function App() {
  const defaultState = {
    showForm: false,
    currentWorkout: null,
    workouts: [],
    latlng: null,
  };

  const [state, dispatch] = React.useReducer(reducer, defaultState);
  const getPosition = function () {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  const displayMap = async function () {
    try {
      const pos = await getPosition();
      const { latitude: lat, longitude: lng } = pos.coords;
      dispatch({ type: "DISPLAY_MAP", payload: { lat, lng } });
    } catch (err) {
      console.error(err.message);
      alert("Unable to get your location at this time.");
    }
  };

  React.useEffect(() => {
    displayMap();
  }, []);

  return (
    <div className="App">
      <GlobalStyles />
      <Sidebar dispatch={dispatch} state={state} />
      <Map state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
