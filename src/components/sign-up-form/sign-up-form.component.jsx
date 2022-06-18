import {useState} from 'react';

import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component';

import './sign-up-form.styles.scss';

import Button from '../button/button.component';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUpForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {displayName, email, password, confirmPassword} = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormFields({...formFields, [name]: value});
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try{
      const response = await createAuthUserWithEmailAndPassword(email, password, confirmPassword);
      const {user} = response;
    

      const userDoc = await createUserDocumentFromAuth(user, {displayName});
      
    }catch(error){
      if(error.code === 'auth/email-already-in-use'){
        alert('That email is already in use');
      }
      console.log(error);
    }

    resetFormFields();
  }

  return(
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <h1>Sign Up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        
        <FormInput type="text" required name="displayName" onChange={handleChange} value={displayName} label="Display Name"></FormInput>

        
        <FormInput type="email" required name="email" onChange={handleChange} value={email} label="Email"></FormInput>

        
        <FormInput type="password" required name="password" onChange={handleChange} value={password} label="Password"></FormInput>

        
        <FormInput type="password" required name="confirmPassword" onChange={handleChange} value={confirmPassword} label="Confirm Password"></FormInput>

        <Button buttonType="" type="submit">Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUpForm;