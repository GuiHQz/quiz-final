import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
`

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;

  /* border: 1px solid yellow; */
`

export const Participants = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 0 15px;
  color: #A91079;
  height: 39px;
`

export const Avatar = styled.img`
  border: 1px solid black;
  width: 8%;
  padding: 6.8px;
`

export const Name = styled.h4`
  border: 1px solid black;
  width: 70%;
  padding: 9px 0;
`

export const Score = styled.h5`
  border: 1px solid black;
  padding: 10px 0;
  width: 22%;
`