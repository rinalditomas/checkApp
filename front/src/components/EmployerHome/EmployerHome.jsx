import React, { useState } from "react"



const EmployerHome = ()=>{

    const [list, setList]= useState(["jorge", "Luis","Alberto"])

    return(
        <div>
        
            {list.map((emp,i)=>{
                return(
                    <li key={i}>
                       {emp}
                    </li>
                )
            })}
        </div>
    )
}

export default EmployerHome