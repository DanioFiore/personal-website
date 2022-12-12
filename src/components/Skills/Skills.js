import React from "react";
import SkillsBar from "./SkillsBar";

const Skills = () => {
  // array of skills
  let skills = [
    {
      id: 1,
      language: "HTML",
      width: "80%",
    },
    {
      id: 2,
      language: "CSS",
      width: "80%",
    },
    {
      id: 3,
      language: "Javascript",
      width: "70%",
    },
    {
      id: 4,
      language: "React",
      width: "40%",
    },
    {
      id: 5,
      language: "Bootstrap",
      width: "90%",
    },
    {
      id: 6,
      language: "Tailwind CSS",
      width: "35%",
    },
    {
      id: 7,
      language: "Java Base",
      width: "50%",
    },
    {
      id: 8,
      language: "PHP",
      width: "60%",
    },
    {
      id: 9,
      language: "Laravel",
      width: "65%",
    },
    {
      id: 10,
      language: "SQL",
      width: "45%",
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
              <li key={element.id}>
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
