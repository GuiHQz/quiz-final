import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  color: black;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`

export const Content = styled.div`
  background-color: white;
  border-radius: 10px;
  overflow-y: auto; 
  max-height: 80%;
  width: 80%;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: #F0F0F0;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #C0C0C0;
  }
`

export const Close = styled.button`
  border: none;
  display: flex;
  outline: none;
  cursor: pointer;
  position: relative;
  align-items: center;
  background-color: transparent;
  top: 15px;
  width: 32px;
  height: 32px;
  right: calc(-100% + 45px);
  &:before,
  &:after {
    content: ' ';
    position: absolute;
    width: 2.5px;
    height: 24px;
    background-color: red;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`

export const Header = styled.div`
  font-family: 'Roboto', sans-serif;
  margin-bottom: 100px;
`

export const Button = styled.button`
  .singleOption {
    width: 46%;
    height: 50px;
    padding: 15px 20px;
    margin: 10px;
    box-shadow: 0 0 2px black;
  }
  background-color: gray;
  cursor: pointer;
  margin: 10px;
  height: 100px;
  width: 400px;
  border: none;
  font-weight: bold;
  :hover {
    background-color: #4f4f4f;
  }
`

export const Image = styled.div`
  img{
    max-width: 500px;
    max-height: 500px;
  }
`