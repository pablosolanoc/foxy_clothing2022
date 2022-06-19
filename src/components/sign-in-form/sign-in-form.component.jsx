import {useState, useContext} from 'react';

import {signInWithGooglePopup, createUserDocumentFromAuth, signInUserWithEmailAndPassword} from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component';

import './sign-in-form.styles.scss';

import Button from '../button/button.component';

import {UserContext} from '../../contexts/user.context';

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password} = formFields;

  const {currentUser, setCurrentUser} = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormFields({...formFields, [name]: value});
  }

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();

  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try{
      await signInUserWithEmailAndPassword(email, password);
      // setCurrentUser(user);
    }catch(error){
      
      switch(error.code){
        case 'auth/wrong-password':
          alert('Incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('No user associated with this email ');
          break;
        default:
          console.log(error);
      }
      
    
      console.log(error);
    }
    
    resetFormFields();
  }

  return(
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <h1>Sign In with your email and password</h1>
      <form onSubmit={handleSubmit}>
        
        <FormInput type="email" required name="email" onChange={handleChange} value={email} label="Email"></FormInput>

        
        <FormInput type="password" required name="password" onChange={handleChange} value={password} label="Password"></FormInput>

        <div className='buttons-container'>
          <Button buttonType="" type="submit">Sign In</Button>
          <Button buttonType="google" type="button" onClick={signInWithGoogle}>Google Sign In</Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm;