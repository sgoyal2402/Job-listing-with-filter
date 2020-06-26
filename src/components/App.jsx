import React from "react";
import "./App.scss";
import data from "../data.json";
import Card, { StyledButton } from "./card/Card";
import { Data, Logo } from "./card/Card";

function App() {
  const jobData = data;
  return (
    <div className="app">
      <Card featured>
        <Logo src={jobData[0].logo} alt="Logo"></Logo>
        <div className="data">
          <Data wght={700} color="#5ba4a4" size={"14px"}>
            {jobData[0].company}
          </Data>
          <Data wght={700} color="#2c3a3a" size="16px">
            {jobData[0].position}
          </Data>
          <Data wght={500} color="#7b8e8e" size="14px">
            {`${jobData[0].postedAt} • ${jobData[0].contract} • ${jobData[0].location}`}
          </Data>
          <hr></hr>
        </div>
        <div className="buttons">
          <StyledButton>{jobData[0].role}</StyledButton>
          <StyledButton>{jobData[0].level}</StyledButton>
          {jobData[0].languages.map((language) => (
            <StyledButton>{language}</StyledButton>
          ))}
          {jobData[0].tools.length !== 0 &&
            jobData[0].tools.map((tool) => <StyledButton>{tool}</StyledButton>)}
        </div>
      </Card>
    </div>
  );
}

export default App;
