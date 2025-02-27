import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom';

export const Logout = () => {
  const {setCurrentUser} = useContext(UserContext);
  const navigate = useNavigate();

  setCurrentUser(null)
  navigate('/login')
  return (
    <></>
  )
}
