import React from 'react';
import { Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { logoutUser } from '../slices/authSlice';
import { toast } from 'react-toastify';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FiSearch, FiUserPlus, FiLogIn, FiShoppingCart } from 'react-icons/fi';
import SlidingText from './textslider';


const SlidingTextWrapper = styled.div`
  width: 100%; // Adjust the width as necessary
`;
const Header = () => {
  const dispatch = useDispatch();
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  return (
    <HeaderWrapper>
      <SlidingTextWrapper>
            <SlidingText />
          </SlidingTextWrapper>
      <TopHeader>
        <BrandAndSocial>
        
          <SocialIcons>
            <a href="https://www.facebook.com"><FaFacebookF /></a>
            <a href="https://www.twitter.com"><FaTwitter /></a>
            <a href="https://www.instagram.com"><FaInstagram /></a>
          </SocialIcons>
        </BrandAndSocial>
        <SearchBar>
          <input type="text" placeholder="Search products" />
          <button type="submit"><FiSearch /></button>
        </SearchBar>
        <UserActions>
          <div
            onClick={() => {
              dispatch(logoutUser());
              toast.warning("Logged out!", { position: "bottom-left" });
            }}
          >
            Logout
          </div>
          <Link to="/login"><FiLogIn /></Link>
          <Link to="/register"><FiUserPlus /></Link>
          <Link to="/cart">
            <FiShoppingCart />
            {cartTotalQuantity > 0 && (
              <span className="bag-quantity">{cartTotalQuantity}</span>
            )}
          </Link>
        </UserActions>
      </TopHeader>
    </HeaderWrapper>
  );
};

// Styled components

const HeaderWrapper = styled.header`
padding: 1rem 5%;

@media (max-width: 768px) {
  padding: 0.5rem 2%;
}
`;

const TopHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

@media (max-width: 768px) {
  flex-direction: column;
}
`;

const BrandAndSocial = styled.div`
display: flex;
  align-items: center;
  color: black;

  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 1rem;
  }
`;

const SocialIcons = styled.div`
display: flex;
gap: 1rem;
color: black; 

a {
  color: black; 

  &:hover {
    color: #555;
  }
}

@media (max-width: 768px) {
  margin-bottom: 1rem;
}
`;



const SearchBar = styled.div`
display: flex;
align-items: center;
justify-content: right;
padding: 0.5rem;
border: 2px solid #ccc;
border-radius: 25px;
margin: 1rem auto;
width: 800px;
box-shadow: 0 2px 5px rgba(0,0,0,0.2);

input {
  flex: 1; 
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
  border-radius: 25px 0 0 25px;
  width: 100px;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  background: #000;
  color: #fff; 
  cursor: pointer;
  outline: none;
  border-radius: 0 25px 25px 0; 
}

// Style for the search icon inside the button
button svg {
  color: #fff;
  font-size: 1.2rem;
}

// Responsive adjustments for smaller screens
@media (max-width: 768px) {
  width: 90%; 
}
`;


const UserActions = styled.div`
display: flex;
align-items: center;
color: black;

a, div {
  margin-left: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: black; 
  &:hover {
    color: #555; 
  }
}
.bag-quantity {
  background-color: black;
  color: white;
  border-radius: 50%;
  font-size: 0.8rem;
  position: relative;
  top: -10px;

}
`;


export default Header;
