import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedLayout = () => {

  const userInfo = useSelector(state => state.userName)

  

  if (userInfo) {
    return <Outlet/>
    
  } else {
    return <Navigate to= "/"/>
  }
 
}

export default ProtectedLayout