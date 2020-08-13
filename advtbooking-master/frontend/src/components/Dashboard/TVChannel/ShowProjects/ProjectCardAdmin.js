import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const ProjectCardAdmin = (props) => {

    return (
        <div style={{   backgroundImage: "url(" + "https://static.vecteezy.com/system/resources/thumbnails/000/407/606/small/v363-aew-44-newyearsalebadge.jpg" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat' }}>

            <Card style={{ width: '28rem' }}>
                
                <Card.Body>
                    <Card.Title>{props.projectData.channelName}</Card.Title>
                    <Card.Img variant="top" src={'../' + props.projectData.imageName} style={{ padding: 10 }} />
                    <Card.Subtitle className="mb-2 text-muted">Pricing Starts @ ₹ {props.projectData.bannerAdvtPrice}</Card.Subtitle>
                    <br /><br />
              
                </Card.Body>
                <Card.Footer style={{backgroundColor: '#919191' }}>
                    <small style={{color: '#fff' }}>Channel TRP : {props.projectData.channelTRP}</small>&nbsp;&nbsp;
                    <Link to={{
                        pathname: '/tvChannelDashboard/showProjects/modal/modifyProject',
                        projectData: props.projectData
                    }}><Button variant="danger">Modify Details</Button></Link>
                
                </Card.Footer>
            </Card>
        </div>
    )
}

export default ProjectCardAdmin
