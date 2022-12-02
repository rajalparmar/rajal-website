import React from 'react';
import { Link } from "react-router-dom";
import './PageLinks.scss';

export const PageLinks = () => {
    return (
        <ul className="page-links">
          <li className="page-link">
            <Link to="/" className="App-link">Home</Link>
          </li>
          <li className="page-link">
            <Link to="/experience">Professional Experience</Link>
          </li>
          <li className="page-link">
            <Link to="/education">Education</Link>
          </li>
        </ul>
    )
};
