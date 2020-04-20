import React, { Component } from 'react';
import { connect } from 'react-redux';

import api from '../../services/api';

import { ActorList, Header, TextHeader, List, 
    ActorImage, ActorName, ActorNameMovie
} from './styles';

class Actor extends Component {
    state = {
        urlImage: '',
        actors: []
    };

    async componentDidMount() {
        const { actor } = this.props;

        const response = await api.get(`${actor.id}/credits?api_key=14ff7d5e5b5ac073419275359d9759a0`);

        const url = 'http://image.tmdb.org/t/p/w300/'

        const data = {
            nameReal: response.data.cast.map(name => {
                return name.name
            }),
            nameMovie: response.data.cast.map(nameMovie => {
                return nameMovie.character
            }),
            image: response.data.cast.map(profile => {
                return profile.profile_path
            }),
        };

        console.log(data.image);

        this.setState({
            actors: response.data.cast,
            urlImage: url
        });

        console.log(response.data);
    }

    render() {
        const { actors, urlImage } = this.state;

        return (
            <>
                <Header>
                    <TextHeader> Actors </TextHeader>    
                </Header>
    
                <ActorList>
                    <List>
                        { actors.map(actor => (
                            <li key={actor.nameReal}>
                                <ActorImage 
                                    src={urlImage+actor.profile_path}
                                    alt={actor.name ? "" : actor.name} 
                                />
                                    
                                <div>
                                    <ActorName> { actor.character } </ActorName>
                                    <ActorNameMovie> { actor.name } </ActorNameMovie>
                                </div>
                            </li>
                        ))}
                        </List>                   
                </ActorList>
            </>  
        );
    }
}

const mapStateToProps = (state) => ({
    actor: state.actors,
});

export default connect(mapStateToProps)(Actor);
