import React from "react"


const ListEmployees=({list})=>{
    return(    <section>
        
        {list && list.map((emp,i)=>{
            return(
                <li key={i}>
                   {emp}
                </li>
            )
        })}
        </section>)
}

export default ListEmployees