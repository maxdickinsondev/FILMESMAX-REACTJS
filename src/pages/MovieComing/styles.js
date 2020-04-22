import styled from 'styled-components';

export const Nav = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 55px;
    border-radius: 4px;
    height: 40px;
`;

export const NavList = styled.ul`
    display: flex;
    flex-direction: row;
    
    li {
        display: flex;
        align-items: center;
        font-size: 16px;
        border: 0.1px solid #eee;
        list-style: none;
        height: 35px;
        transform: opacity 0.2s;

        &:hover {
            opacity: 0.7;
        }

        a {
            color: #ddd;
            margin: 10px;
            text-decoration: none;
        }
    }
`;

export const MovieList = styled.ul`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 25px;  
`;

export const DetailsMovie = styled.a`
    animation-delay: transform 0.2s;

    li {
        display: flex;
        flex-direction: column;

        div {
            display: flex;
            flex-direction: column;
            max-width: 202px;
            min-height: 140px;
            background: #000;
            padding: 20px;
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

export const Title = styled.span`
    color: #eee;
    line-height: 25px;
    margin-bottom: 5px;
`;

export const Genere = styled.span`
    color: #eee;
    line-height: 25px;
`;