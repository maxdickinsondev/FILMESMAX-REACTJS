import React, { Component } from 'react';
import { GoDeviceCameraVideo } from 'react-icons/go';
import { FaGithub } from 'react-icons/fa';

import { Container, LeftHeader, AppName, InputMovie, RightHeader, ButtonSign, ButtonSignText} from './styles';

export default class Header extends Component {
    render() {
        return (
            <Container>
                <LeftHeader>
                    <GoDeviceCameraVideo  size={45} color="#ffff00" />

                    <AppName>FilmesMax</AppName>
    
                    <InputMovie 
                        placeholder="Search by movie title"
                    />
                </LeftHeader>
    
                <RightHeader>
                    <FaGithub size={20} color="#fff" />

                    <ButtonSign>
                        <ButtonSignText>Sign in</ButtonSignText>
                    </ButtonSign>
                </RightHeader>
            </Container>
        );
    }
}