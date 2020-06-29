import React, { useEffect } from "react";
import { FilterTab, StyledButton } from "./styles/Styles";

export const FilterButton = (props) => {
  function handleClick(event) {
    const i = parseInt(event.currentTarget.id);
    const buttons = props.buttons.filter((button, index) => {
      return index !== i;
    });
    props.setButtons(buttons);
  }
  return (
    <div className="filter-button">
      <StyledButton>{props.name}</StyledButton>
      <i className="off" id={props.id} onClick={handleClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
          <path
            fill="#FFF"
            fillRule="evenodd"
            d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
          />
        </svg>
      </i>
    </div>
  );
};

const Filter = (props) => {
  const { buttons, jobData, setJobs } = props;

  useEffect(() => {
    if (buttons.length !== 0) {
      document.querySelector(".filter").classList.remove("hidden");
      let data = jobData;
      buttons.forEach((button) => {
        data = data.filter((item) => {
          return (
            item.role === button ||
            item.level === button ||
            item.languages.includes(button) ||
            item.tools.includes(button)
          );
        });
      });
      setJobs(data);
    } else {
      if (!document.querySelector(".filter").classList.contains("hidden"))
        document.querySelector(".filter").classList.add("hidden");
      setJobs(jobData);
    }
  }, [buttons, jobData, setJobs]);
  return (
    <div className="filter hidden">
      <FilterTab>
        {props.buttons.length !== 0 &&
          props.buttons.map((button, index) => {
            return (
              <FilterButton
                name={button}
                key={index}
                id={index}
                buttons={props.buttons}
                setButtons={props.setButtons}
              />
            );
          })}
        <span
          onClick={() => {
            props.setButtons([]);
          }}
          className="clear"
        >
          Clear
        </span>
      </FilterTab>
    </div>
  );
};

export default Filter;
