import React, { useEffect, useState } from 'react'
import { getpatient } from '../services/ApiService'

export default function PatientList() {
  const [patients,setPatients] = useState([])

  useEffect(()=>{
    let mount = true
    getpatient()
    .then(res=>{
      console.log("res from api", res)
      setPatients(res)
      return() => mount =false
    })    
  }, [])
  return (
    <>
        <h3>Patient list</h3>
    </>
  )
}
