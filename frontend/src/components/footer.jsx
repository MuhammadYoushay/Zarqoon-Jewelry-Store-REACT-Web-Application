import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import pic from "./1.png";


const DealCardSec = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
  margin: 1rem 0;
  text-align: center; // Center align the text

  img {
    width: 30%; 
    height: auto;
    margin-bottom: 1rem;
  }

  h4 {
    margin-bottom: 0.5rem; 

  button {
    background-color: #000;
    color: #fff; 
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
  }
`;


const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Testimonials>
          <h3>Testimonials</h3>
          <TestimonialCard>
            <p>"I loved the jewelry I bought from Zarqoon! The attention to detail is remarkable." - Sarah</p>
          </TestimonialCard>
        </Testimonials>

        <Services>
          <h3>Our Services</h3>
          <ul>
            <li>Worldwide Delivery</li>
            <li>24/7 Support</li>
            <li>Best Discounts</li>
            <li>Best return policy</li>
          </ul>
        </Services>

        <DealOfTheDay>
          <h3>Deal Of The Day</h3>
          <DealCardSec>
          
            <h4>Ruby Stud Earrings</h4>
            <img src={pic} width = {50} alt="Deal of the Day" />
            <p>Exquisite ruby stud earrings set in 14K rose gold.</p>
            <button>Claim The Offer Now!</button>
          </DealCardSec>
        </DealOfTheDay>
      </FooterContent>

      <FooterBottom>
        <FooterSection>
          <h4>POLICIES</h4>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/exchange">Exchange Policy</Link>
          <Link to="/shipping">Shipping Policy</Link>
        </FooterSection>

        <FooterSection>
          <h4>ABOUT</h4>
          <Link to="/about">Company Information</Link>
          <Link to="/contact">Contact Us</Link>
        </FooterSection>

        <NewsletterSection>
          <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
          <NewsletterForm>
            <input type="email" placeholder="Your email address" />
            <button>Subscribe</button>
          </NewsletterForm>
        </NewsletterSection>
      </FooterBottom>
      
    </FooterContainer>
    

    
  );
};

// Styled-components

const FooterContainer = styled.footer`
  width: 100%;
  font-family: 'Arial', sans-serif;
  padding-top: 20px;
  background-color: #f1f1f1; // Adjust as needed
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background: #fff; // Adjust as needed
  margin-bottom: 20px;
`;

const Testimonials = styled.div`
  flex: 1;
  padding: 1rem;
  text-align: center;
`;

const TestimonialCard = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
  margin: 1rem 0;
`;

const Services = styled.div`
  flex: 1;
  padding: 1rem;

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    padding: 0.5rem 0;
  }
`;

const DealOfTheDay = styled.div`
  flex: 1;
  padding: 1rem;
  text-align: center;
`;


const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  background: #333;
  padding: 1rem 2rem;
  color: white;
`;

const FooterSection = styled.div`
  flex: 1;

  h4 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  a {
    color: white;
    text-decoration: none;
    display: block;
  }
`;

const NewsletterSection = styled(FooterSection)`
  align-items: center;
  justify-content: center;
`;

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;

  input {
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    border: 1px solid #ccc;
  }

  button {
    padding: 0.5rem;
    background: black;
    color: white;
    border: none;
    cursor: pointer;
  }
`;


export default Footer;
