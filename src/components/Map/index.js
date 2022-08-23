import React from "react";
import { nanoid } from "nanoid";
import { MapWrapper } from "./MapElements";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Popup,
  Marker,
} from "react-leaflet";
const Map = ({ dispatch, state }) => {
  function LocationMarker() {
    const map = useMapEvents({
      click(mapEvent) {
        const { latlng } = mapEvent;
        dispatch({ type: "SHOW_FORM", payload: { latlng, id: nanoid() } });
      },
    });

    return null;
  }
  if (state.latlng) {
    return (
      <MapWrapper>
        <MapContainer center={state.latlng} zoom={11} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {state.workouts.map((item) => {
            return (
              <Marker key={item.id} position={item.latlng}>
                <Popup
                  autoClose={false}
                  className={
                    item.workoutType === "running"
                      ? "running-popup"
                      : "cycling-popup"
                  }
                >
                  {`${item.workoutType === "running" ? "🏃‍♂️" : "🚴‍♀️"} ${
                    item.workoutType
                  } on ${item.date}`}
                </Popup>
              </Marker>
            );
          })}
          <LocationMarker />
        </MapContainer>
      </MapWrapper>
    );
  }
};

export default Map;
