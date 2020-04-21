import React, { Component } from 'react';
import { GoDeviceCameraVideo } from 'react-icons/go';
import { FaGithub } from 'react-icons/fa';

import { Container, LeftHeader, AppName, InputMovie, 
    RightHeader, ButtonSign, ButtonSignText, HomeLogo,
    GitHub
} from './styles';

export default class Header extends Component {
    render() {
        return (
            <Container>
                <LeftHeader>
                    <HomeLogo href="/">
                        <GoDeviceCameraVideo size={45} color="#ffff00" />
                        <AppName>FilmesMax</AppName>
                    </HomeLogo>
    
                    <InputMovie 
                        placeholder="Search by movie title"
                    />
                </LeftHeader>
    
                <RightHeader>
                    <GitHub href="https://github.com/maxdickinsondev">
                        <FaGithub size={20} color="#fff" />
                    </GitHub>
                    
                    <ButtonSign>
                        <ButtonSignText>Sign in</ButtonSignText>
                    </ButtonSign>
                </RightHeader>
            </Container>
        );
    }
}