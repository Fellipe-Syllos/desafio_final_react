import styled from "styled-components";

export const Main = styled.main`
display: flex;
flex-direction: column;
width: 100vw;
max-height: 90vh;
font-family: "Poppins", sans-serif;
`
export const SectionText = styled.section`
width: 50%;
height: 30%;
margin-left: 5%;
padding: 6% 3%;`

export const H2 = styled.h2`
font-size: 4rem;
font-weight: 400;
`
export const Span = styled.span`
font-weight: bolder;
color:#037143;
`
export const Button = styled.button`
max-width: 13rem;
background-color: #037143;
color: white;
border: none;
padding: 1rem 3.5rem;
font-weight: bold;
border-radius: 1.5rem;
margin-top: 1rem;`

export const Div = styled.div`
position: absolute;
bottom: 0%;
margin-left: 50%;
`    

export const SectionCopo = styled.section`
position: absolute;
bottom: 0%;
left: 50%;
width: 50%;
height: 50%;
`
export const Copo = styled.img`
position: absolute;
left: 39%;
bottom: 17%;
z-index: 2;

`
export const BgCopo = styled.img`
position: absolute;
left: 39%;
bottom: 0%;
`