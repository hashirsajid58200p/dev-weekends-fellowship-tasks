import React, { useEffect, useState } from "react";
import Navbar from "../../components/Layout/Navbar";
import PopupModel from "../../components/Layout/PopupModel";
import todoServices from "../../Services/TodoService";
import Card from "../../components/Card/Card";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [allTask, setAllTask] = useState("");
  // handle modal
  const openModalHandler = () => {
    setShowModal(true);
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("todoapp"));
    const id = userData && userData.user.id;
    const getUserTask = async () => {
      try {
        const { data } = await todoServices.getAllTodo(id);
        console.log(data);
        setAllTask(data?.todos);
      } catch (error) {
        console.log(error);
      }
    };
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
        {allTask && <Card allTask={allTask} />}
        {/* ============Modal============ */}
        <PopupModel
          showModal={showModal}
          setShowModal={setShowModal}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
        />
      </div>
    </>
  );
};

export default Home;
