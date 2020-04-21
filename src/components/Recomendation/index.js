import React, { Component } from 'react';
import { connect } from 'react-redux';

import api from '../../services/api';

import { Container, Header, TextHeader, MovieList, 
    DetailsMovie, ImageMovie, TitleMovie, Genre 
} from './styles';

class Recomendation extends Component {
    state = {
        urlImage: '',
        recomendation: []
    };

    async componentDidMount() {
        const { recomen } = this.props

        const response = await api.get(`${recomen.id}/recommendations?api_key=14ff7d5e5b5ac073419275359d9759a0&lanaguage=pt-BR`);

        const url = 'http://image.tmdb.org/t/p/w185/';

        this.setState({
            recomendation: response.data.results,
            urlImage: url
        });
    }

    handleRecomendation = movie => {
        const { dispatch } = this.props;

        dispatch({
            type: '@actor',
            movie
        });

        window.location.reload();
    }

    render() {
        const { recomendation, urlImage } = this.state;

        return (
            <Container>
                <Header>
                    <TextHeader> Recomendations </TextHeader>    
                </Header>

                <MovieList>
                    {recomendation.map(movie => (
                        <DetailsMovie to={`/details/${movie.id}`} onClick={() => this.handleRecomendation(movie)}>
                            <li key={movie.id}>
                                <ImageMovie src={urlImage+movie.poster_path} />

                                <div>
                                    <TitleMovie> {movie.title} </TitleMovie>
                                    <Genre> Action, Crime, Comedy </Genre>
                                </div>
                            </li>
                        </DetailsMovie>
                    ))}
                </MovieList>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    recomen: state.actors,
});

export default connect(mapStateToProps)(Recomendation);