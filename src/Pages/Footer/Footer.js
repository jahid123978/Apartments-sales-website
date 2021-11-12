import React from 'react';
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
  } from "./FooterStyles";
    

const Footer = () => {
    return (
        <Box style={{marginTop: '100px'}}>
      <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "10px" }}>
        Beautiful Apartments Here
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>
            <FooterLink href="#">Legal Notice</FooterLink>
            <FooterLink href="#">Privacy Notice</FooterLink>
          </Column>
          <Column>
            <Heading>Featured Cities</Heading>
            <FooterLink href="#">Riverside, CA</FooterLink>
            <FooterLink href="#">College Station, TX</FooterLink>
            <FooterLink href="#">Bellevue, WA</FooterLink>
            <FooterLink href="#">Madison, WI</FooterLink>
            <FooterLink href="#">Ook Park, IL</FooterLink>
          </Column>
          <Column>
            <Heading>Quick Links</Heading>
            <FooterLink href="#">Add Your Property</FooterLink>
            <FooterLink href="#">Post Requirement </FooterLink>
            <FooterLink href="#">Advertise with Us</FooterLink>
            <FooterLink href="#">Search Properties</FooterLink>
            <FooterLink href="#">Featured Properties</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-telegram">
                <span style={{ marginLeft: "10px" }}>
                  Telegram
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
    );
};

export default Footer;