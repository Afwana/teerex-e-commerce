import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
    const wishlist = useSelector((state)=>state.wishlistReducer)
    const cart = useSelector((state)=>state.cartReducer)
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary position-fixed w-100 top-0" style={{zIndex:'1'}}>
                <Container>
                    <Navbar.Brand href="#home"> TeeRex </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to="/wishlist" className='btn me-5'> <i className="fa-solid fa-heart fa-2x text-danger"> </i> <span className='text-dark fs-3 ms-1'> <sup> {wishlist?.length} </sup> </span> </Link>
                            <Link to="/cart" className='btn me-3'> <i className="fa-solid fa-cart-plus fa-2x text-success"></i> <span className='text-dark fs-3 ms-1'> <sup> {cart?.length} </sup> </span> </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header