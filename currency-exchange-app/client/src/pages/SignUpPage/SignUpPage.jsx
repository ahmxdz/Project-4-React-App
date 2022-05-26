import React from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm'

function SignUpPage(props) {
  return (
    <div>
        <SignUpForm
        {...props}
        handleSignUp={props.handleSignUp}
        update={props.updateMessage}
        
        />
    </div>
  )
}

export default SignUpPage