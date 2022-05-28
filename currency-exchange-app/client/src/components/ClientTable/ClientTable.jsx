import React ,{useEffect, useState } from 'react'
import {Table} from 'react-bootstrap'
import './ClientTable.css'
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
        <div className="client-table"> 
            <Table striped variant="dark" bordered hover>
            <table className='content-table'>
            <thead>
                <tr className='active-row'>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Send Money</th>
                <th>DELETE</th>
                </tr>
            </thead>
            <tbody> 
        
            {clients.map((data) => <ClientTableRow id={data._id} firstName={data.firstName} lastName={data.lastName} email={data.email} />
            )}  
            </tbody>
            </table>
            </Table>
        </div>

    )}


 export default ClientTable