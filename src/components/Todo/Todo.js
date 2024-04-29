import React, { useEffect, useState } from "react";
import { useMydata } from "../../TodoProvider.js/TodoProvider";
import { useNavigate } from "react-router-dom";
import Moment from "react-moment";
import { FaTelegramPlane } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";
//import { PiTelegramLogo } from "react-icons/pi";
import axios from "axios";
const Todo = () => {
  const { token, handleAdd, todo, settodo, settask, task, handleDeleteTodo } =
    useMydata();
  const errors = (message) =>
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const nav = useNavigate();
  useEffect(() => {
    axios
      .get("https://chatapp-2-442w.onrender.com/gettodo", {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => {
        settask(res.data.data);
      })
      .catch((error) => {
        errors(error.response.data.message);
        return nav("/login");
      });
  }, [task]);
  if (token == null) {
    return nav("/login");
  }
  return (
    <div>
      <div className="flex">
        <input
          type="text"
          className="input"
          onChange={(e) => settodo(e.target.value)}
        />
        <div>
          <FaTelegramPlane size={20} onClick={handleAdd} />
        </div>
      </div>
      <div>
        {task.map((each) => {
          return (
            <div key={each._id} className="card grids">
              <div>
                <h3>{each.username}</h3>
              </div>
              <div className="flex">
                <div>
                  <p className="width">{each.task}</p>
                  <p className="size">
                    {" "}
                    <Moment toNow>{each.updatedAt}</Moment>{" "}
                  </p>
                </div>
                <div>
                  <MdDelete
                    size={20}
                    onClick={() => handleDeleteTodo(each._id)}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
