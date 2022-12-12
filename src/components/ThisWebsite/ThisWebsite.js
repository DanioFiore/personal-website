import React from "react";
import style from "./ThisWebsite.module.css";

const ThisWebsite = () => {
    return (
        <div className="mt-10">
            <h2 className="text-5xl">What can you find?</h2>
            <ul className="flex flex-col items-center">
                <div className={style.myBestProjects}>
                    <div className={style.filter}>
                        <a href="#" className="text-white"> My Best Projects</a>
                    </div>
                </div>
                <div className={style.myStory}>
                    <div className={style.filter}>
                        <a href="#" className="text-white">My Story</a>
                    </div>
                </div>
                <div className={style.myBlog}>
                    <div className={style.filter}>
                        <a href="#" className="text-white">Blog</a>
                    </div>
                </div>
                
            </ul>
        </div>
    );
}

export default ThisWebsite;