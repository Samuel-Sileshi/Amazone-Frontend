import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './Header.css'
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider/StateProvider';
import { auth } from '../../firebase';

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
      }
  return (
    <div className='header'>
        <Link to="/">
        <img
        className='header-logo'
        src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
        </Link>
        <div className='header-search'>
            <input className='header-search-input' type='text'/>
            <SearchIcon className='header-searchIcon'/>
        </div>
        <div className='header-nav'>
            <Link to={!user && '/login'}>
            <div onClick={handleAuthenticaton} className='header-option'>
                <span className='header-option-lineOne'>Hello {!user? 'Guest' :user.email}</span>
                <span className='header-option-lineTow'>{user ? 'Sign Out' : 'Sign In'}</span>
            </div>
            </Link>
            <Link to="/orders">
            <div className='header-option'>
                <span className='header-option-lineOne'>Return</span>
                <span className='header-option-lineTow'>& Orders</span>
            </div>
            </Link>
            <div className='header-option'>
                <span className='header-option-lineOne'>Your</span>
                <span className='header-option-lineTow'>Prime</span>
            </div>
            <Link to="/checkout">
            <div className='header-optionBasket'>
                <ShoppingBasketIcon/>
                <span className='header-optionLineTwo header-basketCount'>
                    {basket?.length}
                </span>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Header
