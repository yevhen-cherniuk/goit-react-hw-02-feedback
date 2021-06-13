import React from "react";

import style from "./Statistics.module.css";
import Section from "../Section/Section";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <Section title="Statistics">
    <div>
      <p className={style.description}>Good: {good}</p>
      <p className={style.description}>Neutral: {neutral}</p>
      <p className={style.description}>Bad: {bad}</p>
      <p className={style.description}>Total: {total}</p>
      <p className={style.description}>Positive feedback: {positivePercentage}%</p>
    </div>
  </Section>
);
export default Statistics;