import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Bar = styled.div`
  font-family: 'Anybody', cursive;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: linear-gradient(to top, #CFDEF3, #E0EAFC);
  @media screen and (max-width: 1920px){
    padding: 0 10em;
  }
  @media screen and (max-width: 800px){
    padding: 0 0.5em;
  }
`

export const TitleLink = styled.a`
  text-decoration: none;
`

export const Title = styled.h4`
  display: flex;
  flex-direction: column;
  text-align: center; 
  color: black;
  cursor: pointer;
  &:hover {
    color: blueviolet;
  }
  @media screen and (max-width: 800px) {
    font-size: medium;
  }
  @media screen and (max-width: 400px){
    font-size: small;
  }
`

export const Subtitle = styled.h6`
  margin: 0;
`

export const UL = styled.ul`
  display: flex;
  justify-content: end;
`

export const LI = styled.li`
  font-family: 'Anybody', cursive;
  color: black;
  display: flex;
  align-items: center;
  list-style-type: none;
  &:hover {
    color: blueviolet;
  }
  @media screen and (max-width: 1920px) {
    margin: 0 0 0 5em;
  }
  @media screen and (max-width: 800px) {
    margin: 0 0 0 1em;
  }
  @media screen and (max-width: 400px) {
    margin: 0 0 0 0.5em;
  }
  margin: 0 0 0 1em;
  cursor: pointer;
`

export const LiButton = styled.div`
  font-family: 'Kanit', sans-serif;
  color: white;
  background-color: coral;
  border-radius: 10px;
  padding: 10px;
  font-weight: 700;
  &:hover {
    background-color: blueviolet;
    color: white;
  }
`

export const Background = styled.img`
  opacity: 80%;
`

export const Wrapper = styled.div`
  display: flex;
  margin: 2em 0;
  justify-content: space-around;
  @media screen and (max-width: 350px) {
    margin: 2em;
    flex-direction: column;
  }
`

export const WrapperContent = styled.div`
  font-family: 'Anybody', cursive;
  text-align: center;
  border: 1px solid black;
  border-radius: 5px;
  @media screen and (max-width: 1920px) {
    padding: 30px 100px;
  }

  @media screen and (max-width: 750px){
    padding: 20px 50px;
  }

  @media screen and (max-width: 550px){
    padding: 5px;
  }
`

export const WrapperDescription = styled.p`
  font-size: 10px;
`

export const Footer = styled.h6`
  text-align: center;
`

export const FooterDev = styled.a`
  text-decoration: none;
  color: coral;
  &:hover {
    color: blueviolet;
  }
`