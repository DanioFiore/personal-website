import React from "react";

const Skills = () => {
  return (
    <React.Fragment>
      <div className="mt-10">
        <h1 className="text-7xl">My Tech Skills</h1>
      </div>
      <div>
        <ul>
          <li>
            <h6>HTML</h6>
            <div className="shadow w-full bg-grey-light">
              <div
                className="bg-primary-light leading-none py-3 rounded-lg"
                style={{ width: "80%" }}
              ></div>
            </div>
          </li>
          <li>
            <h6>CSS</h6>
            <div className="shadow w-full bg-grey-light">
              <div
                className="bg-primary-light leading-none py-3 rounded-lg"
                style={{ width: "80%" }}
              ></div>
            </div>
          </li>
          <li>
            <h6>JavaScript</h6>
            <div className="shadow w-full bg-grey-light">
              <div
                className="bg-primary-light leading-none py-3 rounded-lg"
                style={{ width: "70%" }}
              ></div>
            </div>
          </li>
          <li>
            <h6>Bootstrap</h6>
            <div className="shadow w-full bg-grey-light">
              <div
                className="bg-primary-light leading-none py-3 rounded-lg"
                style={{ width: "90%" }}
              ></div>
            </div>
          </li>
          <li>
            <h6>PHP</h6>
            <div className="shadow w-full bg-grey-light">
              <div
                className="bg-primary-light leading-none py-3 rounded-lg"
                style={{ width: "65%" }}
              ></div>
            </div>
          </li>
          <li>
            <h6>Laravel</h6>
            <div className="shadow w-full bg-grey-light">
              <div
                className="bg-primary-light leading-none py-3 rounded-lg"
                style={{ width: "65%" }}
              ></div>
            </div>
          </li>
          <li>
            <h6>MySQL</h6>
            <div className="shadow w-full bg-grey-light">
              <div
                className="bg-primary-light leading-none py-3 rounded-lg"
                style={{ width: "55%" }}
              ></div>
            </div>
          </li>
          <li>
            <h6>React</h6>
            <div className="shadow w-full bg-grey-light">
              <div
                className="bg-slate-400 text-center text-white leading-none py-1 rounded-lg"
                style={{ width: "100%" }}
              >
                In progress..
              </div>
            </div>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Skills;
