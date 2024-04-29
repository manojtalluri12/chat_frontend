import axios from "axios";
import { createContext, useContext, useState } from "react";

import {  toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const nav=useNavigate()
  const [username, setusername] = useState("");
  const [todo,settodo]=useState('')
  const [profile,setprofile]=useState([])
  const [task,settask]=useState([])
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [token,settoken]=useState(null)
  const [menu,setmenu]=useState(false)
  const sucess = (message) =>toast.success(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
   
    });
    const error = (message) =>toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      
      });
  const handleLogin = (e) => {
    e.preventDefault();
    axios
    .post("https://chatapp-2-442w.onrender.com/login", {
      email,
      password,
    })
    .then((res) => {
      settoken(res.data.token);
     nav('/')
    })
    .catch((err) => {
      error(err.response.data.message);
    });
  };
  const hanldeSignUp = (e) => {
    e.preventDefault();
    axios
      .post("https://chatapp-2-442w.onrender.com/signup", {
        username,
        email,
        password,
        confirmpassword,
      })
      .then((res) => {
        sucess(res.data.message);
        nav('/login')
      })
      .catch((err) => {
        error(err.response.data.message);
      });
  };
  const handleLogout=()=>{
    settoken(null)
    return nav('/login')
  }
  const handleDeteAccount=(id)=>{
    axios.delete(`https://chatapp-2-442w.onrender.com/delete/${id}`).then((res)=>{sucess(res.data.message); settoken(null)})
    console.log(id);
   
  }
  
  const handleAdd=()=>{
    axios.post('https://chatapp-2-442w.onrender.com/todo',
     {
      task:todo
    },{ headers:{
      'x-token':token
    }
  },).then((res)=>{sucess(res.data.message)}).catch((err)=>{
    error(err.response.data.message);
  })
 settodo('')
  }
  const MoveTodo=()=>{
    if(token == null){
      return nav('/login')
    }
    else{
      return nav('/chat')
    }
  }
  const handleDeleteTodo=(id)=>{
    axios.delete(`https://chatapp-2-442w.onrender.com/deletetodo/${id}`).then((res)=>{sucess(res.data.message)}).catch((err)=>{
      error(err.response.data.message);
    })
  }
  const handlemenu=()=>{
    setmenu((s)=>!s)
  }
  return (
    <TodoContext.Provider
      value={{
        username,
        setusername,
        email,
        setemail,
        password,
        setpassword,
        confirmpassword,
        setconfirmpassword,
        handleLogin,
        hanldeSignUp,
        token,settoken,
        handleLogout,
        profile,setprofile,
        handleDeteAccount,
        handleAdd,todo,settodo,
        settask,task,
        MoveTodo,
        handleDeleteTodo,
        handlemenu,
        menu,setmenu
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

const useMydata = () => {
  const context = useContext(TodoContext);
  return context;
};

export { TodoProvider, useMydata };
