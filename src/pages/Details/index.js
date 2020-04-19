import React, { Component } from 'react';

import { Container, MovieImage, MovieInfo, Title, Description, 
    Genres, OthersInfo, ReleaseData, Duration, Budget 
} from './styles';

export default class Details extends Component {
    state = {

    };

    async componentDidMount() {
        const { match } = this.props;
    }

    render() {
        return (
            <Container>
                <MovieImage src="http://image.tmdb.org/t/p/w300/iBvo3qOPcmhlqAaJcXcQHtx2qLk.jpg"/>
    
                <MovieInfo>
                    <Title>Mortal Kombat Legends: Scorpion's Revenge</Title>
                    <Description>
                        After the vicious slaughter of his family by stone-cold mercenary Sub-Zero, Hanzo
                        Hasashi is exiled to the torturous Netherrealm.
                    </Description>
                    <Genres> Fantasy, Action, Adventure, Animation </Genres>
    
                    <OthersInfo>
                        <ReleaseData> Release data: 11.4.2020 </ReleaseData>
                        <Duration> Duration: 1h 20m </Duration>
                        <Budget> Budget: $0 </Budget>
                    </OthersInfo>
                </MovieInfo>
            </Container>
        );  
    }
}