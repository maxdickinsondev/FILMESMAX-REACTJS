import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MovieList, DetailsMovie, ImageMovie, Title, Nav, NavList } from './styles';

import Pagination from '../../components/Pagination';
import api from '../../services/api';

class Home extends Component {
    state = {
        url: '',
        movieList: [],
        searchTitle: '',

        currentPage: 1,
    };

    async componentDidMount() {
        const movie = localStorage.getItem('movie');

        const page = localStorage.getItem('page');

        const { currentPage } = this.state;

        const [search, response] = await Promise.all([
            api.get(`/search/movie?api_key=14ff7d5e5b5ac073419275359d9759a0&query=${movie}`),
            api.get(`/movie/popular?api_key=14ff7d5e5b5ac073419275359d9759a0&language=pt-BR&page=${page ? page : currentPage}`),
        ]);

        const url = 'http://image.tmdb.org/t/p/w300';
        
        if (movie) {
            this.setState({ 
                movieList: search.data.results,
                url: url
            });
        } else {
            this.setState({
                movieList: response.data.results,
                url: url
            });
        }

        localStorage.clear();
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

const mapStateToProps = state => ({
    title: state.title
});

export default connect(mapStateToProps)(Home);