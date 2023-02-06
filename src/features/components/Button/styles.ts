import styled from "styled-components";

export const Container = styled.div`
	font-family: 'Libre Franklin', sans-serif;
`

export const Button = styled.div`
	display: flex;
	color: white;
	cursor: pointer;
	align-items: center;
	background-color: #A91079;
	justify-content: space-around;
	width: 100%;
	padding: 20px;
	font-size: 50px;
	font-weight: 700;
	border-radius: 10px;
	:hover {
		background-color: #2E0249;
		color: #A91079;
	}
`