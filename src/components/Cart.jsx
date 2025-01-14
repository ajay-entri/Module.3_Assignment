import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';

function Cart() {
    const cartItems = useSelector((state) => state.cart.value)
    console.log(cartItems, "cartitems");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Cart Items {cartItems.length > 0 && cartItems.length}
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart Items</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {cartItems.length ?
                        cartItems.map((product) => (
                            <div className="mb-3">
                                < ProductCard item={product} />
                            </div>
                        )) :
                        <p>Cart is empty</p>
                    }
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Cart
