import React from "react";
import { Link } from "react-router-dom";
import style from "styled-components"

const Section=style.div`
background:black;
text-decoration:none;
color:red;
font-weight:600;
display:flex;
flex-direction:row;
align-items: center;
height:12vh;
justify-content: center;

h1{
    color:white;
}
`

const LinkA=style(Link)`
margin-left:15px;
text-decoration:none;
color:red;
font-size:larger;
font-weight:600;
margin-top:-15px
`

export const Navbar = () => {
  return (
    <Section> 
      {/* <h1>Navbar</h1> */}
      <LinkA to="/">Home</LinkA> 
      <LinkA to="/login">Login</LinkA>
      
    </Section>
  );
};
