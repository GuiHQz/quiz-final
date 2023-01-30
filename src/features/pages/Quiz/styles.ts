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
	top: 47px;
	left: 50%;
	right: 50%;
`
export const ToggleWrapper = styled.div`
	display: flex;
	justify-content: center;
`

export const Content = styled.div`
	height: 100vh;
	background-color: #212121;
`

export const ContentWrapper = styled.div<{opacity: number}>`
	padding-top: 250px;
`