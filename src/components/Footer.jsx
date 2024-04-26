import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #2c3e50;
  color: #f8f9fa;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const FooterSection = styled.div`
  flex: 1;
  padding: 10px;
  min-width: 150px;

  & h4 {
    color: #ecf0f1;
  }
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;

  & li {
    margin-bottom: 8px;
  }

  & a {
    color: #bdc3c7;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #ecf0f1;
    }
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  gap: 10px;

  & a {
    color: #bdc3c7;
    font-size: 24px;

    &:hover {
      color: #ecf0f1;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <h4>About Us</h4>
        <p>Providing quality web solutions since 2022. Dedicated to your success and satisfaction.</p>
      </FooterSection>
      <FooterSection>
        <h4>Quick Links</h4>
        <LinkList>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </LinkList>
      </FooterSection>
      <FooterSection>
        <h4>Follow Us</h4>
        <SocialMediaIcons>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram"></i>
          </a>
        </SocialMediaIcons>
      </FooterSection>
    </FooterContainer>
  );
};

export default Footer;
