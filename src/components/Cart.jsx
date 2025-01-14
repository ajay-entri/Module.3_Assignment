import { Suspense, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
const ProductCard = React.lazy(() => import('./ProductCard'))
import { useSelector } from 'react-redux';
import Loading from './Loading';


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
                                <Suspense fallback={<Loading />}>
                                    < ProductCard item={product} />
                                </Suspense>                            </div>
                        )) :
                        <p>Cart is empty</p>
                    }
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Cart
