import { Button } from '@chakra-ui/react'
import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Cources = () => {
  const navigation  = useNavigate();
  return (
    <div>Cources
      <Link to="/courses/name" state={{name:"React JS"}}>
      <Button
      //  onClick={()=>{
      //   navigation("/courses/name",{state:{name:"React JS"}})
      // }}
      >pass data</Button>
      </Link>
    </div>
  )
}

export default Cources