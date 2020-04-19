import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

export const MovieImage = styled.img`

`;

export const MovieInfo = styled.div`
    max-width: 850px;
    background: rgba(0, 0, 0, 0.5);
`;

export const Title = styled.h1`
    margin-top: 20px;
    margin-bottom: 40px;
    margin-left: 15px;
    color: #ffff00;
`;

export const Description = styled.span`
    margin-left: 20px;
    font-size: 20px;
    color: #ddd;
`;

export const Genres = styled.span`
    color: #fff;
`;

export const OthersInfo = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #000;
    padding: 15px;
    margin-top: 259px;
`;

export const ReleaseData = styled.span`
    color: #fff;
    margin-left: 10px;
    font-size: 18px;
`;

export const Duration = styled.span`
    color: #fff;
    font-size: 18px;
`;

export const Budget = styled.span`
    color: #fff;
    font-size: 18px;
    margin-right: 10px;
`;