import React from 'react'
import {useState, state} from 'react'
import userService from '../../utils/userService'


function SignIn(props) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await userService.login({...state})
      props.handle.handleLogin();
      props.history.push('/')
    }catch(err){
      console.log(err)
      alert('Login Error:', err)
    }
   
  };
    
  return (

<div className='form-create'>
  
    <h2> Sign In  </h2> 
    <form>
      <label>Email: </label>
      <input
      type="text"
      required
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password: </label>
      <input
      type="text"
      required
      value={password}
      onChange={(e) => setPassword(e.target.value)}
  
      />

      <button onClick={(e) => handleSubmit(e)}> Log In </button>

      

    </form>

</div>
)}


export default SignIn