import React, { Component } from 'react';
import { connect } from 'react-redux';

import Switch from 'react-switch';
import api from '../../services/api';

import { ActorList, Header, TextHeader, List, 
    ActorImage, ActorName, ActorNameMovie, SwitchInfo,
    SwitchText
} from './styles';

class Actor extends Component {
    state = {
        urlImage: '',
        actors: [],
        numberActors: [],

        isEnabled: false
    };

    async componentDidMount() {
        const { actor } = this.props;
        
        const response = await api.get(`/movie/${actor.id}/credits?api_key=14ff7d5e5b5ac073419275359d9759a0`);

        const url = 'http://image.tmdb.org/t/p/w300/';

        this.setState({
            actors: response.data.cast,
            urlImage: url
        });
    }

    componentDidUpdate(_, prevState) {
        const { actors, numberActors } = this.state;
        const numbers = [];

        if (prevState.actors != actors) {
            for (let i = 0; i < 6; i++) {
                numbers.push(actors[i]);
            }

            this.setState({ numberActors: numbers });
            //console.log(numberActors);
        }
    }

    handleSwitch = () => {
        const { isEnabled } = this.state;

        this.setState({ isEnabled: !isEnabled });
    }

    render() {
        const { actors, urlImage, isEnabled, numberActors } = this.state;

        console.log(numberActors);

        return (
            <>
                <Header>
                    <TextHeader> Actors </TextHeader>
                    <SwitchInfo>
                        <Switch 
                            checked={isEnabled}
                            onChange={this.handleSwitch}
                            onColor="#86d3ff"
                            onHandleColor="#2693e6"
                            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                            handleDiameter={25}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            height={20}
                            width={48}
                            className="react-switch"
                        />

                        <SwitchText> Show all </SwitchText>
                    </SwitchInfo>
                </Header>
    
                <ActorList>
                    <List>
                        { isEnabled ? actors.map(actor => (
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
                        )) : numberActors.map(actor => (
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
