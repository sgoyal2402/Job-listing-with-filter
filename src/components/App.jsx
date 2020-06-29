import React, { useState } from "react";
import "./App.scss";
import data from "../data.json";
import Job from "./Job";
import Filter from "./Filter";

function App() {
  const [buttons, setButtons] = useState([]);
  const [jobs, setJobs] = useState(data);
  const jobData = data;
  return (
    <div className="app">
      <div className="background"></div>
      <Filter
        buttons={buttons}
        setButtons={setButtons}
        jobData={jobData}
        setJobs={setJobs}
      />
      {jobs.map((job) => {
        return <Job key={job.id} jobData={job} setButtons={setButtons} />;
      })}
    </div>
  );
}

export default App;
