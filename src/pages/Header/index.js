import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoDeviceCameraVideo } from 'react-icons/go';
import { FaGithub } from 'react-icons/fa';

import { searchMovie } from '../../store/modules/search/actions';

import { Container, LeftHeader, AppName, InputMovie, 
    RightHeader, ButtonSign, ButtonSignText, HomeLogo,
    GitHub
} from './styles';

class Header extends Component {
    state = {
        searchMovie: ''
    };

    handleSearch = title => {
        const { dispatch } = this.props;

        dispatch(searchMovie(title));
    }

    handleInput = e => {
        const { searchMovie } = this.state;
    
        this.setState({ searchMovie: e.target.value });

        this.handleSearch(searchMovie);
    }

    render() {
        const { searchMovie } = this.state;

        return (
            <Container>
                <LeftHeader>
                    <HomeLogo href="/">
                        <GoDeviceCameraVideo size={45} color="#ffff00" />
                        <AppName> FilmesMax </AppName>
                    </HomeLogo>
    
                    <InputMovie 
                        placeholder="Search by movie title"
                        value={searchMovie}
                        onChange={this.handleInput}
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

export default connect()(Header);
