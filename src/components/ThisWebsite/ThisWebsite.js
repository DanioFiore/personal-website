import React from "react";
import codeImage from "../img/code-image.webp";
import typingImage from "../img/typing.webp";

const ThisWebsite = () => {
    return (
        <div className="mt-7">
            <h2 className="text-4xl">What can you find in this Website</h2>
            <ul className="flex justify-around">
                <a href="#"><img src={codeImage} alt="coding" /> My Best Projects</a>
                <li>My Stories</li>
                <a href="#"><img src={typingImage} alt="typing on macbook"/> Blog</a>
            </ul>
        </div>
    );
}

export default ThisWebsite;