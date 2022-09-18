import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

function Userview(user) {
    const params = useParams();
    const navigate = useNavigate();
    console.log(params);

    const[userData,setUserData] = useState({})

    useEffect(() => {
        loadUser()
    },[])

    let loadUser = async () => {
      try {
        let user = await axios.get(`https://6304ec13697408f7edbe42f1.mockapi.io/users/${params.id}`)
        setUserData(user.data)
      } catch (error) {
        
      }
    }


    let back = () => {
      navigate("/portal/users");
  }


  return (
    <>
    <div className='container'>
    <br/>
    <h2>Name - {userData.name}</h2><br/>
    <h2>Position - {userData.position}</h2><br/>
    <h2>Office - {userData.office}</h2><br/>
    <h2>Age -{userData.age}</h2><br/>
    <h2>Startdate - {userData.startdate}</h2><br/>
    <h2>Salary - {userData.salary}</h2><br/>
    <button className='btn btn-success' onClick={back}>Back</button><br/>
    </div>
    </>
  )
}

export default Userview