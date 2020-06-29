import React from "react";

import Card, { Logo, Data, StyledButton, Tag } from "./styles/Styles";

const Job = (props) => {
  function handleClick(event) {
    const btn = event.target.innerText;
    props.setButtons((prevB) => {
      if (!prevB.includes(btn)) return [...prevB, btn];
      else return [...prevB];
    });
  }
  return (
    <Card featured={props.jobData.featured}>
      <Logo src={props.jobData.logo} alt="Logo"></Logo>
      <div className="data">
        <Data wght={700} color="#5ba4a4" size={"14px"}>
          {props.jobData.company}
          {props.jobData.new && <Tag new> NEW </Tag>}
          {props.jobData.featured && <Tag featured> FEATURED </Tag>}
        </Data>
        <Data wght={700} color="#2c3a3a" size="16px">
          {props.jobData.position}
        </Data>
        <Data wght={500} color="#7b8e8e" size="14px">
          {`${props.jobData.postedAt} • ${props.jobData.contract} • ${props.jobData.location}`}
        </Data>
        <hr></hr>
      </div>
      <div className="buttons">
        <StyledButton onClick={handleClick}>{props.jobData.role}</StyledButton>
        <StyledButton onClick={handleClick}>{props.jobData.level}</StyledButton>
        {props.jobData.languages.map((language, index) => (
          <StyledButton key={index} onClick={handleClick}>
            {language}
          </StyledButton>
        ))}
        {props.jobData.tools.length !== 0 &&
          props.jobData.tools.map((tool, index) => (
            <StyledButton key={index} onClick={handleClick}>
              {tool}
            </StyledButton>
          ))}
      </div>
    </Card>
  );
};

export default Job;
