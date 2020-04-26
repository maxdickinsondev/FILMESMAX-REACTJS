import styled from 'styled-components';

export const Container = styled.div`
    
`;

export const Header = styled.header`
    background: #fff;
    max-width: 1100px;
`;

export const TextHeader = styled.h1`
    font-size: 30px;
    color: #999;
    padding: 20px;
    text-transform: uppercase;
`;

export const MovieList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    
    background: #fff;
    max-width: 1100px;
    min-width: 900px;

    margin-bottom: 30px;
`;

export const DetailsMovie = styled.a`

    animation-delay: transform 0.2s;
   
    li {
        display: flex;
        flex-direction: column;
        align-items: center;

        div {
            background: #000;
            padding: 20px;
            max-width: 185px;
            min-height: 120px;
            margin-bottom: 30px;
        }
    }

    &:hover {
        transform: translateY(-20px);
    }
`;

export const ImageMovie = styled.img`
    max-width: 202px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
`;

export const TitleMovie = styled.span`
    color: #eee;
    line-height: 25px;
    margin-bottom: 5px;
`;

export const Genre = styled.span`
    color: #eee;
    line-height: 25px;
`;