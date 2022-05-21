import React from 'react'
import './SendMoney.css'


function SendMoney() {
  fetch("http://localhost:6001/add-client")
    .then(response => {
        // handle the response
    })
    .catch(error => {
        // handle the error
    });
  return (
    <div>
      

    </div>
  )
}

export default SendMoney