import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardDiv = styled.div`
  border-radius: 18px;
  border: 1px solid #90a4ae;
  margin: 3px;
  padding-top: 3px;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: baseline;
  background-color: #0074d9;
  border: 3px solid #0d47a1;
  border-radius: 18px;
  color: #ffffff;
`;

const LinkP = styled.p`
  flex-grow: 2;
`;

const LinkButtonA = styled.a`
  text-decoration: none;
  color: #ffffff;
`;

const LinkButton = styled.button`
  background-color: #e65100;
  border: 2px solid #ff9800;
  width: 40px;
  margin-right: 5px;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

const ResourceCard = ({ title, description, link }) => (
  <CardDiv>
    <h1>{title}</h1>
    <p>{description}</p>
    <LinkContainer>
      <LinkP>{link.length < 33 ? link : `${link.substring(0, 30)}...`}</LinkP>
      <LinkButtonA href={link}>
        <LinkButton> &gt; </LinkButton>
      </LinkButtonA>
    </LinkContainer>
  </CardDiv>
);

ResourceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

ResourceCard.defaultProps = {};

export default ResourceCard;
