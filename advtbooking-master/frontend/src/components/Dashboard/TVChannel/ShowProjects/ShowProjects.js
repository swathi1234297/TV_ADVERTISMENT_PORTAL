import React, { useState, useEffect } from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import auth from '../../../Home/CommonComponents/Auth';
import ProjectCardAdmin from './ProjectCardAdmin';

const ShowProjects = () => {

    const [tvchannel, setTvchannel] = useState([])

    useEffect(() => {
        fetchProjectsFromServer()

    }, [])

    return (
        <div  style={{   backgroundImage: "url(" + "https://images.pexels.com/photos/210552/pexels-photo-210552.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat' }}>
        <CardDeck style={{ margin: 30 }}>
            {tvchannel.map(projectData =>
                <ProjectCardAdmin key={projectData._id} projectData={projectData} />
            )}
        </CardDeck>
        </div >
    )

    function fetchProjectsFromServer() {

        console.log('In fetchProjectsFromServer ')
        fetch('/api/admin/getMyProjects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'email': auth.userEmail })
        })
            .then(response => response.json())
            .then(data => {
                console.log('data retrieved ', data)
                setTvchannel(data)
            })
            .catch(err => console.log('Error when calling api : ' + err))
    }
}

export default ShowProjects
