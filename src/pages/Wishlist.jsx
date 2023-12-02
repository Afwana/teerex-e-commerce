import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { deleteWishlist } from '../redux/wishlistSlice';
import { addToCart } from '../redux/cartSlice';

function Wishlist() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  console.log(wishlistArray);
  const dispatch = useDispatch()
  const addToCartFromWishlist = (item)=>{
    dispatch(addToCart(item))
    dispatch(deleteWishlist(item.id))
  }
  return (
    <div style={{marginTop:'100px'}}>
      <Row className='mb-5 ms-5'>
        {
          wishlistArray?.length>0?wishlistArray.map((item,index)=>(
            <Col>
              <Card style={{ width: '18rem',height:'32rem' }}>
                <Card.Img variant="top" src={item?.thumbnail} style={{height:'250px'}} />
                <Card.Body>
                  <Card.Title> {item?.title.slice(0,20)}... </Card.Title>
                  <Card.Text>
                    <p>{item?.description.slice(0,50)}...</p>
                    <p className='fw-bolder text-dark'> $ {item?.price} </p>
                  </Card.Text>
                  <div className='d-flex justify-content-between'>
                    <Button onClick={()=>dispatch(deleteWishlist(item.id))} className='btn btn-light' style={{ border: 'none' }}><i class="fa-solid fa-trash text-danger fa-2x"></i></Button>
                    <Button onClick={()=>(addToCartFromWishlist(item))} className='btn btn-light' style={{ border: 'none' }}><i className="fa-solid fa-cart-plus text-success fa-2x"></i></Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          )) : <p className='fs-3 text-danger m-5'> Wishlist is Empty!! </p>
        }
      </Row>
    </div>
  )
}

export default Wishlist