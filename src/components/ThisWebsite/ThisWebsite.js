import React from "react";
import codeImage from "../img/code-image.webp";
import typingImage from "../img/typing.webp";

const ThisWebsite = () => {
    return (
        <div className="mt-10">
            <h2 className="text-5xl">What can you find?</h2>
            <ul className="flex flex-col items-center">
                <a href="#"><img src={codeImage} alt="coding" /> My Best Projects</a>
                <li>My Stories</li>
                <a href="#"><img src={typingImage} alt="typing on macbook"/> Blog</a>
            </ul>
        </div>
    );
}

export default ThisWebsite;