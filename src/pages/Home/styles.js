import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieList = styled.ul`
    
    li {
        display: flex;
        flex-direction: column;

        div {
            max-width: 202px;
            min-height: 140px;
            background: #000;
            padding: 20px;
        }
    }
`;

export const DetailsMovie = styled(Link)`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 25px;
`;

export const ImageMovie = styled.img`
    max-width: 202px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
`;

export const Title = styled.span`
    color: #eee;
    line-height: 25px;
    
`;

export const Genere = styled.span`
    color: #eee;
    line-height: 25px;
`;