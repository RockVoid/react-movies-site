import React from 'react';
import styled from 'styled-components';

const StyleFooter = styled.footer`
    background-color: #2f3640;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;

    a {
        color: white;
        text-decoration: none;
        text-align: center;

        &:hover {
            color: #487eb0;
        }
    }
`;

const linksMenu = [
	{
		content: "Github",
		link: "https://github.com/RockVoid",
	},
	{
		content: "Visit the API link",
		link: "https://developers.themoviedb.org",
	},
	{
		content: "LinkedIn",
		link: "https://www.linkedin.com/in/roque-souza-costa-6aa8171ba/",
	},
	{
		content: "Portfolio",
		link: "https://rockvoid.github.io/",
	},
];

const Footer = () => {
	return (
        <StyleFooter>
            <h3>Roque Costa Dev</h3>
            <ul>
							{linksMenu.map(item => {
								return (
									<li>
										<a
											href={item.link}
											target="_blank"
											rel="noopener noreferrer"
										>
											{item.content}
										</a>
									</li>
								)
							})}
            </ul>
            <small>&copy; Thanks Movie API :D</small>
        </StyleFooter >
    );
}

export default Footer;