import React from "react";
import {
  FormWrapper,
  FormRow,
  FormInput,
  FormLabel,
  FormButton,
  FormSelect,
  FormOption,
} from "./FormElements";
const Form = ({ state, dispatch }) => {
  const [workoutForm, setWorkoutForm] = React.useState({
    workoutType: "",
    distance: "",
    duration: "",
    cadence: "",
    elevation: "",
  });
  const handleChange = (e) => {
    setWorkoutForm((prevForm) => {
      return {
        ...prevForm,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (workoutForm.workoutType !== "") {
      const locale = navigator.language;
      const now = new Date();

      const options = {
        day: "2-digit", // always 2 digits
        month: "long",
      };
      const date = new Intl.DateTimeFormat(locale, options).format(now);
      dispatch({ type: "SUBMIT_FORM", payload: { ...workoutForm, date } });
    } else {
      alert("Please choose a type of workout.");
    }
  };
  return (
    <FormWrapper
      onSubmit={handleSubmit}
      className={state.showForm ? "" : "hidden"}
    >
      <FormRow>
        <FormLabel>Type</FormLabel>
        <FormSelect
          onChange={handleChange}
          className="form__input form__input-type"
          name="workoutType"
        >
          <FormOption value=""> --- </FormOption>
          <FormOption value="running">Running</FormOption>
          <FormOption value="cycling">Cycing</FormOption>
        </FormSelect>
      </FormRow>
      <FormRow>
        <FormLabel>Distance</FormLabel>
        <FormInput
          onChange={handleChange}
          value={workoutForm.distance}
          className="form__input"
          type="number"
          required
          placeholder="miles"
          name="distance"
        />
      </FormRow>
      <FormRow>
        <FormLabel>Duration</FormLabel>
        <FormInput
          onChange={handleChange}
          value={workoutForm.duration}
          className="form__input"
          type="number"
          required
          placeholder="min"
          name="duration"
        />
      </FormRow>
      {workoutForm.workoutType === "running" && (
        <FormRow>
          <FormLabel>Cadence</FormLabel>
          <FormInput
            onChange={handleChange}
            value={workoutForm.cadence}
            className="form__input"
            type="number"
            required
            placeholder="steps/min"
            name="cadence"
          />
        </FormRow>
      )}
      {workoutForm.workoutType === "cycling" && (
        <FormRow>
          <FormLabel>Elev Gain</FormLabel>
          <FormInput
            onChange={handleChange}
            value={workoutForm.elevation}
            className="form__input"
            type="number"
            placeholder="meters"
            name="elevation"
          />
        </FormRow>
      )}

      <FormButton>OK</FormButton>
    </FormWrapper>
  );
};

export default Form;
