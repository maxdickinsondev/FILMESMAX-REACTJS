import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoDeviceCameraVideo } from 'react-icons/go';
import { FaGithub, FaSearch } from 'react-icons/fa';

import { searchMovie } from '../../store/modules/search/actions';

import { Container, LeftHeader, AppName, InputMovie, 
    RightHeader, ButtonSign, ButtonSignText, HomeLogo,
    GitHub, ButtonSubmit
} from './styles';

class Header extends Component {
    state = {
        searchMovie: ''
    };

    componentDidUpdate(_, prevState) {
        const { searchMovie } = this.state;

        if (prevState.searchMovie != searchMovie) {
            localStorage.setItem('movie', JSON.stringify(searchMovie));
        }
    }

    handleSearch = title => {
        const { dispatch } = this.props;

        dispatch(searchMovie(title));
    }

    handleInput = e => {
        const { searchMovie } = this.state;
    
        this.setState({ searchMovie: e.target.value });

        this.handleSearch(searchMovie);
    }

    handleRefresh() {
        window.location.reload();
    }

    handleReset() {
        localStorage.setItem('page', 1);
        window.location.reload();
    }

    render() {
        const { searchMovie } = this.state;

        return (
            <Container>
                <LeftHeader>
                    <HomeLogo href="/" onClick={this.handleReset}>
                        <GoDeviceCameraVideo size={45} color="#ffff00" />
                        <AppName> FilmesMax </AppName>
                    </HomeLogo>
    
                    <InputMovie 
                        placeholder="Search by movie title"
                        value={searchMovie}
                        onChange={this.handleInput}
                    />

                    <ButtonSubmit onClick={this.handleRefresh}>
                        <FaSearch size={25} color="#000" />
                    </ButtonSubmit>
                </LeftHeader>
    
                <RightHeader>
                    <GitHub href="https://github.com/maxdickinsondev/filmesmax" target="_blank">
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
