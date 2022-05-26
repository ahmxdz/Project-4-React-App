import React from 'react'
import './ClientTableRow.css'


const ClientTableRow = (props) => {
    return (
        <tr>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.email}</td>
            <td><button ><a href={`/send-money/${props.id}`}> Send Money</a></button></td>
        </tr>         
    )
}

export default ClientTableRow