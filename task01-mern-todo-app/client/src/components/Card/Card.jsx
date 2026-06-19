import React, { useState } from "react";
import EditTodo from "../Layout/EditTodo";
import todoServices from "../../Services/TodoService";
import toast from "react-hot-toast";
import { getErrorMessage } from "../../utils/ErrorMessage";

const Card = ({ allTask, getUserTask }) => {
  const [selectedTask, setSelectedTask] = useState(null);

  // delete handler
  const handleDelete = async (id) => {
    try {
      await todoServices.deleteTodo(id);
      toast.success("Task deleted successfully");
      getUserTask();
    } catch (error) {
      console.log(error);
      toast.error(getErrorMessage(error));
    }
  };
  return (
    <>
      <div className="card-container">
        {allTask?.map((task, i) => (
          <React.Fragment key={task?._id || i}>
            <div
              className="card border-primary mb-3 mt-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-header">
                <div className="chead">
                  <h6>{task?.title?.substring(0, 10)}</h6>
                  <h6
                    className={
                      task?.isCompleted === true ? "task-cmp" : "task-incmp"
                    }
                  >
                    {task?.isCompleted === true ? "Completed" : "Incomplete"}
                  </h6>
                </div>
              </div>
              <div className="card-body">
                <h6 style={{ fontWeight: "bold" }}>{task?.title}</h6>
                <p className="card-text">{task?.description}</p>
                <h6>Date : {task?.createdAt?.substring(0, 10)}</h6>
              </div>
              <div className="card-footer bg-transparent border-primary">
                <button
                  className="btn btn-warning"
                  title="Edit"
                  onClick={() => setSelectedTask(task)}
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button
                  className="btn btn-danger ms-2"
                  title="Delete Task"
                  onClick={() => handleDelete(task?._id)}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
      {selectedTask && (
        <EditTodo
          task={selectedTask}
          setShowModal={() => setSelectedTask(null)}
          getUserTask={getUserTask}
        />
      )}
    </>
  );
};

export default Card;
