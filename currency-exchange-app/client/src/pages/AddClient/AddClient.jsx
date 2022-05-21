import React from 'react'
import './AddClient.css'
import {useState} from 'react'

function AddClient() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const handleClient = () => {
    fetch('http://localhost:6001/add-client')
      .then(response => {
        // handle the response
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
        <button onClick={() => handleClient()}>Add Recipient</button>
        <p>
          {firstName}
          {lastName}
          {email}
        </p>

      </form>



    </div>

  )
}

export default AddClient