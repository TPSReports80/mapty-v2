import styled from "styled-components";

export const SidebarContainer = styled.div`
  flex-basis: 40rem;
  background-color: var(--color-dark--1);
  padding: 3rem 5rem 4rem 5rem;
  display: flex;
  flex-direction: column;
`;

export const SidebarLogo = styled.img`
  height: 5.2rem;
  align-self: center;
  margin-bottom: 4rem;
`;

export const WorkoutList = styled.ul`
  list-style: none;
  height: 77vh;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const WorkoutItem = styled.li`
  background-color: var(--color-dark--2);
  border-radius: 5px;
  padding: 1.5rem 2.25rem;
  margin-bottom: 1.75rem;
  cursor: pointer;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 0.75rem 1.5rem;

  &.workout--running {
    border-left: 5px solid var(--color-brand--2);
  }
  &.workout--cycling {
    border-left: 5px solid var(--color-brand--1);
  }

  .workout__title {
    font-size: 1.7rem;
    font-weight: 600;
    grid-column: 1 / -1;
  }

  .workout__details {
    display: flex;
    align-items: baseline;
  }

  .workout__icon {
    font-size: 1.8rem;
    margin-right: 0.2rem;
    height: 0.28rem;
  }

  .workout__value {
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }

  .workout__unit {
    font-size: 1.1rem;
    color: var(--color-light--1);
    text-transform: uppercase;
    font-weight: 800;
  }
`;
