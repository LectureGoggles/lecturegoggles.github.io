import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardDiv = styled.div`
  border-radius: 18px;
  border: 1px solid #90a4ae;
  margin: 3px;
  padding-top: 3px;
  vertical-align: baseline;
  min-width: 168px;
`;

const CardImage = styled.img``;

const PaperCard = ({ title, imageSrc, link }) => (
  <CardDiv>
    <p style={{ fontSize: '20px' }}>{title}</p>
    <a href={link}>
      <CardImage src={imageSrc} alt="avatar" width="160px" height="200px" />
    </a>
  </CardDiv>
);

PaperCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default PaperCard;
