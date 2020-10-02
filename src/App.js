import React from "react";
import { connect } from "react-redux";
import List from "./components/list/list";
import Card from "./components/cardView/card";
import Popup from "./components/popup/popup";
import "./App.css";
import { addProject, updateProject, deleteProject } from "./Actions";

function App(props) {
  const { data } = props;
  const [open, setOpen] = React.useState(false);
  const [editData, setEditData] = React.useState(null);

  const clickToSetEditData = (payload) => {
    setEditData(payload);
    setOpen(true);
  };
  const clickToAddProject = (event) => {
    event.preventDefault();
    setEditData(null);
    setOpen(true);
  };
  return (
    <div className="container layout-width">
      <section className="header row mt-5">
        <div className="col-md-6">
          <h2>
            <span className="heading-color">Featured</span> Developers
          </h2>
          <p className="heading-color">Prominent developers in Banglore</p>
        </div>
        <div className="col-md-6 text-right">
          <a
            href="javscript:void(0)"
            onClick={clickToAddProject}
            className="add-developer mt-3"
          >
            + ADD NEW DEVELOPER
          </a>
        </div>
      </section>
      <section className="card-lay">
        <div className="card-deck mb-3 text-center row">
          {data &&
            data.map((item, index) => (
              <List
                key={index}
                index={index}
                item={item}
                handleSetEditData={clickToSetEditData}
                handleDeleteProject={props.handleDeleteProject}
              ></List>
            ))}
        </div>
      </section>
      <section className="header row mt-5">
        <div className="col-md-6">
          <h2>
            <span className="heading-color">Trending</span> Projects
          </h2>
          <p className="heading-color">
            Most sought-after projects in Bengluru
          </p>
        </div>
        <div className="col-md-6 text-right">
          <a href="javscript:void(0)" className="add-developer mt-3">
            + ADD NEW PROJECT
          </a>
        </div>
      </section>
      <section className="card-prod">
        <div className="card-deck mb-3 text-center">
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </section>
      {open && (
        <Popup
          edit={editData && Object.keys(editData).length > 0 ? true : false}
          data={editData ? editData : {}}
          handleClose={() => setOpen(false)}
          handleAddProject={props.handleAddProject}
          handleUpdateProject={props.handleUpdateProject}
        ></Popup>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddProject: (payload) => dispatch(addProject(payload)),
    handleUpdateProject: (payload) => dispatch(updateProject(payload)),
    handleDeleteProject: (payload) => dispatch(deleteProject(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
