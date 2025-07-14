import React from 'react';
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import './Header.css'


const Header = (props) => {
  const {backgroundImage , headertext , typeText,typeText1 } = props;
  return (
    <>
      <header className="masthead" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="container px-4 px-lg-5 h-100">
          <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-8 align-self-end">
              <h1 className="text-white font-weight-bold">
                <Typewriter
                  options={{
                    strings: [typeText ,  typeText1],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <hr className="divider" />
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className="text-white mb-5">
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolores expedita corporis, architecto voluptate porro facere nulla maxime. */}
                {headertext}
              </p>
              <Link className="btn btn-primary btn-xl" to='/contactus'>
                Find Out More
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
