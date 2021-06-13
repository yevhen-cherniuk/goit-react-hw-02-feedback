import React from "react";
import style from "./FeedbackOptions.module.css";
import Section from "../Section/Section";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Section title="Please leave feedback">
    <div className={style.section}>
      {options.map((option, idx) => (
        <button
          className={style.btn}
          key={idx}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  </Section>
);

export default FeedbackOptions;