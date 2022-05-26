import React from 'react'
// import './ClientTableRow.css'


const ClientTableRow = (props) => {
    return (
        <tr>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.convertedTo}</td>
            <td>{props.convertedFrom}</td>
            <td>{props.amountSent}</td>
        </tr>         
    )
}

export default ClientTableRow