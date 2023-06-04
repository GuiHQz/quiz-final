import styled from "styled-components";

export const Container = styled.div`
  text-align: center;

  h1 {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: #a91079;
  }
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;

  /* border: 1px solid yellow; */
`;

export const Participants = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 0 15px;
  color: #a91079;
  height: 51px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

// export const Avatar = styled.img`
//   border-bottom: 1px solid white;
//   height: 2rem;
//   width: 2rem;
//   width: 8%;
// `

export const Name = styled.div`
  border-bottom: 1px solid white;
  height: 2rem;
  width: 70%;
`;

export const Score = styled.div`
  border-bottom: 1px solid white;
  height: 2rem;
  width: 22%;
`;

export const ChampionsButton = styled.button`
  outline: none;
  padding: 20px;
  margin-top: 50px;
  font-weight: 700;
  border: none;
  border-radius: 5px;
  color: #FFF;
  background-color: #a91079;
  :hover{
    border: 0.5px solid #a91079;
    color: #a91079;
    background-color: #2e0249;
    cursor: pointer;
  }
  `