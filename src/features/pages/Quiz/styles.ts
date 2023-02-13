import styled from "styled-components";

export const Container = styled.div`
  
`

export const Scoreboard = styled.div`
	width: 100%;
	position: absolute;
`

export const Toggle = styled.div`
	display: block;
	position: absolute;
	top: 60px;
	left: 50%;
	right: 50%;
`
export const ToggleWrapper = styled.div`
	display: flex;
	justify-content: center;
	font-family: 'Roboto', sans-serif;
	button {
		border: none;
		cursor: pointer;
		background-color: gray;
		margin: 0 20px;
		padding: 5px 15px;
		font-weight: 700;
		:hover {
			background-color: white;
		}
	}
`

export const Content = styled.div`
	height: 100vh;
	background-color: #212121;
`

export const ContentWrapper = styled.div<{opacity: number}>`
	padding-top: 250px;
`