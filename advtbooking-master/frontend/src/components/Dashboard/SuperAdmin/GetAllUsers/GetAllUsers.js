import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
const GetAllUsers = () => {

    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        getAllUsers()
    }, [])

    return (
        
        <div style={{   backgroundImage: "url(" + "https://static.vecteezy.com/system/resources/thumbnails/000/407/606/small/v363-aew-44-newyearsalebadge.jpg" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat' }}>
               <center> 
               <Card style={{ width: '38rem',backgroundColor: '#919191' ,marginTop:'-470px' }}>
               <Card.Body>
               <Card.Title>Get Users </Card.Title>
               <Table striped bordered hover size="sm">
                   <thead>
                       <tr>
                       <th>User Name</th>
                       <th>Email</th>
                       <th>Role</th>
                       </tr>
                   </thead>
                   <tbody style={{ backgroundColor: '#fff' }}>
                       <tr>
                       <td>
                           <ol>
                           {allUsers.map(user =>
                            <li key={user._id}>{user.name}</li>
                            )}
                           </ol>
                       </td>
                       <td>
                       {allUsers.map(user =>
                            <li key={user._id}> {user.email}</li>
                            )}
                       </td>
                       <td>
                       {allUsers.map(user =>
                            <li key={user._id}> {user.role}</li>
                            )}
                       </td>
                       </tr>
                   </tbody>
               </Table>
               </Card.Body>
               </Card>
               </center> 
           </div>
    )

    async function getAllUsers() {
        console.log('In SUperAdmin getAllUsers ')
        fetch('/api/superAdmin/getAllUsers')
            .then(response => response.json())
            .then(data => {
                setAllUsers(data)
            })
            .catch(err => console.log('Error when calling api : ' + err))
    }
}

export default GetAllUsers
