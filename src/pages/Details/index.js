import React, { Component } from 'react';
import { FaRegMoneyBillAlt, FaRegClock, FaRegCalendarAlt } from 'react-icons/fa';

import api from '../../services/api';

import ActorList from '../../components/Actor';
import Recomendation from '.././../components/Recomendation';

import { Container, MovieImage, MovieInfo, Title, Description, 
    Info, Genres, OthersInfo, ReleaseData, Duration, Budget,
} from './styles';

export default class Details extends Component {
    state = {
        movieDetails: [],
        genres: []
    };

    async componentDidMount() {
        const { match } = this.props;

        const response = await api.get(`${match.params.movieinfo}?api_key=14ff7d5e5b5ac073419275359d9759a0&language=pt-BR`);

        const data = {
            id: response.data.id,
            title: response.data.original_title,
            description: response.data.overview,
            genres: response.data.genres.name,
            date: response.data.release_date,
            duration: response.data.runtime,
            img: response.data.poster_path,
            bilhetery: response.data.budget
        };

        //console.log(data);
        
        this.setState({
            movieDetails: data,
            genres: (response.data.genres.map(genres => {
                return genres.name
            })),
        });
    }

    render() {
        const { movieDetails, genres } = this.state;

        let img = `http://image.tmdb.org/t/p/w300${movieDetails.img}`;

        return (
            <>
                <Container background={img}>
                    <MovieImage 
                        src={`http://image.tmdb.org/t/p/w300${movieDetails.img}`}
                    />
        
                    <MovieInfo>
                        <Info>
                            <Title> {movieDetails.title} </Title>
                            <Description> {movieDetails.description} </Description>
                            <Genres> Genres: { genres } </Genres>
                        </Info>
        
                        <OthersInfo>
                            <ReleaseData>
                                <FaRegCalendarAlt 
                                    size={30}
                                    style={{ marginRight: '10px' }}
                                />
                                Release date: { movieDetails.date } 
                            </ReleaseData>

                            <Duration>
                                <FaRegClock 
                                    size={30}
                                    style={{ marginRight: '10px' }} 
                                />
                                Duration: { movieDetails.duration } min
                            </Duration>

                            <Budget> 
                                <FaRegMoneyBillAlt 
                                    size={30} 
                                    style={{ marginRight: '10px' }} 
                                />
                                Budget: ${ movieDetails.bilhetery } 
                            </Budget>
                            </OthersInfo>
                    </MovieInfo>
                </Container>

                <ActorList />
                <Recomendation />
            </>
        );  
    }
}