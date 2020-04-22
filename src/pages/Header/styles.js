import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 50px;
`;

export const LeftHeader = styled.header`
    display: flex;
    align-items: center;
`;

export const HomeLogo = styled.a`
    display: flex;
    align-items: center;
`;

export const AppName = styled.h1`
    color: #ffff00;
    font-size: 26px;
    margin-left: 10px;
`;

export const InputMovie = styled.input`
    height: 40px;
    width: 300px;
    margin-left: 20px;
    border-radius: 4px;
    border: 1px solid #999;
    font-size: 16px;
    padding: 10px;
`;

export const RightHeader = styled.header`
    display: flex;
    align-items: center;
`;

export const GitHub = styled.a`
    
`;

export const ButtonSign = styled.button`
    height: 35px;
    width: 80px;
    background: #E02041;
    border-radius: 4px;
    border: 1px solid #E02041;
    margin-left: 25px;
    transform: opacity 0.3s;

    &:hover {
        opacity: 0.7;
    }
`;

export const ButtonSignText = styled.span`
    color: #FFF;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
`;