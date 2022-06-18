
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  Firestore
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD40JpxP6TxKJAOGWPmHddYE3WKWvAPsEk",
  authDomain: "foxy-db2022.firebaseapp.com",
  projectId: "foxy-db2022",
  storageBucket: "foxy-db2022.appspot.com",
  messagingSenderId: "427657746834",
  appId: "1:427657746834:web:f8d3e298c59b10b604094b"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {

  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);
  console.log(userSnapShot.exists());

  //if user data exists
    //do not create doc
  //if it does not exists
    //create doc

  if(!userSnapShot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    }catch(error){
      console.log("Error creating user ", error.message);
    }
  }
  
  return userDocRef;
}