import { Fragment, useContext} from "react";
import { Outlet, Link} from "react-router-dom";

import {ReactComponent as CrownLogo} from "../../assets/crown.svg";

import { UserContext } from "../../contexts/user.context";

import {signOutUser} from '../../utils/firebase/firebase.utils'

import './navigation.styles.scss';

const Navigation = () => {
  const {currentUser, setCurrentUser} = useContext(UserContext);

  const signOutHandler = async () => {
    setCurrentUser(null);
  }


  return(
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo"></CrownLogo>
        </Link>
        
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop  
          </Link>
          {!currentUser ? <Link className="nav-link" to="/auth">
            Sign In
          </Link>: <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>}
        </div>
      </div>
      <Outlet/>
    </Fragment>
  )
}


export default Navigation;