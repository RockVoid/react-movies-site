import React from 'react';
import styled from 'styled-components';

const StyledErrorContainer = styled.footer`
    color: #fff;
    padding: 1rem;
    text-align: center;
    height: 100vh;
`;

const Error = () => {
	return (
		<StyledErrorContainer>
			<h2>No results found for you search!</h2>
			<h4>Remember: </h4>
			<ul>
				<li>Verify if your search is correctly!</li>
				<li>Type only letters or numbers!</li>
				<li>Never use special characters, like "@, #, $".</li>
			</ul>
		</StyledErrorContainer>
	);
}

export default Error;