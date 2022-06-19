import { signInWithGooglePopup,  createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';

import SingUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import './authentication.styles.scss';

const Authentication = () => {

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
    <div className='authentication-container'>
      
      {/* //**Code to make google auth redirect work
      <button onClick={signInWithGoogleRedirect}>Sign In With Google Button</button> */}
      <SignInForm></SignInForm>
      <SingUpForm></SingUpForm>
      
    </div>
  );

}

export default Authentication;