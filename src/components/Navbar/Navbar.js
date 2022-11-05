import React from "react";
import mainLogo from "../img/main-logo-notitle.png";

const Navbar = (props) => {
    return(
        <React.Fragment>
            <nav className="flex justify-between bg-primary-light rounded-b-md sticky top-0">
                <ul className="text-secondary flex items-center">
                    <a className="m-2" href="#">Home</a>
                    <a className="m-2" href="#">Projects</a>
                    <a className="m-2" href="#">MyStory</a>
                    <a className="m-2" href="#">Blog</a>

                </ul>

                <img src={mainLogo} alt="logo" className="h-16"/>

                <ul className="text-secondary flex items-center">
                    <a className="m-2" href="#">Linkedin</a>
                    <a className="m-2" href="#">Github</a>
                    <a className="m-2" href="#">Instagram</a>
                </ul>
            </nav>
        </React.Fragment>
    );
}

export default Navbar;