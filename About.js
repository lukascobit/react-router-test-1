import React from 'react'
import {useHistory} from 'react-router-dom'

function About() {

    let history = useHistory()

    return (
        <div>
            <h1>About page <button onClick={()=>{
                history.push("/projects");
            }}>Projects page</button></h1>
        </div>
    )
}

export default About
