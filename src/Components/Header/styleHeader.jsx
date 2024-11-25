import styled from "styled-components";

export const Containerheader = styled.header`
 font-family: "Poppins", sans-serif;
`;
export const Nav = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
padding: 4% 7%;
height: 10vh;
width: 100vw;
`
export const Ul = styled.ul`
color:#1e3932;
height: 10vh;
 display: flex;
 align-items: center;
gap: 1rem;
list-style: none;
a{
text-decoration: none;
color: #1e3932;
&:hover{
    color: tomato;
}
}

`
export const Li = styled.li`
color: #1e3932;
font-size: 1.2rem;
`