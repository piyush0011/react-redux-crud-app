import React, { useState } from "react";
import "./style.css";

export default (props) => {
  const { data } = props;
  const [state, setState] = useState({
    ...data,
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setState((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (props.edit) {
      props.handleUpdateProject({
        ...state,
      });
    } else {
      props.handleAddProject({
        ...state,
      });
    }
    props.handleClose(false);
  };

  const closePopup = () => {
    props.handleClose(false);
  };

  return (
    <div className="popup-body">
      <div className="popup-inner">
        <a href="javascript:void()" onClick={closePopup} className="close-icon">
          X
        </a>
        <h4>Featured Developers</h4>
        <div class="form-group mt-1">
          <label for="url">Developer Logo Image URL:</label>
          <input
            type="text"
            class="form-control"
            id="url"
            value={state.logo}
            name="logo"
            onChange={handleChange}
          />
        </div>
        <div class="form-group mt-1">
          <label for="name">Developer Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            value={state.title}
            name="title"
            onChange={handleChange}
          />
        </div>
        <div class="form-group mt-1">
          <label for="year">Years of experience</label>
          <input
            type="text"
            class="form-control"
            id="year"
            value={state.totalExp}
            name="totalExp"
            onChange={handleChange}
          />
        </div>
        <div class="form-group mt-1">
          <label for="project">Project Count</label>
          <input
            type="text"
            class="form-control"
            id="project"
            value={state.totalProjects}
            name="totalProjects"
            onChange={handleChange}
          />
        </div>
        <div class="form-group mt-1">
          <label for="description">Discription</label>
          <input
            type="text"
            class="form-control"
            id="description"
            value={state.desc}
            name="desc"
            onChange={handleChange}
          />
        </div>
        <div class="form-group mt-1">
          <label for="projname">Project name</label>
          <input
            type="text"
            class="form-control"
            id="projname"
            value={state.imgTitle}
            name="imgTitle"
            onChange={handleChange}
          />
        </div>
        <div class="form-group mt-1">
          <label for="name-url">Project name URL</label>
          <input
            type="text"
            class="form-control"
            id="name-url"
            value={state.imgURL}
            name="imgURL"
            onChange={handleChange}
          />
        </div>
        <button className="add-developer w-100" onClick={handleSubmit}>
          {props.edit ? "Update" : "Add"}
        </button>
      </div>
    </div>
  );
};

// export default popup;
