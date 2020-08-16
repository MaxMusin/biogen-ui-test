import React from 'react';
import styled from 'styled-components';

const AvatarWrapper = styled.div`
  height: 40px;
  width: 40px;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  z-index: 1;
  background: ${props => props.theme.color.gray};
`;

const Image = styled.img`
  min-width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
`;

const Text = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.25rem;
  text-align: center;
  color: ${props => props.theme.color.white};
  font-family: ${props => props.theme.color.white};
`;

const Avatar = ({imageSrc, altText}) => (
  <AvatarWrapper>
    {imageSrc ? (<Image src={imageSrc} alt={altText}/>) : (<Text>J</Text>)}
  </AvatarWrapper>
);

export default Avatar;