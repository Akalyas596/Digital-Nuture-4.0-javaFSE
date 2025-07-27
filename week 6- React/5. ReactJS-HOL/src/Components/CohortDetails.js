import React from "react";
import styles from "./CohortDetails.module.css";

const CohortDetails = ({ cohort }) => {
  const getHeadingColor = (status) => {
    return status === "Ongoing" ? "green" : "blue";
  };

  return (
    <div className={styles.box}>
      <h3 style={{ color: getHeadingColor(cohort.status) }}>
        {cohort.id} - {cohort.track}
      </h3>
      <dl>
        <dt>Started On</dt>
        <dd>{cohort.startDate}</dd>
        <dt>Current Status</dt>
        <dd>{cohort.status}</dd>
        <dt>Coach</dt>
        <dd>{cohort.coach}</dd>
        <dt>Trainer</dt>
        <dd>{cohort.trainer}</dd>
      </dl>
    </div>
  );
};

export default CohortDetails;
