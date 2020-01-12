import React from "react";
import './homepage.styles.scss'
const HomePage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Bags</h1>
            <span className="subtitle">Cop now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">T-Shirts</h1>
            <span className="subtitle">Cop now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Art</h1>
            <span className="subtitle">Cop now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">SLT</h1>
            <span className="subtitle">Cop now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">PDC</h1>
            <span className="subtitle">Cop now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
