import React from "react";

const Navbar = (props) => {
    return(
        <React.Fragment>
            <nav className="flex justify-between p-5 bg-primary-light rounded-b-md sticky top-0">
                <ul className="text-secondary">
                    <a className="m-2" href="#">Home</a>
                    <a className="m-2" href="#">Projects</a>
                    <a className="m-2" href="#">MyStory</a>
                    <a className="m-2" href="#">Blog</a>

                </ul>
                <p>LOGO</p>
                <ul className="text-secondary">
                    <a className="m-2" href="#">Linkedin</a>
                    <a className="m-2" href="#">Github</a>
                    <a className="m-2" href="#">Instagram</a>
                </ul>
            </nav>
        </React.Fragment>
    );
}

export default Navbar;