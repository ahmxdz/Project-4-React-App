import React from 'react'
import './AddClient.css'
import {useState} from 'react'
// import SendMoney from '../SendMoney/SendMoney'

function AddClient(props) {


  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const handleClient = (e) => {
    e.preventDefault()
    console.log('reaching this line')
    fetch('/api/clients', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          firstName, lastName, email
        }),
    })
      .then(response => {
        props.history.push('/send-money')
        console.log(response);
      })
      .catch(error => {
        // handle the error
      });
  };

  return (
    <div className='form-create'>
      <h2> Add a recipient </h2> 
      <form>
        <label>First Name: </label>
        <input
        type="text"
        required
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        />
        <label>Last Name: </label>
        <input
        type="text"
        required
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        />
        <label>Email Address: </label>
        <input
        type="text"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={(e) => handleClient(e)}>Add Recipient</button>
        
         {/* <SendMoney firstName={firstName} lastName={lastName} email={email}/> */}
        

      </form>



    </div>

  )
}

export default AddClient