import React from 'react';
import styled from 'styled-components';
import bannerImage from './Screenshot 2023-12-07 104537.png';


const HomePage = () => {
  return (
    <div>
      <BannerImage src={bannerImage} alt="Banner" />
    </div>                                                          
  );
};

const BannerImage = styled.img`
  width: 100%;
  height: auto;
  margin-top: 20px;
`;

export default HomePage;
