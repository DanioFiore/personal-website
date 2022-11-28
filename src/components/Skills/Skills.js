import React from "react";
import SkillsBar from "./SkillsBar";

const Skills = () => {
  // array of skills
  let skills = [
    {
      language: "HTML",
      width: "80%",
    },
    {
      language: "CSS",
      width: "80%",
    },
    {
      language: "Javascript",
      width: "70%",
    },
    {
      language: "React",
      width: "40%",
    },
    {
      language: "Bootstrap",
      width: "90%",
    },
    {
      language: "Tailwind CSS",
      width: "35%",
    },
    {
      language: "Java Base",
      width: "50%",
    },
    {
      language: "PHP",
      width: "60%",
    },
    {
      language: "Laravel",
      width: "65%",
    },
    {
      language: "MySQL",
      width: "55%",
    },
  ];

  return (
    <div>
      {/* title */}
      <div className="mt-10 flex justify-center">
        <h1 className="text-5xl mb-6">My Tech Skills</h1>
      </div>

      {/* skills container */}
      <div className="flex justify-center">
        <div className="w-6/12">
          <ul>
            {skills.map((element) => (
              <li>
                <SkillsBar language={element.language} width={element.width} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
