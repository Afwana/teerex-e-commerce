import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import Search from '../components/Search'
import { useDispatch } from 'react-redux'
import { addToWishlist } from '../redux/wishlistSlice'
import { addToCart } from '../redux/cartSlice'

function Home() {
    const [data, setData] = useState(null)
    const getData = () => {
        fetch(`https://dummyjson.com/products`).then((res) => {
            res.json().then(data =>
                setData(data.products))
        })
    }
    useEffect(() => {
        getData()
    }, [])
    console.log(data);
    const dispatch = useDispatch()
    return (
        <>
            <div className='d-flex justify-content-center mt-5'>
                <Search />
            </div>
            <div className='m-5'>
                <Row className='mb-3'>
                    {
                        data?.length > 0 ? data.map((item, index) => (
                            <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
                                <Card style={{ width: '18rem',height:'30rem' }}>
                                    <Card.Img variant="top" style={{height:'250px'}} src={item?.thumbnail} />
                                    <Card.Body>
                                        <Card.Title> {item?.title.slice(0,20)}... </Card.Title>
                                        <Card.Text>
                                            <p>{item?.description.slice(0,50)}...</p>
                                            <p className='fw-bolder text-dark'> $ {item?.price} </p>
                                        </Card.Text>
                                        <Card.Footer className='d-flex justify-content-between'>
                                            <Button variant="light" onClick={()=>dispatch(addToWishlist(item))}> <i className="fa-solid fa-heart fa-2x text-danger"></i> </Button>
                                            <Button className='btn btn-light' variant='light' onClick={()=>dispatch(addToCart(item))}><i className="fa-solid fa-cart-plus fa-2x text-success"></i></Button>
                                        </Card.Footer>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )) : <p className='fs-4 text-danger'> Products are not available </p>
                    }
                </Row>
            </div>
        </>
    )
}

export default Home