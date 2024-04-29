import React, { useEffect } from 'react'
import { useMydata } from '../../TodoProvider.js/TodoProvider'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';
const Profile = () => {
    const {token,profile,setprofile,handleDeteAccount}=useMydata()
    const nav=useNavigate()
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
    useEffect(()=>{
      try {
        axios.get('https://chatapp-2-442w.onrender.com/profile',{
        headers:{
          "x-token":token
        }
      }).then((res)=>setprofile(res.data.exist
      )).catch((error)=>{
        errors(error.response.data.message)
        return nav('/login')
      })
      } catch (error) {
        errors(error.response.data.message)
        
      }

      
    },[])
    if(token == null){
        return nav('/login')
    }
  return (
    <div className='form'>
      <h1>My profile</h1>
      <div className='form'>
      <input value={profile.username} className='input'/>
      <input value={profile.email} className='input'/>
      <button className='red' onClick={()=>handleDeteAccount(profile._id)}>Delete Account</button>
      </div>

    </div>
  )
}

export default Profile
