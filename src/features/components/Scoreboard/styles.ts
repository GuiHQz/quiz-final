import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  z-index: 100;
`

export const TeamOne = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  background-color: orange;
  gap: 200px;
  width: 50%;
  font-weight: 700;
  border-bottom: 1px solid black;

  @media screen and (max-width: 1115px) {
    gap: 80px;
  }
  @media screen and (max-width: 650px) {
    gap: 65px;
  }
  label {
    font-size: 40px;
    @media screen and (max-width: 1115px) {
      font-size: 35px;
    }
    @media screen and (max-width: 650px) {
      font-size: 20px;
    }
  }
`

export const TeamTwo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  background-color: blue;
  gap: 200px;
  width: 50%;
  font-weight: 700;
  border-bottom: 1px solid black;

  @media screen and (max-width: 1115px) {
    gap: 80px;
  }
  @media screen and (max-width: 650px) {
    gap: 65px;
  }
  label {
    font-size: 40px;
    @media screen and (max-width: 1115px) {
      font-size: 35px;
    }
    @media screen and (max-width: 650px) {
      font-size: 20px;
    }
  }
`

export const ButtonPOne = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  left: 0;
  gap: 5px;
  top: 12px;
  @media screen and (max-width: 1115px) {
    top: 8px;
  }
  @media screen and (max-width: 650px) {
    top: 0.5px;
  }
`

export const ButtonPTwo = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  right: 0;
  gap: 5px;
  top: 12px;
  @media screen and (max-width: 1115px) {
    top: 8px;
  }
  @media screen and (max-width: 650px) {
    top: 0.5px;
  }
`

export const Scores = styled.div`
  padding: 0 10px;
  font-weight: 500;
  border-left: 1px solid black;
  border-right: 1px solid black;
`