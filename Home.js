import React from 'react'
import {useParams} from 'react-router-dom';

function Home() {
    let { name } = useParams()
    return (
        <div>
            <h1>Home page </h1>
        </div>
    )
}

export default Home
