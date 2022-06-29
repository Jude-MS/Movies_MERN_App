import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import "./MainNavigation.css";
import MainHeader from "./MainHeader";
import { FaArrowLeft, FaEllipsisV } from 'react-icons/fa';

const MainNavigation = (props) => {

  let location = useLocation();
  let headerNameElement = location.pathname.length > 7 ? <Fragment><FaArrowLeft size="1.5rem" style={{marginRight: "15px"}} />Movie details</Fragment>  : "Pop Movies";

  return (
    <Fragment>
      <MainHeader>
        <h1 className="main-navigation__title">
          <Link to="/">
          {headerNameElement}
          </Link>
        </h1>
        <nav className="main-navigation__dots">
          <FaEllipsisV size="1.5rem" style={{color: "#fff"}} />
        </nav>
      </MainHeader>
    </Fragment>
  );
};

export default MainNavigation;
