import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import {BsBagCheckFill} from 'react-icons/bs'
import {useRouter} from 'next/router'
import { useStateContext } from '../context/StateContext'
import { runFireworks } from '../lib/utils';

const succes = () => {
    const{setCartItems,setTotalPrice,setTotalQuantities}=useStateContext();
    useEffect(() => {
      localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireworks();
      return () => {
        
      }
    }, [])
    
    return (
    <div className="success-wrapper">
        <div className="success">
        <p className="icon">
            <BsBagCheckFill/>
        </p>
        <h4>Hope you enjoy it</h4>
        <p className="email-msg">
        Check your email for the receipt
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

export default succes