// Write your Character component here
import React from "react";
import styled from "styled-components"


const CharacterCard = styled.div`
	font-size: 1.8rem;
	background-color: black;
	width: 70%;
	margin: 0 auto;
	margin-bottom:3%;
	color: white;
	padding: 0.2%;
	border: 5px solid white;
`
const Name = styled.h2`
color: white;
font-size:1.5rem;
`
const Info = styled.p`
text-align: center;
` 

const Character = (props) => {



	return (
		<CharacterCard>
			<Name>
				{props.data.name}
			</Name>
			<Info>{`Height: ${props.data.height}`}</Info>
			<Info>{`Mass: ${props.data.mass}`}</Info>
			<Info>{`Gender: ${props.data.gender}`}</Info>
			<Info>{`DOB: ${props.data.birth_year}`}</Info>
		</CharacterCard>
	)

}

export default Character;