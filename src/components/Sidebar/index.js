import React from "react";
import {
  SidebarContainer,
  SidebarLogo,
  WorkoutList,
  WorkoutItem,
} from "./SidebarElements";
import Form from "../Form";
const Sidebar = ({ state, dispatch }) => {
  console.log(state.workouts);
  const reverseArray = state.workouts.slice().reverse();
  const handleMarker = (coords) => {
    dispatch({ type: "MOVE_MAP", payload: coords });
  };
  return (
    <SidebarContainer>
      <SidebarLogo alt="mapty" src="images/logo.png" />
      <WorkoutList>
        <Form state={state} dispatch={dispatch} />
        {reverseArray.map((item) => {
          return (
            <WorkoutItem
              key={item.id}
              onClick={(e) => handleMarker(item.latlng)}
              className={
                item.workoutType === "running"
                  ? "workout--running"
                  : "workout--cycling"
              }
            >
              <h2 className="workout__title">Running on April 14</h2>
              <div className="workout__details">
                <span className="workout__icon">🏃‍♂️</span>
                <span className="workout__value">{item.distance}</span>
                <span className="workout__unit">mi</span>
              </div>
              <div className="workout__details">
                <span className="workout__icon">⏱</span>
                <span className="workout__value">{item.duration}</span>
                <span className="workout__unit">min</span>
              </div>

              {item.workoutType === "running" && (
                <>
                  <div className="workout__details">
                    <span className="workout__icon">⚡️</span>
                    <span className="workout__value">
                      {item.duration / item.distance}
                    </span>
                    <span className="workout__unit">min/mi</span>
                  </div>
                  <div className="workout__details">
                    <span className="workout__icon">🦶🏼</span>
                    <span className="workout__value">{item.cadence}</span>
                    <span className="workout__unit">spm</span>
                  </div>
                </>
              )}
              {item.workoutType === "cycling" && (
                <>
                  <div className="workout__details">
                    <span className="workout__icon">⚡️</span>
                    <span className="workout__value">
                      {item.distance / (item.duration / 60)}
                    </span>
                    <span className="workout__unit">mi/h</span>
                  </div>
                  <div className="workout__details">
                    <span className="workout__icon">⛰</span>
                    <span className="workout__value">{item.elevation}</span>
                    <span className="workout__unit">m</span>
                  </div>
                </>
              )}
            </WorkoutItem>
          );
        })}
      </WorkoutList>
    </SidebarContainer>
  );
};

export default Sidebar;
