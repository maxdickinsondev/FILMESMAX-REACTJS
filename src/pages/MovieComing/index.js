import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MovieList, DetailsMovie, ImageMovie, Title, Nav, NavList } from './styles';

import Pagination from '../../components/Pagination';
import api from '../../services/api';

class Home extends Component {
    state = {
        url: '',
        movieList: [],

        currentPage: 1,
    };

    async componentDidMount() {
        const page = localStorage.getItem('page');

        const { currentPage } = this.state;

        const response = await api.get(`/movie/upcoming?api_key=14ff7d5e5b5ac073419275359d9759a0&language=pt-BR&page=${page ? page : currentPage}`);

        const url = 'http://image.tmdb.org/t/p/w300';

        this.setState({ 
            movieList: response.data.results,
            url: url 
        });
    }

    handleActor = movie => {
        const { dispatch } = this.props;

        dispatch({
            type: '@actor',
            movie,
        });
    }

    handleReset() {
        localStorage.setItem('page', 1);
    }

    render() {
        const { movieList, url } = this.state;

        return (
            <>
                <Nav>
                    <NavList>
                        <li><a href="/" onClick={this.handleReset}>Popular</a></li>
                        <li><a href="/nowplaying" onClick={this.handleReset}>Now playing</a></li>
                        <li><a href="/toprated" onClick={this.handleReset}>Top rated</a></li>
                        <li><a href="/upcoming" onClick={this.handleReset}>Up coming</a></li>
                    </NavList>
                </Nav>

                <MovieList>
                    {movieList.map(movie => (
                        <DetailsMovie href={`/details/${movie.id}`} onClick={() => this.handleActor(movie)}>
                            <li key={movie.id}>
                                <ImageMovie 
                                    src={url+movie.poster_path}
                                    alt="Movie"
                                />

                                <div>
                                    <Title> {movie.title} </Title>
                                </div>
                            </li>
                        </DetailsMovie>
                    ))}
                </MovieList>

                <Pagination />
            </>
        );
    }
}

export default connect()(Home);