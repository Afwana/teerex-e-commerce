import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart, emptyCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const navigate = useNavigate()
  const cartArray = useSelector((state)=>state.cartReducer)
  console.log(cartArray);
  const dispatch = useDispatch()
  const [total,setTotal] = useState(0)
  const totalAmount = ()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map(product=>product.price).reduce((p1,p2)=>p1+p2))
    }
    else{
      setTotal(0)
    }
  }

  useEffect(()=>{
    totalAmount()
  },[cartArray])

  const checkOut = () =>{
    alert(`Order has successfully placed!!! 
    Thank you for purchasing with Us...`)
    dispatch(emptyCart())
    navigate('/')
  }
  
  return (
    <div style={{marginTop:'100px'}}>
        {
          cartArray?.length>0?
          <>
            <div className='row ms-5 me-5'>
              <div className='col-lg-8'>
                <table className='container mt-5 table border rounded shadow p-5'>
                  <thead>
                    <tr className='text-center'>
                      <th> # </th>
                      <th> Product Name </th>
                      <th> Image </th>
                      <th> Price </th>
                      <th> Action </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cartArray.map((item,index)=>(
                        <tr key={index} className='text-center'>
                          <td className='p-5'> {index+1} </td>
                          <td className='p-5'> {item.title} </td>
                          <td> <img width={'100px'} height={'100px'} src={item.thumbnail} alt="" /> </td>
                          <td className='p-5'> $ {item.price} </td>
                          <td className='p-5'> 
                            <button onClick={()=>dispatch(deleteCart(item.id))} className='btn'> <i class="fa-solid fa-trash text-danger"> </i></button> 
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
              <div className="col-lg-1"></div>
              <div className='col-lg-3'>
                    <h3 className=' mt-5 fw-bolder text-primary mb-5 text-center'> Cart Summary </h3>
                    <h5 className='text-center'> Total Products : <span> {cartArray.length} </span> </h5>
                    <h4 className='text-center mt-4'> Total : <span className='fw-bolder text-danger'> $ {total} </span> </h4>
                    <div className='p-5 ms-2'><button onClick={checkOut} className='btn btn-success w-100'> Check Out </button></div>
              </div>
            </div>
          </>
          : <p className='fs-3 text-danger m-5'> Cart is Empty!! </p>
        }
    </div>
  )
}

export default Cart