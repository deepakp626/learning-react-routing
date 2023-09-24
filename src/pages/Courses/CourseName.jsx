import React from 'react'
import { useLocation } from 'react-router-dom'

const CourseName = () => {
const {state,} = useLocation();
  return (
    <div>CourseName : {state?.name} </div>
  )
}

export default CourseName