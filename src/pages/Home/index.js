import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MovieList, DetailsMovie, ImageMovie, Title, Genere } from './styles';

import api from '../../services/api';

class Home extends Component {
    state = {
        url: '',
        movieList: []
    };

    async componentDidMount() {
        const response = await api.get(`/popular?api_key=14ff7d5e5b5ac073419275359d9759a0&language=pt-BR`);

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

    render() {
        const { movieList, url } = this.state;

        return (
          <MovieList>
            { movieList.map(movie => (
                <DetailsMovie to={`/details/${movie.id}`} onClick={() => this.handleActor(movie)}>
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
        );
    }
}

export default connect()(Home);