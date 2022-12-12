import React from "react";
import mainLogo from "../img/main-logo-notitle.png";

const Footer = (props) => {
    return (
        <footer className="bg-primary-light p-10 flex flex-col items-center">
            <h6 className="text-secondary">
                Contacts
            </h6>
            <div>
                <ul className="text-white">
                    <li>
                        Phone: +39 3409597469
                    </li>
                    <li>
                        Email: daniofiorelavoro@gmail.com
                    </li>
                </ul>
                <div className="flex justify-center">
                    <img src={mainLogo} alt="main logo" className="h-10 w-auto"/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;