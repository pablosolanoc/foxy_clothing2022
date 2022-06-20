import { Fragment, useContext} from "react";
import { Outlet, Link} from "react-router-dom";

import {ReactComponent as CrownLogo} from "../../assets/crown.svg";

import { UserContext } from "../../contexts/user.context";

import {signOutUser} from '../../utils/firebase/firebase.utils'

import CartIcon from "../../components/cart-icon/cart-icon.component";

import './navigation.styles.scss';

import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";

const Navigation = () => {
  const {currentUser, setCurrentUser} = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  
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
          <CartIcon/>
        </div>
        {isCartOpen && <CartDropdown></CartDropdown>}
      </div>
      <Outlet/>
    </Fragment>
  )
}


export default Navigation;