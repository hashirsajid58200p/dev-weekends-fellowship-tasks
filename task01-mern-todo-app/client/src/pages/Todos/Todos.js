import React, { useEffect, useState } from "react";
import Navbar from "../../components/Layout/Navbar";
import todoServices from "../../Services/TodoService";
import Spinner from "../../components/Layout/Spinner";

const Todos = () => {
  const [todoStatus, setTodoStatus] = useState("");
  const [filterTask, setFilterTask] = useState([]);
  const [loading, setLoading] = useState(false);
  const [allTask, setAllTask] = useState([]);

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

  useEffect(() => {
    if (!todoStatus || todoStatus === "Select Status") {
      setFilterTask(allTask || []);
    } else {
      const statusToCompare = todoStatus.toLowerCase();
      const filtered = allTask?.filter((item) => {
        if (statusToCompare === "complete" || statusToCompare === "completed") {
          return item?.isCompleted === true;
        }
        if (statusToCompare === "incomplete") {
          return item?.isCompleted === false;
        }
        return true;
      });
      setFilterTask(filtered || []);
    }
  }, [allTask, todoStatus]);

  return (
    <>
      <Navbar />
      <div className="filter-container">
        <h4>Filter Todos by : </h4>
        <div className="filter-group">
          <select
            className="form-select"
            defaultValue="Select Status"
            onChange={(e) => {
              setTodoStatus(e.target.value);
            }}
          >
            <option value="Select Status">Select Status</option>
            <option value="Incomplete">Incomplete</option>
            <option value="Complete">Complete</option>
          </select>
        </div>
      </div>
      {/* ============== */}

      {loading && <Spinner />}
      <div className="card-container">
        {filterTask?.length === 0 ? (
          <h1 className="no-task">You have no task</h1>
        ) : (
          filterTask?.map((task, i) => (
            <div
              className="card border-primary mb-3 mt-3"
              style={{ maxWidth: "18rem" }}
              key={task?._id || i}
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
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Todos;
