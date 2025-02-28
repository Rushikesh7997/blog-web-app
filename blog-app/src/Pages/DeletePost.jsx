import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/userContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const DeletePost = ({postId:id}) => {

  const navigate = useNavigate(); 
  const location = useLocation();

  const {currentUser} = useContext(UserContext);
  const token = currentUser?.token;

  // redirect to login page for any user who isn't logged in
  useEffect(()=>{
    if(!token){
      navigate('/login')
    }
  },[])

  const removePost = async ()=>{
    try{
      const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/posts/${id}`, {credentials:true, headers:{Authorization: `Bearer ${token}`}})
      if(response.status == 200){
        if(location.pathname == `/myposts/${currentUser.id}`){
          navigate(0);
        }
        else{
          return navigate('/')
        }
      }
    } catch (err) {
      console.log(err)
      console.log("Post Couldn't delete")
    }
}

  return (
    <Link className='btn sm danger' onClick={()=>removePost(id)}>Delete</Link>
  )
}
