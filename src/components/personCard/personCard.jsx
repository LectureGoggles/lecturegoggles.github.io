import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardDiv = styled.div`
  border-radius: 18px;
  border: 1px solid #90a4ae;
  margin: 3px;
  padding-top: 3px;
`;

const PersonCard = ({ name, imageSrc }) => (
  <CardDiv>
    <img src={imageSrc} alt="avatar" width="200px" height="200px" />
    <h3>{name}</h3>
  </CardDiv>
);

PersonCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageSrc: PropTypes.string
};

PersonCard.defaultProps = {
  imageSrc: 'Avatar.svg'
};

export default PersonCard;
