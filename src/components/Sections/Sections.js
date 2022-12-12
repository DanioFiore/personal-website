import React from "react";
import style from "./Sections.module.css";

const Sections = () => {
  return (
    <div>
      <div className="mt-10 flex justify-center">
        <h2 className="text-5xl mb-6">Sections</h2>
      </div>
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 lg:gap-x-10 sm:gap-y-10">
          <div className={style.myBestProjects}>
            <div className={style.filter}>
              <a href="www.#.com" className="text-white">
                My Best Projects
              </a>
            </div>
          </div>
          <div className={style.myStory}>
            <div className={style.filter}>
              <a href="www.#.com" className="text-white">
                My Story
              </a>
            </div>
          </div>
          <div className={style.myBlog}>
            <div className={style.filter}>
              <a href="www.#.com" className="text-white">
                Blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sections;
