import React, { useEffect, useState } from 'react'
import './SendMoney.css'


function SendMoney(props) {
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
      {clients.map((data) => {
        return (
        <div key={data._id}>
            <h3> {data.firstName}</h3>
            <h3>{data.lastName}</h3>
            <h3>{data.email}</h3>
        </div>
      )})}
  
    </div>
  )
}

export default SendMoney