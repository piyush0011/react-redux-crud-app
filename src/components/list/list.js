import React, { useState } from "react";
import "./style.css";

const listView = (props) => {
  const { item } = props;
  const handleOpen = () => {
    props.handleSetEditData({
      index: props.index,
      ...item,
    });
  };
  const deleteProject = () => {
    props.handleDeleteProject(props.index);
  };

  return (
    <div className="card mb-4 box-shadow col-md-4">
      <div className="card-body text-left hover-box">
        <div className="">
          <span className="img">
            <img src={item.logo} width="100%" />
          </span>
          <div className="image-title-disc">
            <p>{item.title}</p>
            <div className="products-info mr-4">
              <p>{item.totalExp}</p>
              <span>Years Exp.</span>
            </div>
            <div className="products-info">
              <p>{item.totalProjects}</p>
              <span>Projects</span>
            </div>
          </div>
        </div>
        <p className="about-prod">{item.desc}</p>
        <a href="#" className="link">
          {item.title}
        </a>
        <div className="prod-image">
          <img className="mt-2" src={item.imgURL} width="100%" />
          <div className="image-disc">
            <p>{item.imgTitle}</p>
            <span>{item.location}</span>
          </div>
        </div>
        <div className="on-hover">
          <div className="cent">
            <a href="javascript:void(0)" onClick={handleOpen}>
              EDIT
            </a>
            <a href="javascript:void(0)" onClick={deleteProject}>
              DELETE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default listView;
