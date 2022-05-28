import React, {useEffect, useState} from 'react'
import './ClientTableRow.css'


const ClientTableRow = (props) => {
//     const [deleteClient, setDeleteClient] = useState(null)
//    useEffect(() =>{
//        async function handleClientDelete(_id){
//            await fetch(`/api/client/${_id}`, {
//                method: 'DELETE',
//            }).then(() => setDeleteClient('delete successful'))
//        }
//         handleClientDelete()
//    }, [])
    return (
        <tr>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.email}</td>
            <td><button><a href={`/send-money/${props.id}`} className="send-money-btn"> Send Money</a></button></td>
            <td><button className="delete-money-btn">DELETE</button></td>
        </tr>         
    )
}

export default ClientTableRow