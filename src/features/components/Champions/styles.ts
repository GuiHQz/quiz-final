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

export const Participants = styled.tr`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 0 15px;
  color: #A91079;
  height: 51px;
`

// export const Avatar = styled.img`
//   border-bottom: 1px solid white;
//   height: 2rem;
//   width: 2rem;
//   width: 8%;
// `

export const Name = styled.td`
  border-bottom: 1px solid white;
  height: 2rem;
  width: 70%;
`

export const Score = styled.td`
  border-bottom: 1px solid white;
  height: 2rem;
  width: 22%;
`