import React from "react";
import { useMydata } from "../../TodoProvider.js/TodoProvider";

const Home = () => {
  const { MoveTodo } = useMydata();
  return (
    <div>
      <div className="grid">
        <div>
          <img
            src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="pic"
          />
        </div>
        <div>
          <h3 className="todo">
            Hi All Welcome to Chating Full stack Application
          </h3>
          <p className="todo">
            Secret is an encrypted chat social tool, providing a more secure,
            reliable and simple chat tool. Major function: - End-to-End
            Encryption: Device End-to-End Encryption to Protect Privacy. - Chat
            message: anytime, anywhere to send friends or group news, instant
            communication.
          </p>
          <button className="btn" onClick={MoveTodo}>
            Move Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
