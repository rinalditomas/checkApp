import React, { useState } from "react"
import ListEmployees from "../Employer/ListEmployees"
import Novelties from "../Employer/Novelties"
import './employerHome.scss'

const EmployerHome = ()=>{

    const [list, setList]= useState(["jorge", "Luis","Alberto"])
    const [novelties,setNotices]=useState(["tarea 1", "trabajo2","Se debe hacer tal cosa", "reunión a las 14 hs"])

    return(
        <>
            <ListEmployees list={list}/>
            <Novelties novelties={novelties}/>
           
        </>
    )
}

export default EmployerHome