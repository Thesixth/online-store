import './CartScreen.css';
import {useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart} from '../redux/actions/cartActions';

import CartItem from './CartItem';

const CartScreen = () => {
    const dispatch = useDispatch();

    const cart = useSelector( (state) => state.cart);
    const { cartItems } = cart;

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty));
    };

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    }

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
    };

    const getCartSubtotal = () => {
        return cartItems.reduce((price, item) => item.price * item.qty + price, 0)
    };

    return (
        <div className='cartscreen'>
            <div className="cartscreen__left">
                <h2>Shopping Cart</h2>
                { cartItems.length === 0 ? (
                    <div>
                        Your cart is empty <Link to='/'>Go to shop</Link>
                    </div>
                ) : cartItems.map(item => (
                <CartItem 
                key={item.product}
                item={item} 
                qtyChangeHandler={qtyChangeHandler} 
                removeFromCartHandler={removeFromCartHandler}
                /> ))}
            </div>
            <div className="cartscreen__right">
                <div className="cartscree__info">
                    <p>Subtotal ({getCartCount()})</p>
                    <p>{getCartSubtotal().toFixed(2)}</p>
                </div>
                <div>
                    <button>Proceed To Checkout</button>
                </div>

            </div>
        </div>
    )
};

export default CartScreen;
