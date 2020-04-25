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
        searchTitle: '',

        currentPage: 1,
        moviesPerPage: 20,
        numberPages: 1
    };

    async componentDidMount() {
        const movie = localStorage.getItem('movie');

        const page = await localStorage.getItem('page');

        const { currentPage } = this.state;

        const [search, response] = await Promise.all([
            api.get(`/search/movie?api_key=14ff7d5e5b5ac073419275359d9759a0&query=${movie}`),
            api.get(`/movie/popular?api_key=14ff7d5e5b5ac073419275359d9759a0&language=pt-BR&page=${page ? page : currentPage}`)
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
                numberPages: response.data.total_pages,
                url: url
            });
        }

        //localStorage.clear();
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
        const { movieList, url, currentPage, moviesPerPage } = this.state;

        const indexOfLastMovie = currentPage * moviesPerPage;
        const indexOfFirstPost = indexOfLastMovie - moviesPerPage;
        const currentMovies = movieList.slice(indexOfFirstPost, indexOfLastMovie);

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

const mapStateToProps = state => ({
    title: state.title
});

export default connect(mapStateToProps)(Home);