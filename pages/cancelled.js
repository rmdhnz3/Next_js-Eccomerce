import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import {ImCancelCircle} from 'react-icons/im'
import { useStateContext } from '../context/StateContext'
import { Snow } from '../lib/utils'

const cancelled = () => {
    const{setCartItems,setTotalPrice,setTotalQuantities} = useStateContext();
    
    useEffect(() => {
      localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        Snow();
      return () => {
        
      }
    }, [])
    
    return (
    <div className="success-wrapper">
        <div className="success">
        <p className="icon">
            <ImCancelCircle/>
        </p>
        <h4>Your Payment Cancelled</h4>
        <p className="email-msg">
        Your payment cancelled due to your request
        </p>
        <p className="description">
            if you have any problems / questions , feel free to email
        <a className="email" href="mailto:masterofleaf123@gmail.com">masterofleaf123@gmail.com</a>
        </p>
        <Link href="/">
            <button type="button" width="250px" className="btn">
                Continue Shopping
            </button>
        </Link>
        </div>
    </div>
  )
}

export default cancelled