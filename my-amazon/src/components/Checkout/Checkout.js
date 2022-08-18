import React from 'react';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import Subtotal from '../Subtotal/Subtotal';
import "./Checkout.css";

const Checkout = () => {

    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
                <img
                className="checkout_ad"
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB42392668_.jpg"
                alt=""
                />
                <div>

                    <h3 className="checkout_customer">Hello, {user ? `${user?.email.split("@")[0]}` : 'Guest'}</h3>
                    <h2 className="checkout_title">Your Shopping Basket</h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}


                </div>
            </div>

            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;
