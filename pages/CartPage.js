import './CartPage.css';
import Cart from '../components/Cart';

const CartPage = ({ cartItems, removeFromCart, getTotalPrice }) => {
  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1 className="cart-title">Your Shopping Cart</h1>
        <Cart
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          total={getTotalPrice()}
        />
      </div>
    </div>
  );
};

export default CartPage;