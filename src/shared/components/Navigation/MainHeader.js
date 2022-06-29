import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './MainHeader.css';

const MainHeader = (props) => {
    const [isInDetails, setIsInDetails] = useState(false);

    let location = useLocation();

    useEffect(() => {
    setIsInDetails(location.pathname.length > 7)
  }, [location]);


    return (
        <header className={`main-header ${isInDetails && "details"}`}>
          {props.children}
        </header>
    )
}

export default MainHeader;
