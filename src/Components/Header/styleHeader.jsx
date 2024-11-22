import styled from "styled-components";

export const Containerheader = styled.header`

`;
export const Nav = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
padding: 70px 250px;
height: 10vh;
width: 100vw;
`
export const Ul = styled.ul`
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