import React from 'react';
import { FaHeart } from 'react-icons/fa';

import { Container } from './styles';

export default function Footer() {
    return (
        <Container>
            &copy; made with <FaHeart color="#E03041"/> by 
            <a href="https://github.com/maxdickinsondev" target="_blank"> MaxDickinson </a>
        </Container>
    );
}