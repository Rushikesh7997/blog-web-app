import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';

export const DeletePost = () => {

  const navigate = useNavigate(); 

  const {currentUser} = useContext(UserContext);
  const token = currentUser?.token;

  // redirect to login page for any user who isn't logged in
  useEffect(()=>{
    if(!token){
      navigate('/login')
    }
  },[])

  return (
    <div>DeletePost</div>
  )
}
