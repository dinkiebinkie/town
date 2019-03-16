import React from "react";
import styled from "styled-components";

const Contact = styled.p`
  text-align: right;
  font-family: "Ogg", serif;
  color: ${props => props.theme.grey};
  padding: 100px 0 30px;
  font-size: 3.2rem;
`;

const Footer = () => <Contact>b@binkie.town</Contact>;

export default Footer;
