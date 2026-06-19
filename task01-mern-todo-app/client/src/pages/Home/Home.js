import React, { useEffect, useState } from "react";
import Navbar from "../../components/Layout/Navbar";
import PopupModel from "../../components/Layout/PopupModel";
import todoServices from "../../Services/TodoService";
import Card from "../../components/Card/Card";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [allTask, setAllTask] = useState("");
  // handle modal
  const openModalHandler = () => {
    setShowModal(true);
  };

  // get user todos
  const userData = JSON.parse(localStorage.getItem("todoapp"));
  const id = userData && userData.user.id;
  const getUserTask = async () => {
    setLoading(true);
    try {
      const { data } = await todoServices.getAllTodo(id);
      setLoading(false);
      console.log(data);
      setAllTask(data?.todos);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getUserTask();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="add-task">
          <h1>Your Task</h1>
          <input type="text" placeholder="search your todo" />
          <button className="btn btn-primary" onClick={openModalHandler}>
            Create Task <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          allTask && <Card allTask={allTask} getUserTask={getUserTask} />
        )}
        {/* ============Modal============ */}
        <PopupModel
          showModal={showModal}
          setShowModal={setShowModal}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          getUserTask={getUserTask}
        />
      </div>
    </>
  );
};

export default Home;
