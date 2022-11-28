import React from "react";

const SkillsBar = (props) => {
  return (
    <div className="mb-3">
      <div className="flex justify-center">
        <h6>{props.language}</h6>
      </div>
      <div className="shadow w-full bg-grey-light bg-sky-200 rounded-lg">
        <div
          className="bg-primary leading-none py-3 rounded-lg"
          style={{ width: props.width }}
        ></div>
      </div>
    </div>
  );
};

export default SkillsBar;
