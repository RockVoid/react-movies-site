import { useRef } from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.header`
    background-color: #2f3640;
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    h1 {
        color: #fff;
    }

    input {
        border-radius: 50px;
        border: 1px solid #192a56;
        padding: 0.5rem;
        outline: none;
        background-color: #ccdcf3;
        font-size: 1rem;

        &:focus {
            background-color: #b8c7eb;
            transform: scale(0.96);
        }
    }
`;

const Header = ({ getQuery, putQuery}) => {
    const inputRef = useRef('');

    const handleChange = event => (putQuery(event))
    const handleSubmit = search => {
        getQuery(search);

        inputRef.current.value = '';
    }

    return (
        <HeaderStyled>
            <h1>Rock Movies Site</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Search term..."
                    onChange={event => handleChange(event.target.value)}
                    ref={inputRef}
                />
            </form>
        </HeaderStyled>
    );
}

export default Header;