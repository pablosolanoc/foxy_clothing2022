import {signInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';


const SignIn = () => {

  const logUserWithGoogle = async () => {
    const {user} = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  return(
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logUserWithGoogle}>Sign In With Google Button</button>
    </div>
  );

}

export default SignIn;