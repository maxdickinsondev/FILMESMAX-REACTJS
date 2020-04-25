import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { MovieList, DetailsMovie, ImageMovie, Title, Genere, Nav, NavList } from './styles';

import Pagination from '../../components/Pagination';
import api from '../../services/api';

class Home extends Component {
    state = {
        url: '',
        movieList: [],

        currentPage: 1,
        moviesPerPage: 20,
        numberPages: 1
    };

    async componentDidMount() {
        const page = await localStorage.getItem('page');

        const { currentPage } = this.state;

        const response = await api.get(`/movie/now_playing?api_key=14ff7d5e5b5ac073419275359d9759a0&language=pt-BR&page=${page ? page : currentPage}`);

        const url = 'http://image.tmdb.org/t/p/w300';

        this.setState({ 
            movieList: response.data.results,
            numberPages: response.data.total_pages,
            url: url 
        });
    }

    componentDidUpdate() {
        const { numberPages } = this.state;

        localStorage.setItem('numberPages', JSON.stringify(numberPages));
    }

    handleActor = movie => {
        const { dispatch } = this.props;

        dispatch({
            type: '@actor',
            movie,
        });
    }

    render() {
        const { movieList, url, moviesPerPage } = this.state;

        return (
            <>
                <Nav>
                    <NavList>
                        <li><Link to="/">Popular</Link></li>
                        <li><Link to="/nowplaying">Now playing</Link></li>
                        <li><Link to="/toprated">Top rated</Link></li>
                        <li><Link to="/upcoming">Up coming</Link></li>
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
                                    <Genere>Fantasy</Genere>
                                </div>
                            </li>
                        </DetailsMovie>
                    ))}
                </MovieList> 

                <Pagination 
                    moviesPerPage={moviesPerPage}
                />
            </>
        );
    }
}

export default connect()(Home);