import React from 'react'
import './Checkout.css'
import SubTotal from '../SubTotal/SubTotal'
import CheckProduct from '../CheckProduct/CheckProduct'
import { useStateValue } from '../StateProvider/StateProvider'

function Checkout() {
  const [{basket}, dispatch]= useStateValue();
  return (
    <div className='checkout'>
        <div className='checkout-left'>
            <img
            className='checkout-ad'
            src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
            alt=''
            />
            <h3>Hello</h3>
            <h2 className='checkout-title'>Your Shopping Basket</h2>
            {basket.map(item => (
            <CheckProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
        <div className='checkout-right'>
            <SubTotal/>
        </div>
    </div>
  )
}

export default Checkout