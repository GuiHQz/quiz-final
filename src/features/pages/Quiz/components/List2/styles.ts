import styled from "styled-components";

export const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 100px;
  gap: 150px;
`

export const Box = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  color: black;
  background-color: gray;
  gap: 10px;
  width: 125px;
  height: 125px;
  font-size: 40px;
  font-weight: 700;
  :hover {
    background-color: white;
  }
`