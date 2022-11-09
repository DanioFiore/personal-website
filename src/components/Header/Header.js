import React from "react";
import myPicture from "../img/foto.jpeg";

const Header = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-3">
        <div className="flex flex-col">
          <h1 className="text-6xl self-start">Danio Fiore</h1>
          <p className="self-end">Jr. Web Developer</p>
        </div>
        <div className="flex justify-center border-x mx-10">
          <img src={myPicture} className="h-80 rounded-full" alt="this is me"/>
        </div>
        <div className="">
          <h1 className="text-6xl">Who I am</h1>
          <p>
            Ex Personal-Trainer falled in love with Cryptocurrencies. That was
            the point that changed all my pasted goals into a new goal, become a
            Developer.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
