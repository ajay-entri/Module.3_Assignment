import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addToCart, removeProductFromCart } from '../features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';


function ProductCard({ item }) {
    console.log(item, "items");

    const cartItems = useSelector((state) => state.cart.value)

    const dispatch = useDispatch()

    const addProductToCart = (id) => {
        alert(`${id} added to cart`)
        dispatch(addToCart(item))
    }

    const removeCart = (id) => {
        console.log(id);
        alert('Product removed from cart')
        dispatch(removeProductFromCart(item.id))
    }
    return (
        <Card >
            <Card.Img variant="top" className='productcard p-2' src={item?.image} />
            <Card.Body >
                <Card.Title>{item?.title.slice(0, 20)}</Card.Title>
                <Card.Text>
                    {item?.description.slice(0, 60) + "..."}
                </Card.Text>
                <div className="d-flex justify-content-evenly">
                    <Button variant="primary">View Product</Button>


                    {cartItems.some((product) => product.id === item.id) ?
                        <Button variant="dark" onClick={() => removeCart(item?.id)}>Remove from cart</Button> :
                        <Button variant="success" onClick={() => addProductToCart(item?.id)}>Add to cart</Button>
                    }
                </div>


            </Card.Body>
        </Card>
    );
}

export default ProductCard