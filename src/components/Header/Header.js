import React from "react";

const Header = (props) => {
  return (
    <React.Fragment>
      <div className="grid gap-2 grid-cols-2">
        <div className="flex flex-col">
          <h1 className="text-7xl self-start">Danio Fiore</h1>
          <h5>Jr. Web Developer</h5>
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
