import { useEffect } from 'react';
import {auth, signInWithGooglePopup, signInWithGoogleRedirect,  createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';

import { getRedirectResult } from 'firebase/auth';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {

  const logUserWithGooglePopUp = async () => {
    const {user} = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  //**Code to make google auth redirect work
  // const redirectResultWhenMounting = async () => {
  //   const response = await getRedirectResult(auth);
  //   if(response){
  //     const userDocRef = await createUserDocumentFromAuth(response.user);
  //   }
  // }

  // useEffect( () => {
  //   redirectResultWhenMounting();
  // }, []);
  //**Code to make google auth redirect work

  // const logGoogleRedirectUser = async () => { Useless function as result never returns to continue 
  //   const {user} = await signInWithGoogleRedirect();
  //   createUserDocumentFromAuth(user);
  // };

  return(
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logUserWithGooglePopUp}>Sign In With Google Button</button>
      {/* //**Code to make google auth redirect work
      <button onClick={signInWithGoogleRedirect}>Sign In With Google Button</button> */}
      <SignUpForm></SignUpForm>
    </div>
  );

}

export default SignIn;