import React from "react"


const Novelties=({novelties})=>{
    return(   <section >
        <p>NOVEDADES</p>
        {novelties && novelties.map((noveltie,i)=>{
            return(<li key={i}>{noveltie}</li>)
        })}
    </section>
    )
}

export default Novelties