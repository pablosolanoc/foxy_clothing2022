import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import { useNavigate } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartDropdown = () => {

  const {cartItems} = useContext(CartContext);

  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate('/checkout');
  }

  return(
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map(item => <CartItem cartItem={item}></CartItem>)}
      </div>
      <Button onClick={goToCheckout}>GOT TO CHECKOUT</Button>
    </div>
  )
};

export default CartDropdown;