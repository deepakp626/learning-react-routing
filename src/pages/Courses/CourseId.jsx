import React from 'react'
import { useParams } from 'react-router-dom'

const CourseId = () => {
    const {courseId} = useParams()
  return (
    <>
    <div>CourseId : {courseId}</div>
    </>
  )
}

export default CourseId