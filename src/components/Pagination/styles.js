import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    place-content: center;
    height: 65px;
    margin-top: 50px;
    margin-bottom: 15px;
    background: rgba(0, 0, 0, 0.5);
`;

export const Pages = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;

    li {
        display: flex;
        align-items: center;
        list-style: none;
        margin: 0 10px;

        button {
            height: 30px;
            width: 20px;
            background: transparent;
            border: none;
            color: #eee;
            font-size: 20px;
            animation: opacity 0.5s;

            &:hover {
                opacity: 0.5;
            }
        }
    }
`;

export const ButtonPage = styled.button`

`;