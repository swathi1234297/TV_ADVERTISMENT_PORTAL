import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from './ProjectCard';
import CardDeck from 'react-bootstrap/CardDeck'

const BrandsDashUI = (props) => {

    const [tvchannel, setTvchannel] = useState([])

    useEffect(() => {
        fetchProjectsFromServer()

    }, [])

    return (
        <div  style={{   backgroundImage: "url(" + "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgIBwgHBwgHBwcHBwoHBwcHBw8ICQgKFREWIiAREx8YHCggGBolGx8fITEhJSkrLi4uFx8zODMtNygtOisBCgoKDQ0NDg0PECsZFRkrKysrLSs3KysrKysrKysrKysrKysrKysrKysrKysrKysrKystKysrKysrLS0rKys3K//AABEIAKABOwMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAgEFB//EABYQAQEBAAAAAAAAAAAAAAAAAAABEf/EABoBAQADAQEBAAAAAAAAAAAAAAABAgQDBgX/xAAXEQEBAQEAAAAAAAAAAAAAAAAAAQIR/9oADAMBAAIRAxEAPwD1QBxfSAAAAAAAAAAAAAAAAAAAAAAAAGyEipE8V1rjJFSEipFpGfWyRUhIqReRn1tkipGyNkWkZ9bJFSEjV5HDWgBKgADngMb0gAAAAAAAAAAAAAAAAAAAAAA2RsipFpHPWmSKkJFSLSOGtkipCRUi0jNrbJFSEipF5GfWyRUhgs4XXQBKAAAAHPAY3pAAAAAAAAAAAAAAAAAAAGyJLWSKkbI2RMjlrZIqQkVIvIz62SNkbIqRaRn1tkipCRUi0jNrZI0FnK3oAlAAAAAADngMb0gAAAAAAAAAAAAAAAACpEot4yRUhIqRaRx1skVISKkWkZ9bZIqRsjZF5GfWyRUhIqRaRn1skAS5ACQAAAAAAABzwGN6QAAAAAAAAAAAAAAJGyNkTxW64SKkJFSLSOGtkjZGyKkXkZ9bZIqQkVItIz62SKkJGryM+tACVAAAAAAAAAAAAHPAY3pAAAAAAAAAAAABshIqRaRTWiRUhIqRaRn1tkipGyKkWkZ9bZIqQkVIvIz62SNkbgtxwuugCVQAAAAAAAAAAAAAHPAY3pAAAAAAAAAGyJGSKkJFSJkctbJFSEipFpGfW2SKkbI2ReRn1skVISKkWkZ9bJGgs429AEoAAAAAAAAAAAAAAAAc8BjekAAAAAAAbIlFvCRUhIqRaRx1skbI2RUi0jPrbJFSEipFpGfWyRUhIqReRn1tkjQS5WgCQAAAAAAAAAAAAAAAAABzwGN6QAAAAMJFSJ4rdcJFSEipFpHHW2SKkbIqReRm1tkipCRUi0jPrZI2RsjVpGfWgBZQAAAAAAAAAAAAAAAAAAAAABzwGN6QAAbISKkTIprRI2RsipF5HDW2SKkbI2RaRm1skVISKkXkZ9bZIqRsgtxw1roAlUAAAAAAAAAAAAAAAAAAAAAAAB//2Q==" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat' }}>
            <CardDeck>
                {tvchannel.map(projectData =>
                    <ProjectCard key={projectData._id} projectData={projectData} />
                )}
            </CardDeck>
        </div >



    )

    function fetchProjectsFromServer() {
        console.log('In fetchProjectsFromServer ')
        fetch('/api/consumer/getAllProjects')
            .then(response => response.json())
            .then(data => {
                setTvchannel(data)
            })
            .catch(err => console.log('Error when calling api : ' + err))
    }
}

export default BrandsDashUI
