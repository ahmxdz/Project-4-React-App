import React ,{useEffect, useState } from 'react'
import {Table} from 'react-bootstrap'
import ClientTableRow from '../../components/ClientTableRow/ClientTableRow'


const ClientTable = (props) => {

    const [clients, setClients] = useState([])
      
        useEffect(() =>{
          fetch('/api/clients')
          .then(response =>{
            return response.json()
          }).then(response => { 
            setClients(response.data)
          }).catch(err =>{
            console.log(err)
          })
        },[])

    return (
        <div> 
            <Table striped variant="dark" bordered hover>
            <thead>
                <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                </tr>
            </thead>
            <tbody> 
        
            {clients.map((data) => <ClientTableRow firstName={data.firstName} lastName={data.lastName} email={data.email}/>
            )}  
            </tbody>
            </Table>
        </div>

    )}


 export default ClientTable