import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 10px;
    margin-left: 10px;
`;

export const MovieImage = styled.img`
    width: 280px;
`;

export const MovieInfo = styled.div`
    max-width: 850px;
    max-height: 362px;
    max-width: 800px;
    min-width: 800px;
    background: rgba(0, 0, 0, 0.5);
`;

export const Info = styled.div`
    max-height: 300px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    margin-top: 20px;
    margin-bottom: 40px;
    margin-left: 20px;
    color: #ffff00;
`;

export const Description = styled.span`
    margin-left: 20px;
    padding-right: 10px;
    max-height: 300px;
    min-height: 190px;
    font-size: 20px;
    color: #ddd;
`;

export const Genres = styled.span`
    color: #fff;
    margin-left: 20px;
`;

export const OthersInfo = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #000;
    padding: 15px;
    margin-top: 62px;
`;

export const ReleaseData = styled.span`
    color: #fff;
    margin-left: 10px;
    font-size: 18px;
    display: flex;
    align-items: center;
`;

export const Duration = styled.span`
    color: #fff;
    font-size: 18px;
    display: flex;
    align-items: center;
`;

export const Budget = styled.span`
    color: #fff;
    font-size: 18px;
    margin-right: 10px;
    display: flex;
    align-items: center;
`;