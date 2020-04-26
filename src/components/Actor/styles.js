import styled from 'styled-components';

export const ActorList = styled.ul`

    background: #fff;
    max-width: 1100px;

   li {
       display: flex;
       flex-direction: column;
       align-items: center;
       margin-bottom: 25px;
       max-width: 800px;

        img {
            width: 150px;  
        }

        div {
            background: #ddd;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-width: 152px;
            max-width: 152px;
            padding: 20px;
        }
   }
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
`;

export const ActorImage = styled.img`

`;

export const ActorName = styled.span`
    font-size: 18px;
    color: #999;
    margin-bottom: 5px;
`;

export const ActorNameMovie = styled.span`

`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    max-width: 1100px;
`;

export const TextHeader = styled.h1`
    font-size: 30px;
    color: #999;
    padding: 20px;
    text-transform: uppercase;
`;

export const SwitchInfo = styled.div`
    display: flex;
    align-items: center;
`;

export const SwitchText = styled.span`
    margin-right: 20px;
    margin-left: 10px;
`;