import React from 'react'
import './ClientTableRow.css'


const ClientTableRow = (props) => {
    return (
        <tr>
            <td><a href='/'> {props.firstName}</a></td>
            <td><a href='/'>{props.lastName}</a></td>
            <td><a href='/'>{props.email}</a></td>
        </tr>         
    )
}

export default ClientTableRow