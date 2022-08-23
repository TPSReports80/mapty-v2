import styled from "styled-components";

export const FormWrapper = styled.form`
  background-color: var(--color-dark--2);
  border-radius: 5px;
  padding: 1.5rem 2.75rem;
  margin-bottom: 1.75rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem 2.5rem;

  /* Match height and activity boxes */
  height: 9.25rem;
  transition: all 0.5s, transform 1ms;
  .form__input {
    width: 100%;
    padding: 0.3rem 1.1rem;
    font-family: inherit;
    font-size: 1.4rem;
    border: none;
    border-radius: 3px;
    background-color: var(--color-light--3);
    transition: all 0.2s;

    &:focus {
      outline: none;
      background-color: #fff;
    }
  }
  &.hidden {
    transform: translateY(-30rem);
    height: 0;
    padding: 0 2.25rem;
    margin-bottom: 0;
    opacity: 0;
    transition: all 0.5s, transform 1ms;
  }
`;

export const FormRow = styled.div`
  display: flex;
  align-items: center;
  &.form__row--hidden {
    display: none;
  }
`;

export const FormLabel = styled.label`
  flex: 0 0 50%;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const FormInput = styled.input``;

export const FormButton = styled.button`
  display: none;
`;

export const FormSelect = styled.select``;

export const FormOption = styled.option``;
