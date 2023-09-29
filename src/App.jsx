import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const App = () => {
  const formStyle = {
    maxWidth: "500px", // Set the maximum width for the form
    margin: "5% auto", // Center the form horizontally
  };
  const deleteBtn = {
    width: "100%",
  };
  const cardStyle = {
    width: "18rem",
    display: "inline-block",
    // display: "flex",
    // flex:"justify-between"
  };
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    console.log(mainTask);
    setTitle("");
    setDesc("");
    successNotify()
  };
  const handleDelete = (i) => {
    let copyTasks = [...mainTask];
    copyTasks.splice(i, 1);
    setMainTask(copyTasks);
    failureNotify();
  };
  let renderTask = "No Task Available.";
  const successNotify = () =>
    toast.success("Task Added Successfully", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const failureNotify = () => {
    toast.error("Data Deleted Successfully", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  renderTask = mainTask.map((task, i) => {
    return (
      <div key={i} style={cardStyle}>
        <div class="card m-2">
          <div className="card-body">
            <h5 className="card-title">{task.title}</h5>
            <hr />
            <p className="card-text">{task.desc}</p>
          </div>
          <div class="card-footer">
            <button
              className="btn btn-danger btn-block"
              style={deleteBtn}
              onClick={() => {
                handleDelete(i);
              }}
            >
              Remove Task
            </button>
            
          </div>
        </div>
      </div>
    );
  });
  // const Allposts = () => {
  //   axios.get
  // }
  return (
    <>
      <ToastContainer />
      <h1 className="bg-dark text-white p-3 fw-bold text-center">App</h1>
      <div className="container">
        <form style={formStyle} onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <input
                type="text"
                name="title"
                id="title"
                className="border-dark form-control mb-3"
                placeholder="Enter Task Here"
                value={title}
                required={true}
                // minLength={5}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                name="description"
                id="description"
                className="border-dark form-control mb-3"
                placeholder="Enter Description Here"
                value={desc}
                required={true}
                // minLength={10}
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
              />
            </div>
            <button type="submit " className="btn btn-success mb-3">
              Add Task
            </button>
          </div>
        </form>
        <hr />
        <div className="container">
          <ul>{renderTask}</ul>
        </div>
      </div>
    </>
  );
};

export default App;
