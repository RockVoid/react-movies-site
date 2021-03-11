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

const Footer = () => {
    return (
        <StyleFooter>
            <h3>Roque Costa Dev</h3>
            <ul>
                <li>
                    <a
                        href="https://github.com/RockVoid"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                </li>
                <li>
                    <a
                        href="https://developers.themoviedb.org/3/authentication/how-do-i-generate-a-session-id"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visit the API link
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/roque-souza-costa-6aa8171ba/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a
                        href="https://rockvoid.github.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Portfolio
                    </a>
                </li>
            </ul>
            <small>&copy; Thanks Movie API :D</small>
        </StyleFooter>
    );
}

export default Footer;