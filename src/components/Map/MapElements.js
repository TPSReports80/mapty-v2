import styled from "styled-components";

export const MapWrapper = styled.div`
  position: relative;
  flex: 1;
  height: 100%;
  background-color: #aaa;
  .leaflet-container {
    width: 100%;
    height: 100vh;
  }
  .leaflet-popup .leaflet-popup-content-wrapper {
    background-color: var(--color-dark--1);
    color: var(--color-light--2);
    border-radius: 5px;
    padding-right: 0.6rem;
  }

  .leaflet-popup .leaflet-popup-content {
    font-size: 1.5rem;
  }

  .leaflet-popup .leaflet-popup-tip {
    background-color: var(--color-dark--1);
  }

  .running-popup .leaflet-popup-content-wrapper {
    border-left: 5px solid var(--color-brand--2);
  }
  .cycling-popup .leaflet-popup-content-wrapper {
    border-left: 5px solid var(--color-brand--1);
  }
`;
