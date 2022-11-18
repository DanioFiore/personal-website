import React from "react";
import myPicture from "../img/foto.jpeg";

const Header = () => {
  return (
    <React.Fragment>
      {/* left intestation */}
      <div className="grid xl:grid-cols-3 sm:grid-cols-1">
        <div className="flex flex-col xl:justify-center sm:items-center">
          <h1 className="text-6xl xl:self-start">Danio Fiore</h1>
          <p className="xl:self-end">Jr. Web Developer</p>
        </div>

        {/* center intestation */}
        <div className="flex justify-center sm:border-y xl:border-y-0 sm:my-8 p-10 xl:border-x xl:mx-10">
          <img src={myPicture} className="h-80 rounded-full" alt="this is me"/>
        </div>

        {/* right intestation */}
        <div className="flex flex-col justify-center">
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
