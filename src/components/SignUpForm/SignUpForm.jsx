import React from 'react'
import {useState, state} from 'react'

import userService from '../../utils/userService'


function SignUpForm(props) {
//   const [firstName, setFirstName] = useState('')
//   const [lastName, setLastName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [passwordConfirmation, setPasswordConfirmation] = useState('')


  const [signUp, setSignUp] = useState({
    firstName:"", 
    lastName:"", 
    email:"", 
    password:"", 
    passwordConfirmation:""
})
    const updateSignUpForm = (e) => {
        const newSignUpForm = {...signUp}

        const keyOfInputChanged = e.target.name
        const valueOfInputChanged = e.target.value

        newSignUpForm[keyOfInputChanged] = valueOfInputChanged

        setSignUp(newSignUpForm)        
    }



  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await userService.signUp({...state})
      props.handle.handleSignUp();
      props.history.push('/')
    }catch(err){
    //   props.updateMessage(err.message)
    }
   
  };
    // isFormInvalid() {
    //     return !(firstName && lastName && email && password === passwordConfirmation);
    // }

return (

    <div className='form-create'>
  
    <h2> Sign Up  </h2> 
    <form>
      <label>First Name: </label>
      <input
      type="text"
      required
      name= 'firstName'
      value={signUp.firstName}
      onChange={updateSignUpForm}
      />
      <label>Last Name: </label>
      <input
      type="text"
      required
      name= 'lastName'
      value={signUp.lastName}
      onChange={updateSignUpForm}
      />
      <label>Email: </label>
      <input
      type="email"
      required
      name= 'email'
      value={signUp.email}
      onChange={updateSignUpForm}
      />
      <label>Password: </label>
      <input
      type="password"
      required
      name= 'password'
      value={signUp.password}
      onChange={updateSignUpForm}
      />
      <label>Confirm Password: </label>
      <input
      type="password"
      required
      name= 'passwordConfirmation'
      value={signUp.passwordConfirmation}
      onChange={updateSignUpForm}
  
      />

      <button onClick={(e) => handleSubmit(e)}> Sign Up </button>

      

    </form>

    </div>
)}


export default SignUpForm